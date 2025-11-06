import { motion } from 'framer-motion'
import envelopeImage from '../envelope.png'

const EnvelopeAnimation = ({ onOpen }) => {
  const handleClick = () => {
    onOpen()
  }

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full bg-white cursor-pointer overflow-hidden relative"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={envelopeImage}
        alt="Envelope"
        className="w-full h-full object-cover"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          display: 'block'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Rose blur at center */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-rose-300 opacity-30 blur-3xl z-0"
        style={{
          filter: 'blur(80px)'
        }}
      />
      
      {/* Toque para abrir text */}
      <motion.p
        className="absolute bottom-20 left-8 text-black text-base font-medium z-10"
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          letterSpacing: '0.5px'
        }}
        animate={{ 
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Toque para abrir
      </motion.p>
    </motion.div>
  )
}

export default EnvelopeAnimation

