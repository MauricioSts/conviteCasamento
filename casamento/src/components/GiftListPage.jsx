import { motion } from 'framer-motion'
import { useEffect } from 'react'
import FloralDecoration from './FloralDecoration'
import presenteImage from '../presente.png'
import noivosImage from '../noivos.png'

const GiftListPage = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const pixKey = '01006968482'
  const pixName = 'Andreza Pereira'

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    // Você pode adicionar uma notificação aqui se quiser
  }

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
      {/* Top Floral Decoration - Top Left (inverted) */}
      <div className="absolute -top-8 -left-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0" style={{ transform: 'scaleX(-1)' }}>
        <FloralDecoration imageType="arranjo1" />
      </div>

      {/* Top Floral Decoration - Top Right */}
      <div className="absolute -top-8 -right-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0">
        <FloralDecoration imageType="arranjo1" />
      </div>

      {/* Bottom Floral Decoration - Bottom Left */}
      <div className="absolute -bottom-8 -left-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0">
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Bottom Floral Decoration - Bottom Right (inverted) */}
      <div className="absolute -bottom-8 -right-8 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 opacity-70 z-0" style={{ transform: 'scaleX(-1)' }}>
        <FloralDecoration imageType="arranjo2" />
      </div>

      {/* Content Container */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center min-h-full"
        style={{
          paddingLeft: 'clamp(0.75rem, 3vw, 2rem)',
          paddingRight: 'clamp(0.75rem, 3vw, 2rem)',
          paddingTop: 'clamp(5rem, 15vh, 15rem)',
          paddingBottom: 'clamp(1rem, 4vh, 2rem)'
        }}
      >
        {/* Back Button */}
        <motion.button
          className="absolute rounded-full bg-wedding-pink hover:bg-wedding-rose flex items-center justify-center shadow-md z-50 transition-colors touch-manipulation"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            top: 'clamp(0.75rem, 2vw, 1rem)',
            left: 'clamp(0.75rem, 2vw, 1rem)',
            width: 'clamp(36px, 9vw, 40px)',
            height: 'clamp(36px, 9vw, 40px)'
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
            style={{
              width: 'clamp(20px, 5vw, 24px)',
              height: 'clamp(20px, 5vw, 24px)'
            }}
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Names Image */}
        <motion.div
          className="text-center"
          style={{ marginBottom: 'clamp(1rem, 4vh, 2rem)' }}
          variants={itemVariants}
        >
          <img
            src={noivosImage}
            alt="Andreza e Eduardo"
            className="w-full h-auto object-contain mx-auto"
            style={{ 
              maxWidth: 'clamp(120px, 30vw, 200px)',
              width: 'auto'
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-center ballet-font text-wedding-gray px-2"
          style={{ 
            color: '#4A4A4A', 
            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
            marginBottom: 'clamp(1rem, 4vh, 2rem)'
          }}
          variants={itemVariants}
        >
          Presentes para os noivos
        </motion.h2>

        {/* Message */}
        <motion.div
          className="space-y-2 text-center px-3"
          style={{ marginBottom: 'clamp(1.5rem, 5vh, 2.5rem)' }}
          variants={itemVariants}
        >
          <p className="text-wedding-gray" style={{ 
            color: '#4A4A4A', 
            fontSize: 'clamp(0.875rem, 3.5vw, 1.125rem)',
            fontFamily: "'Inter', sans-serif"
          }}>
            A sua presença é o nosso maior presente!
          </p>
          <p className="text-wedding-gray leading-relaxed mx-auto" style={{ 
            color: '#4A4A4A',
            fontSize: 'clamp(0.75rem, 3vw, 1rem)',
            maxWidth: 'clamp(280px, 75vw, 380px)',
            fontFamily: "'Inter', sans-serif"
          }}>
            Mas, caso deseje nos presentear para a lua de mel, deixamos aqui uma forma prática de demonstrar seu carinho!
          </p>
        </motion.div>

        {/* Gift Images - 2 rows of 3 */}
        <motion.div
          className="flex flex-col items-center justify-center relative"
          style={{ 
            marginBottom: 'clamp(1.5rem, 5vh, 2.5rem)',
            gap: 'clamp(0.75rem, 2vh, 1rem)'
          }}
          variants={itemVariants}
        >
          {/* Rose blur background */}
          <div 
            className="absolute inset-0 rounded-full opacity-30 blur-3xl z-0"
            style={{
              background: 'radial-gradient(circle, rgba(251, 113, 133, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 70%)',
              filter: 'blur(60px)',
              width: '120%',
              height: '120%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* First row */}
          <div className="flex items-center justify-center px-2 relative z-10" style={{ gap: 'clamp(2rem, 8vw, 5rem)' }}>
            {[100, 150, 200].map((value, index) => {
              const nubankLinks = {
                100: 'https://nubank.com.br/cobrar/15h2oi/6910f834-4617-49e6-aca3-108b56a8579a',
                150: 'https://nubank.com.br/cobrar/15h2oi/6910f896-7399-48d3-8885-6efdf3fa04de',
                200: 'https://nubank.com.br/cobrar/15h2oi/6910f8a6-c98a-4e8c-860b-7893deeeb450'
              }
              const nubankLink = nubankLinks[value] || null
              
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                  style={{ gap: 'clamp(0.375rem, 1.5vw, 0.5rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0
                  }}
                  transition={{ 
                    delay: 0.2 + (index * 0.1),
                    duration: 0.5
                  }}
                >
                  {nubankLink ? (
                    <a 
                      href={nubankLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <motion.img
                        src={presenteImage}
                        alt="Presente"
                        className="object-contain"
                        style={{ 
                          width: 'clamp(64px, 16vw, 112px)',
                          height: 'clamp(64px, 16vw, 112px)'
                        }}
                        animate={{
                          rotate: [0, 8, -8, 0]
                        }}
                        transition={{
                          rotate: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                          }
                        }}
                      />
                    </a>
                  ) : (
                    <motion.img
                      src={presenteImage}
                      alt="Presente"
                      className="object-contain"
                      style={{ 
                        width: 'clamp(64px, 16vw, 112px)',
                        height: 'clamp(64px, 16vw, 112px)'
                      }}
                      animate={{
                        rotate: [0, 8, -8, 0]
                      }}
                      transition={{
                        rotate: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut'
                        }
                      }}
                    />
                  )}
                  {nubankLink ? (
                    <a 
                      href={nubankLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <p className="font-bold text-wedding-gray hover:underline" style={{ 
                        color: '#4A4A4A',
                        fontSize: 'clamp(0.75rem, 3.5vw, 1.125rem)',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        R$ {value.toFixed(2).replace('.', ',')}
                      </p>
                    </a>
                  ) : (
                    <p className="font-bold text-wedding-gray" style={{ 
                      color: '#4A4A4A',
                      fontSize: 'clamp(0.75rem, 3.5vw, 1.125rem)',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      R$ {value.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>
          {/* Second row */}
          <div className="flex items-center justify-center px-2 relative z-10" style={{ gap: 'clamp(2rem, 8vw, 5rem)' }}>
            {[300, 400, 500].map((value, index) => {
              const nubankLinks = {
                300: 'https://nubank.com.br/cobrar/15h2oi/6910f8d1-1064-488d-b276-2fee2c5fdd2b',
                400: 'https://nubank.com.br/cobrar/15h2oi/6910f8df-3b91-4141-ac6b-545130d48dd2',
                500: 'https://nubank.com.br/cobrar/15h2oi/6910f8ec-8292-46ac-bcf2-4c432a6519dc'
              }
              const nubankLink = nubankLinks[value] || null
              
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                  style={{ gap: 'clamp(0.375rem, 1.5vw, 0.5rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0
                  }}
                  transition={{ 
                    delay: 0.5 + (index * 0.1),
                    duration: 0.5
                  }}
                >
                  {nubankLink ? (
                    <a 
                      href={nubankLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <motion.img
                        src={presenteImage}
                        alt="Presente"
                        className="object-contain"
                        style={{ 
                          width: 'clamp(64px, 16vw, 112px)',
                          height: 'clamp(64px, 16vw, 112px)'
                        }}
                        animate={{
                          rotate: [0, 8, -8, 0]
                        }}
                        transition={{
                          rotate: {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                          }
                        }}
                      />
                    </a>
                  ) : (
                    <motion.img
                      src={presenteImage}
                      alt="Presente"
                      className="object-contain"
                      style={{ 
                        width: 'clamp(64px, 16vw, 112px)',
                        height: 'clamp(64px, 16vw, 112px)'
                      }}
                      animate={{
                        rotate: [0, 8, -8, 0]
                      }}
                      transition={{
                        rotate: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          ease: 'easeInOut'
                        }
                      }}
                    />
                  )}
                  {nubankLink ? (
                    <a 
                      href={nubankLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <p className="font-bold text-wedding-gray hover:underline" style={{ 
                        color: '#4A4A4A',
                        fontSize: 'clamp(0.75rem, 3.5vw, 1.125rem)',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        R$ {value.toFixed(2).replace('.', ',')}
                      </p>
                    </a>
                  ) : (
                    <p className="font-bold text-wedding-gray" style={{ 
                      color: '#4A4A4A',
                      fontSize: 'clamp(0.75rem, 3.5vw, 1.125rem)',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      R$ {value.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* PIX Key Section */}
        <motion.div
          className="flex flex-col items-center text-center w-full px-4"
          style={{ maxWidth: 'clamp(280px, 85vw, 448px)' }}
          variants={itemVariants}
        >
          <p className="font-medium text-wedding-gray mb-2 lowercase" style={{ 
            color: '#4A4A4A',
            fontSize: 'clamp(0.75rem, 3vw, 1rem)',
            fontFamily: "'Inter', sans-serif"
          }}>
            chave pix:
          </p>
          <motion.div
            className="flex items-center justify-center gap-2 mb-2 cursor-pointer"
            onClick={handleCopyPix}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="font-bold text-wedding-gray break-all" style={{ 
              color: '#4A4A4A',
              fontSize: 'clamp(1rem, 4.5vw, 1.25rem)',
              fontFamily: "'Inter', sans-serif"
            }}>
              {pixKey}
            </p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="text-wedding-gray flex-shrink-0"
              style={{ 
                color: '#4A4A4A',
                width: 'clamp(18px, 4.5vw, 20px)',
                height: 'clamp(18px, 4.5vw, 20px)'
              }}
            >
              <path
                d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
          <p className="text-wedding-gray" style={{ 
            color: '#4A4A4A',
            fontSize: 'clamp(0.75rem, 3vw, 1rem)',
            fontFamily: "'Inter', sans-serif"
          }}>
            {pixName}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GiftListPage

