import { motion } from 'framer-motion'
import { useState } from 'react'
import FloralDecoration from './FloralDecoration'
import InteractiveIcon from './InteractiveIcon'
import HeartIcon from './HeartIcon'
import MapModal from './MapModal'

const WeddingInvitation = ({ onOpenGiftList }) => {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isReceptionMapOpen, setIsReceptionMapOpen] = useState(false)
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
      <div className="absolute -bottom-8 -left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-70 z-0">
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Bottom Floral Decoration - Bottom Right (inverted) */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-70 z-0" style={{ transform: 'scaleX(-1)' }}>
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full px-4 sm:px-5 md:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-48 lg:pt-60 xl:pt-72 pb-2 sm:pb-3 md:pb-4 lg:pb-5">
        {/* Blessing Text */}
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 -mt-2 sm:-mt-3 md:-mt-4"
          variants={itemVariants}
        >
          <p className="text-wedding-gray text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide px-3 sm:px-4">
            Com a bênção de Deus, seus pais e filhos
          </p>
        </motion.div>

        {/* Names - Elegant Romantic Logo */}
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 relative w-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6"
          variants={itemVariants}
        >
          <div className="relative flex items-center justify-center w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px] xl:min-h-[460px]">
            {/* Large translucent ampersand in background with heart */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="relative transform translate-x-12 sm:translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28">
                <span className="font-cursive text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] text-soft-gray font-light leading-none opacity-100" style={{ color: '#E8E8E8' }}>
                  &
                </span>
                {/* Red heart at the position indicated by the arrow */}
                <motion.div
                  className="absolute top-[13%] -right-8 sm:-right-10 md:-right-14 lg:-right-16 xl:-right-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                >
                  <HeartIcon className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-14 xl:h-14 text-wedding-rose" />
                </motion.div>
              </div>
            </div>

            {/* Names in elegant calligraphy */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
              {/* First name */}
              <h1 className="ballet-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-wedding-gray leading-[1.1] tracking-tight -ml-6 sm:-ml-8 md:-ml-10 lg:-ml-12 xl:-ml-14" style={{ color: '#4A4A4A', letterSpacing: '-0.02em' }}>
                Andreza
              </h1>

              {/* Second name */}
              <h1 className="ballet-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-wedding-gray leading-[1.1] tracking-tight ml-6 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-14" style={{ color: '#4A4A4A', letterSpacing: '-0.02em' }}>
                Eduardo
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Invitation Text */}
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 px-3 sm:px-4"
          variants={itemVariants}
        >
          <p className="text-wedding-gray text-base sm:text-lg md:text-xl lg:text-2xl font-serif leading-relaxed font-light">
            Convidam para cerimônia de seu<br />
            <span className="font-medium tracking-wider">CASAMENTO</span> à realizar-se no dia:
          </p>
        </motion.div>

        {/* Date Section */}
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 px-3 sm:px-4 w-full"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center max-w-[400px] mx-auto">
            {/* Day of Week - Above with decorative dots */}
            <div className="relative flex items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5 mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-4">
              {/* Left decorative dot */}
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-wedding-rose"></div>
              <p className="text-wedding-gray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-normal" style={{ transform: 'perspective(100px) rotateX(-5deg)' }}>
                SÁBADO
              </p>
              {/* Right decorative dot */}
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-wedding-rose"></div>
            </div>

            {/* Main Date Layout - Horizontal */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full px-2">
              {/* Month - Left */}
              <div className="flex flex-col items-end flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]">
                <p className="text-wedding-gray text-sm sm:text-base md:text-lg lg:text-xl font-serif uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] font-normal mb-2 sm:mb-2.5 md:mb-3">
                  JANEIRO
                </p>
                {/* Decorative line extending right */}
                <div className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-px bg-wedding-gray opacity-20"></div>
              </div>

              {/* Central Day Number */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-serif text-wedding-gray font-normal leading-none tracking-tight">
                  03
                </h2>
              </motion.div>

              {/* Year - Right */}
              <div className="flex flex-col items-start flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] xl:max-w-[180px]">
                <p className="text-wedding-gray text-sm sm:text-base md:text-lg lg:text-xl font-serif font-light mb-2 sm:mb-2.5 md:mb-3">
                  2026
                </p>
                {/* Decorative line extending left */}
                <div className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-px bg-wedding-gray opacity-20"></div>
              </div>
            </div>

            {/* Time - Below */}
            <div className="mt-4 sm:mt-5 md:mt-6">
              <p className="text-wedding-gray text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide">
                às 17 horas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Icons Section */}
        <motion.div
          className="text-center mb-6 sm:mb-7 md:mb-8 w-full"
          variants={itemVariants}
        >
          <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 flex-wrap px-2 sm:px-3 md:px-4">
            <InteractiveIcon
              iconType="location"
              label="Como chegar"
              onClick={() => setIsMapOpen(true)}
            />
            <InteractiveIcon
              iconType="location"
              label="Local da recepção"
              onClick={() => setIsReceptionMapOpen(true)}
            />
            <InteractiveIcon
              iconType="gift"
              label="Lista de presentes"
              onClick={onOpenGiftList}
            />
          </div>
        </motion.div>
      </div>

      {/* Map Modal - Cerimônia */}
      <MapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)}
        location="Paróquia Nossa Senhora da Conceição, Lajes, RN, Brasil"
        title="Como chegar"
      />
      
      {/* Map Modal - Recepção */}
      <MapModal 
        isOpen={isReceptionMapOpen} 
        onClose={() => setIsReceptionMapOpen(false)}
        location="R. Abilio Monteiro Soares - Lajes, RN, Brasil"
        title="Residência de Junior de Delza"
      />
    </motion.div>
  )
}

export default WeddingInvitation
