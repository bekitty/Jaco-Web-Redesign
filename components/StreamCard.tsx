
import React from 'react';
import { Stream } from '../types';
import { Signal, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StreamCardProps {
  stream: Stream;
  large?: boolean;
}

export const StreamCard: React.FC<StreamCardProps> = ({ stream, large = false }) => {
  return (
    <Link to={`/stream/${stream.id}`} className="group flex flex-col gap-3 cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-jaco-card border border-white/5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-jaco-primary/20 group-hover:-translate-y-1 group-hover:ring-2 group-hover:ring-jaco-primary/50">
        <img 
          src={stream.thumbnailUrl} 
          alt={stream.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Jaco Style Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-jaco-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay pointer-events-none" />

        {/* Live Badge */}
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-md z-10">
          <Signal size={12} className="animate-pulse" />
          LIVE
        </div>

        {/* Viewer Count Overlay */}
        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-jaco-accent"></div>
          {new Intl.NumberFormat('en-US', { notation: "compact" }).format(stream.viewerCount)} viewers
        </div>

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <PlayCircle size={48} className="text-white drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
        </div>
      </div>

      {/* Meta Data */}
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className={`rounded-full p-[2px] ${stream.user.isLive ? 'bg-gradient-to-br from-jaco-primary to-pink-500' : 'bg-transparent'}`}>
             <img 
              src={stream.user.avatarUrl} 
              alt={stream.user.username} 
              className="rounded-full w-10 h-10 border-2 border-jaco-dark object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col min-w-0">
          <h3 className={`font-semibold text-white truncate group-hover:text-jaco-primary transition-colors ${large ? 'text-lg' : 'text-sm'}`}>
            {stream.title}
          </h3>
          <span className="text-jaco-muted text-xs hover:text-white transition-colors">
            {stream.user.username}
          </span>
          <span className="text-jaco-primary text-xs mt-0.5 hover:underline">
            {stream.category}
          </span>
          
          <div className="flex flex-wrap gap-1 mt-1.5">
            {stream.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] bg-jaco-card text-jaco-muted px-1.5 py-0.5 rounded-md hover:bg-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
