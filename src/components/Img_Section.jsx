import React from 'react'

const Component = () => {
  return (
    <div className="relative h-60 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/Group-15.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
      <h1 className="relative z-10 text-white text-center pt-16 font-segoe text-4xl xs:text-2xl sm:text-4xl md:text-3xl">
        Your Beauty, Your Way—Download Now!
      </h1>
      <div className='flex justify-center mr-40 pt-4 '>
        <li className='grid grid-cols-2 gap-60 xs:gap-[180px]'>
        <button className='mr-2'>
          <img className='absolute ' src="/Google_Play_Store_badge_EN.svg" alt="" />
        </button>
        <button className=''>
          <img className='absolute ' src="/Frame 1000001078.png" alt="" />
        </button>
        </li>
      </div>
    </div>

  )
}

export default Component