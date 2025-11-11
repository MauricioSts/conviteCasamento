import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WeddingInvitation from './components/WeddingInvitation'
import EnvelopeAnimation from './components/EnvelopeAnimation'
import GiftListPage from './components/GiftListPage'

function App() {
  const [currentPage, setCurrentPage] = useState('envelope') // envelope, invitation, giftList

  const handleEnvelopeOpen = () => {
    setCurrentPage('invitation')
  }

  const handleOpenGiftList = () => {
    setCurrentPage('giftList')
  }

  const handleCloseGiftList = () => {
    setCurrentPage('invitation')
  }

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden" style={{ margin: 0, padding: 0 }}>
      <AnimatePresence mode="wait">
        {currentPage === 'envelope' && (
          <EnvelopeAnimation key="envelope" onOpen={handleEnvelopeOpen} />
        )}
        {currentPage === 'invitation' && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center"
          >
            <WeddingInvitation onOpenGiftList={handleOpenGiftList} />
          </motion.div>
        )}
        {currentPage === 'giftList' && (
          <motion.div
            key="giftList"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center"
          >
            <GiftListPage onClose={handleCloseGiftList} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

