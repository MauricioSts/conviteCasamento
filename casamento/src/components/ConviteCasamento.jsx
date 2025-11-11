import { useState } from 'react'
import arranjo1 from '../arranjo1.png'
import arranjo2 from '../arranjo2.png'
import HeartIcon from './HeartIcon'
import MapModal from './MapModal'

// SVG Icons
const LocationIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
  </svg>
)

const GiftIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.35C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V13H20V19ZM20 11H4V8H20V11Z" fill="currentColor"/>
  </svg>
)

export default function ConviteCasamento() {
  const [isMapOpen, setIsMapOpen] = useState(false)
  const [isReceptionMapOpen, setIsReceptionMapOpen] = useState(false)
  
  return (
    <div className="relative w-full max-w-sm mx-auto px-4 bg-white min-h-screen flex flex-col overflow-hidden" style={{ aspectRatio: '9/16' }}>
      {/* Top left floral decoration */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-80 z-0 drop-shadow-md">
        <img src={arranjo1} alt="Arranjo floral" className="w-full h-full object-contain" />
      </div>

      {/* Bottom right floral decoration - mirrored */}
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-80 z-0 drop-shadow-md" style={{ transform: 'scaleX(-1)' }}>
        <img src={arranjo2} alt="Arranjo floral" className="w-full h-full object-contain" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-4 sm:py-6 md:py-8 lg:py-10 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 xl:space-y-12 pt-28 sm:pt-36 md:pt-48 lg:pt-60 xl:pt-72 pb-2 sm:pb-3 md:pb-4 lg:pb-5">
        
        {/* Biblical quote - top */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-gray-500 text-center font-montserrat px-4 sm:px-6 md:px-8">
          "Para que todos vejam, saibam, considerem, e compreendam que a mão do Senhor fez isso." — Isaías 41:20
        </p>

        {/* Blessing */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 text-center -mt-2 sm:-mt-3 md:-mt-4 font-montserrat">
          Com a bênção de Deus e de seus pais
        </p>

        {/* Names section */}
        <div className="relative flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px] xl:min-h-[480px]">
          {/* Large translucent ampersand in background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="font-cursive text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[24rem] xl:text-[28rem] leading-none transform translate-x-12 sm:translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28" style={{ color: '#E8E8E8' }}>
              &
            </span>
          </div>

          {/* Names with ampersand in foreground */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
            {/* First name */}
            <h1 className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-gray-700 font-semibold text-center" style={{ color: '#4A4A4A' }}>
              Andreza
            </h1>

            {/* Small ampersand between names */}
            <span className="font-cursive text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-600 font-light opacity-70" style={{ color: '#4A4A4A' }}>
              &
            </span>

            {/* Second name */}
            <h1 className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-gray-700 font-semibold text-center" style={{ color: '#4A4A4A' }}>
              Eduardo
            </h1>
          </div>

          {/* Delicate heart on the large background ampersand */}
          <div className="absolute top-[38%] left-1/2 transform translate-x-12 sm:translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28 z-20">
            <HeartIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12" style={{ color: '#F5AEB4' }} />
          </div>
        </div>

        {/* Invitation text */}
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center uppercase tracking-wide font-montserrat px-4 sm:px-6 md:px-8">
          Convidam para cerimônia de seu<br />
          <span className="font-semibold">CASAMENTO</span> a realizar-se no dia:
        </p>

        {/* Date and time section */}
        <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10">
          {/* Decorative line with month */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 mt-2 sm:mt-3">
            <div className="w-10 sm:w-12 md:w-14 lg:w-18 h-px" style={{ backgroundColor: '#D6B6A1' }}></div>
            <span className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider font-montserrat" style={{ color: '#4A4A4A' }}>
              DEZEMBRO
            </span>
            <div className="w-10 sm:w-12 md:w-14 lg:w-18 h-px" style={{ backgroundColor: '#D6B6A1' }}></div>
          </div>

          {/* Day circle */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
            {/* Saturday label */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-widest font-montserrat" style={{ color: '#4A4A4A' }}>
              SÁBADO
            </p>

            {/* Date circle */}
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 rounded-full border-2 flex items-center justify-center bg-white shadow-sm" style={{ borderColor: '#D6B6A1' }}>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold font-montserrat" style={{ color: '#4A4A4A' }}>
                07
              </span>
            </div>

            {/* Year */}
            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-montserrat" style={{ color: '#4A4A4A' }}>
              2024
            </p>

            {/* Time */}
            <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat" style={{ color: '#4A4A4A' }}>
              17:30H
            </p>
          </div>
        </div>

        {/* Interactive icons section */}
        <div className="flex justify-center items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 flex-wrap px-2 sm:px-3 md:px-4 lg:px-6">
          {/* Location icon - Cerimônia */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 cursor-pointer active:opacity-70 transition-opacity touch-manipulation" onClick={() => setIsMapOpen(true)}>
            <div className="rounded-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex-shrink-0" style={{ backgroundColor: '#F8E8E8' }}>
              <LocationIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-rose-500" style={{ color: '#E6A6AD' }} />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium text-center font-montserrat w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] xl:w-[170px] leading-tight min-h-[2.5em] flex items-center justify-center" style={{ color: '#4A4A4A' }}>
              Como Chegar
            </p>
          </div>

          {/* Location icon - Recepção */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 cursor-pointer active:opacity-70 transition-opacity touch-manipulation" onClick={() => setIsReceptionMapOpen(true)}>
            <div className="rounded-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex-shrink-0" style={{ backgroundColor: '#F8E8E8' }}>
              <LocationIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-rose-500" style={{ color: '#E6A6AD' }} />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium text-center font-montserrat w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] xl:w-[170px] leading-tight min-h-[2.5em] flex items-center justify-center" style={{ color: '#4A4A4A' }}>
              Local da recepção
            </p>
          </div>

          {/* Gift icon */}
          <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 cursor-pointer active:opacity-70 transition-opacity touch-manipulation">
            <div className="rounded-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex-shrink-0" style={{ backgroundColor: '#F8E8E8' }}>
              <GiftIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-rose-500" style={{ color: '#E6A6AD' }} />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium text-center font-montserrat w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] xl:w-[170px] leading-tight min-h-[2.5em] flex items-center justify-center" style={{ color: '#4A4A4A' }}>
              Lista de presentes
            </p>
          </div>
        </div>
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
    </div>
  )
}
