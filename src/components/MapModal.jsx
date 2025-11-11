import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const MapModal = ({ isOpen, onClose, location = 'Paróquia Nossa Senhora da Conceição, Lajes, RN, Brasil', title = 'Como chegar' }) => {
  // Prevenir scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // URL do Google Maps com a localização
  // Usando formato de embed que funciona sem API key
  const encodedLocation = encodeURIComponent(location)
  // Formato de embed do Google Maps (funciona sem API key para uso básico)
  const mapUrl = `https://www.google.com/maps?q=${encodedLocation}&output=embed&hl=pt-BR`
  
  // Link direto para abrir no Google Maps app
  const directMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-4xl h-[80vh] max-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-4 flex items-center justify-between border-b border-rose-200">
                <div>
                  <h2 className="text-xl font-serif text-wedding-gray font-semibold">
                    {title}
                  </h2>
                  <p className="text-sm text-wedding-gray/70 font-serif mt-1">
                    {location}
                  </p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-wedding-gray"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Map Container */}
              <div className="relative w-full h-[calc(100%-100px)] bg-gray-100">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa - ${location}`}
                />
              </div>

              {/* Footer with action buttons */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-t border-rose-100">
                <motion.a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg font-serif text-sm hover:bg-rose-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  Abrir no Google Maps
                </motion.a>
                <motion.button
                  onClick={onClose}
                  className="px-4 py-2 text-wedding-gray font-serif text-sm hover:text-wedding-rose transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fechar
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MapModal

