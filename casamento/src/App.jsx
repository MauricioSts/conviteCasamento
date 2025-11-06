import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WeddingInvitation from './components/WeddingInvitation'
import EnvelopeAnimation from './components/EnvelopeAnimation'

function App() {
  const [showInvitation, setShowInvitation] = useState(false)

  const handleEnvelopeOpen = () => {
    setShowInvitation(true)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-0 md:p-4 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <EnvelopeAnimation key="envelope" onOpen={handleEnvelopeOpen} />
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            <WeddingInvitation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

