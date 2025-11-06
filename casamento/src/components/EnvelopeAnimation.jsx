import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const EnvelopeAnimation = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (isOpening || isOpen) return
    
    setIsOpening(true)
    
    // Após a animação de abertura, chama o callback
    setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => {
        onOpen()
      }, 300)
    }, 800)
  }

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex items-center justify-center z-50 cursor-pointer"
      onClick={handleClick}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Envelope Container */}
        <motion.div
          className="relative"
          animate={isOpening ? {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          } : {
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={isOpening ? {
            duration: 0.8,
            ease: "easeInOut"
          } : {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Envelope Body */}
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 200"
            className="drop-shadow-2xl"
          >
            {/* Envelope Base */}
            <motion.polygon
              points="50,150 150,100 250,150 250,200 50,200"
              fill="#F8E8E8"
              stroke="#E6A6AD"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Envelope Flap */}
            <motion.polygon
              points="50,150 150,50 250,150"
              fill="#F5AEB4"
              stroke="#E6A6AD"
              strokeWidth="2"
              animate={isOpening ? {
                rotate: [0, -160],
                y: [0, -80],
                opacity: [1, 0.3]
              } : {}}
              transition={isOpening ? {
                duration: 0.8,
                ease: "easeInOut"
              } : {}}
              style={{ transformOrigin: "150px 150px" }}
            />
            
            {/* Decorative Heart on Flap */}
            <motion.circle
              cx="150"
              cy="100"
              r="8"
              fill="#E6A6AD"
              animate={isOpening ? {
                scale: [1, 0],
                opacity: [1, 0]
              } : {
                scale: [1, 1.2, 1],
              }}
              transition={isOpening ? {
                duration: 0.4
              } : {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Letter inside (appears when opening) */}
            <AnimatePresence>
              {isOpening && (
                <motion.rect
                  x="70"
                  y="120"
                  width="160"
                  height="60"
                  fill="#FFFFFF"
                  stroke="#E6A6AD"
                  strokeWidth="1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </svg>
        </motion.div>

        {/* Click hint text */}
        {!isOpening && !isOpen && (
          <motion.p
            className="mt-8 text-center text-rose-400 font-serif text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Toque para abrir
          </motion.p>
        )}

        {/* Expanding overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ 
                scale: [0, 1.5, 3, 5],
                opacity: [1, 1, 0.8, 0]
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.3, 0.6, 1]
              }}
              style={{ 
                transformOrigin: "center center",
                borderRadius: "50%"
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default EnvelopeAnimation

