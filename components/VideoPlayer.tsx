
import React from 'react';
import { Play, Volume2, Settings, Maximize, Signal } from 'lucide-react';
import { Stream } from '../types';

interface VideoPlayerProps {
  stream: Stream;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ stream }) => {
  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-2xl shadow-black">
      {/* Mock Video Content (Image as placeholder) */}
      <img 
        src={stream.thumbnailUrl} 
        alt="Stream Feed" 
        className="w-full h-full object-cover opacity-90"
      />
      
      {/* Live Indicator Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
         <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1.5 shadow-lg">
            <Signal size={12} className="animate-pulse" />
            LIVE
         </div>
         <div className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded">
            {new Intl.NumberFormat('en-US', { notation: "compact" }).format(stream.viewerCount)} viewers
         </div>
      </div>

      {/* Controls Overlay (Visible on Hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-jaco-primary transition-colors">
              <Play fill="currentColor" size={24} />
            </button>
            <div className="flex items-center gap-2 group/vol">
              <button className="text-white hover:text-jaco-primary transition-colors">
                 <Volume2 size={24} />
              </button>
              <div className="w-0 overflow-hidden group-hover/vol:w-24 transition-all duration-300">
                  <div className="h-1 bg-white/30 rounded-full w-20 ml-2 relative cursor-pointer">
                      <div className="absolute top-0 left-0 h-full w-[60%] bg-white rounded-full"></div>
                  </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className="text-white hover:text-jaco-primary transition-colors">
                <Settings size={20} />
             </button>
             <button className="text-white hover:text-jaco-primary transition-colors">
                <Maximize size={20} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
