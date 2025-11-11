import { motion } from 'framer-motion'
import envelopeImage from '../envelope.png'

const EnvelopeAnimation = ({ onOpen }) => {
  const handleClick = () => {
    onOpen()
  }

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden relative"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        margin: 0,
        padding: 0
      }}
    >
      <motion.img
        src={envelopeImage}
        alt="Envelope"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          display: 'block',
          border: 'none',
          outline: 'none',
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Rose blur at center - responsive */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-rose-300 opacity-30 blur-3xl z-0"
        style={{
          filter: 'blur(40px)'
        }}
      />
    </motion.div>
  )
}

export default EnvelopeAnimation

