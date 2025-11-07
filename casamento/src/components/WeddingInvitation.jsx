import { motion } from 'framer-motion'
import { useState } from 'react'
import FloralDecoration from './FloralDecoration'
import InteractiveIcon from './InteractiveIcon'
import HeartIcon from './HeartIcon'
import MapModal from './MapModal'

const WeddingInvitation = () => {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="relative w-full max-w-[430px] mx-auto bg-white min-h-screen md:min-h-0 md:h-auto md:my-8 md:rounded-lg md:shadow-lg flex flex-col overflow-y-auto overflow-x-hidden"
      style={{ width: '100%', maxWidth: '430px' }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Floral Decoration - Top Right */}
      <div className="absolute -top-8 -right-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0">
        <FloralDecoration imageType="arranjo1" />
      </div>

      {/* Top Floral Decoration - Top Left (inverted) */}
      <div className="absolute -top-8 -left-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0" style={{ transform: 'scaleX(-1)' }}>
        <FloralDecoration imageType="arranjo1" />
      </div>

      {/* Bottom Floral Decoration - Bottom Left */}
      <div className="absolute -bottom-8 -left-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-70 z-0">
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Bottom Floral Decoration - Bottom Right (inverted) */}
      <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-70 z-0" style={{ transform: 'scaleX(-1)' }}>
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-full px-3 sm:px-4 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6">
        {/* Blessing Text */}
        <motion.div
          className="text-center mb-3 sm:mb-4 mt-2 sm:mt-4"
          variants={itemVariants}
        >
          <p className="text-wedding-gray text-xs sm:text-sm font-serif font-light tracking-wide px-2">
            Com a bênção de Deus e de seus pais
          </p>
        </motion.div>

        {/* Names - Elegant Romantic Logo */}
        <motion.div
          className="text-center mb-3 sm:mb-4 relative w-full flex flex-col items-center justify-center px-2 sm:px-4"
          variants={itemVariants}
        >
          <div className="relative flex items-center justify-center w-full py-4 sm:py-6 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
            {/* Large translucent ampersand in background with heart */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative">
                <span className="font-cursive text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] text-soft-gray font-light leading-none opacity-100" style={{ color: '#E8E8E8' }}>
                  &
                </span>
                {/* Red heart at the position indicated by the arrow */}
                <motion.div
                  className="absolute top-[13%] -right-8 md:-right-12"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                >
                  <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-wedding-rose" />
                </motion.div>
              </div>
            </div>

            {/* Names in elegant calligraphy */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-1 sm:gap-2">
              {/* First name */}
              <h1 className="ballet-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wedding-gray leading-[1.1] tracking-tight -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-12" style={{ color: '#4A4A4A', letterSpacing: '-0.02em' }}>
                Andreza
              </h1>

              {/* Second name */}
              <h1 className="ballet-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wedding-gray leading-[1.1] tracking-tight ml-4 sm:ml-6 md:ml-8 lg:ml-12" style={{ color: '#4A4A4A', letterSpacing: '-0.02em' }}>
                Eduardo
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Invitation Text */}
        <motion.div
          className="text-center mb-4 sm:mb-6 px-2"
          variants={itemVariants}
        >
          <p className="text-wedding-gray text-xs sm:text-sm font-serif leading-relaxed font-light">
            Convidam para cerimônia de seu<br />
            <span className="font-medium tracking-wider">CASAMENTO</span> à realizar-se no dia:
          </p>
        </motion.div>

        {/* Date Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 px-2 w-full"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center max-w-[400px] mx-auto">
            {/* Day of Week - Above with decorative dots */}
            <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              {/* Left decorative dot */}
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-wedding-rose"></div>
              <p className="text-wedding-gray text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] font-normal" style={{ transform: 'perspective(100px) rotateX(-5deg)' }}>
                SÁBADO
              </p>
              {/* Right decorative dot */}
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-wedding-rose"></div>
            </div>

            {/* Main Date Layout - Horizontal */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full px-2">
              {/* Month - Left */}
              <div className="flex flex-col items-end flex-1 max-w-[80px] sm:max-w-[100px]">
                <p className="text-wedding-gray text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] sm:tracking-[0.25em] font-normal mb-1 sm:mb-2">
                  JANEIRO
                </p>
                {/* Decorative line extending right */}
                <div className="w-8 sm:w-10 md:w-12 h-px bg-wedding-gray opacity-20"></div>
              </div>

              {/* Central Day Number */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-wedding-gray font-normal leading-none tracking-tight">
                  03
                </h2>
              </motion.div>

              {/* Year - Right */}
              <div className="flex flex-col items-start flex-1 max-w-[80px] sm:max-w-[100px]">
                <p className="text-wedding-gray text-[10px] sm:text-xs font-serif font-light mb-1 sm:mb-2">
                  2026
                </p>
                {/* Decorative line extending left */}
                <div className="w-8 sm:w-10 md:w-12 h-px bg-wedding-gray opacity-20"></div>
              </div>
            </div>

            {/* Time - Below */}
            <div className="mt-1 sm:mt-2">
              <p className="text-wedding-gray text-xs sm:text-sm font-serif font-light tracking-wide">
                às 17 horas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Icons Section */}
        <motion.div
          className="text-center mb-4 sm:mb-6 w-full"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center gap-2 sm:gap-3 flex-nowrap px-2">
            <InteractiveIcon
              iconType="location"
              label="Como chegar"
              onClick={() => setIsMapOpen(true)}
            />
            <InteractiveIcon
              iconType="check"
              label="Confirme sua presença"
              onClick={() => console.log('Confirmar presença')}
            />
            <InteractiveIcon
              iconType="gift"
              label="Lista de presentes"
              onClick={() => console.log('Lista de presentes')}
            />
          </div>
        </motion.div>
      </div>

      {/* Map Modal */}
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </motion.div>
  )
}

export default WeddingInvitation

