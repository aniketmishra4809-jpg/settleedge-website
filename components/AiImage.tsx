
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';

interface AiImageProps {
  prompt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  alt?: string;
}

const AiImage: React.FC<AiImageProps> = ({ prompt, className = "", aspectRatio = "1:1", alt = "SettleEdge Visual" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        setLoading(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt}. Professional, high-end, minimalist, luxury consultancy aesthetic, clean lighting, 4k. Strictly no text, no words, no letters, no typography, no watermarks.` }],
          },
          config: {
            imageConfig: { aspectRatio }
          },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt, aspectRatio]);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-50"
          >
            <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : error || !imageUrl ? (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400 text-[10px] uppercase tracking-widest font-bold"
          >
            Visual Unavailable
          </motion.div>
        ) : (
          <motion.img
            key="image"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiImage;
