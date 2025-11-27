import React from 'react';
import { MOCK_STREAMS } from '../constants';
import { Button } from './Button';
import { Play, Volume2 } from 'lucide-react';

export const HeroSection = () => {
  const featuredStream = MOCK_STREAMS[0];

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden mb-8 group">
      {/* Background Image / Pseudo-Video */}
      <img 
        src={featuredStream.thumbnailUrl} 
        alt="Featured Stream" 
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-jaco-dark via-jaco-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-jaco-dark via-transparent to-transparent opacity-80" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end lg:justify-center items-start z-10">
        
        {/* Stream Tag */}
        <span className="bg-jaco-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider shadow-lg shadow-jaco-primary/20">
          Featured Live
        </span>

        {/* Stream Info */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight max-w-2xl drop-shadow-lg">
          {featuredStream.title}
        </h1>
        
        <div className="flex items-center gap-3 mb-6">
            <img 
                src={featuredStream.user.avatarUrl} 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                alt="Avatar"
            />
            <div>
                <p className="text-white font-semibold text-lg">{featuredStream.user.username}</p>
                <p className="text-jaco-accent font-medium text-sm">{featuredStream.category}</p>
            </div>
        </div>

        <p className="text-gray-300 max-w-lg text-sm sm:text-base mb-6 line-clamp-2 hidden sm:block">
            Join the community for an epic stream. Giveaways, high-level gameplay, and chill vibes all night long. Don't miss out!
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <Button size="lg" className="gap-2">
             <Play size={20} fill="currentColor" />
             Watch Now
          </Button>
          <Button variant="secondary" size="lg" className="hidden sm:inline-flex">
             Profile
          </Button>
        </div>
      </div>

       {/* Floating Volume Control (Mock) */}
       <div className="absolute bottom-6 right-6 hidden md:flex gap-2">
            <button className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors">
                <Volume2 size={20} />
            </button>
       </div>
    </div>
  );
};