import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen lg:h-44 xs:h-32 md:h-60 sm:h-52  xl:h-72 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-segoe">Your Beauty, Your Way—Download Now!</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
