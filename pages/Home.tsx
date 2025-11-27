
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StreamCard } from '../components/StreamCard';
import { CategoryCard } from '../components/CategoryCard';
import { CampaignBanner } from '../components/CampaignBanner';
import { MOCK_STREAMS, MOCK_CATEGORIES } from '../constants';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  // Use a subset of mock streams for clips, but modify them to look like clips
  const clipThumbnails = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=225&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&h=225&q=80',
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=400&h=225&q=80',
    'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&w=400&h=225&q=80'
  ];

  return (
    <div className="flex flex-col gap-10 pb-10">
      <HeroSection />

      {/* Campaign / Ad Banner Position */}
      <CampaignBanner />

      {/* Recommended Live Channels */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-jaco-primary">Live</span> Channels We Think You'll Like
          </h2>
          <Link to="/browse" className="text-sm text-jaco-primary font-semibold flex items-center hover:underline">
             View All <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {MOCK_STREAMS.map((stream) => (
            <StreamCard key={stream.id} stream={stream} />
          ))}
        </div>
      </section>

      {/* Top Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
           <h2 className="text-xl font-bold text-white">
            <span className="text-jaco-accent">Top</span> Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {MOCK_CATEGORIES.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
            ))}
        </div>
      </section>

      {/* Popular Clips Section */}
      <section className="bg-jaco-card/30 -mx-6 px-6 py-8 border-y border-white/5">
        <div className="flex items-center justify-between mb-6">
           <h2 className="text-xl font-bold text-white">Trending Clips</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {MOCK_STREAMS.slice(0, 4).map((stream, idx) => (
                 <div key={stream.id} className="group cursor-pointer relative">
                    <div className="aspect-video rounded-lg overflow-hidden relative border border-white/5 shadow-lg">
                         <img 
                            src={clipThumbnails[idx] || stream.thumbnailUrl} 
                            alt={stream.title} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                         />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="text-white fill-white drop-shadow-lg" size={48} />
                         </div>
                         <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-mono border border-white/10">0:30</span>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm font-semibold text-white truncate group-hover:text-jaco-primary transition-colors">
                            {idx === 0 ? 'INSANE 1v5 Clutch!' : idx === 1 ? 'Funny fail moment lol' : stream.title}
                        </p>
                        <p className="text-xs text-jaco-muted flex items-center gap-1 mt-1">
                           <span className="text-white/80">{stream.user.username}</span> • 12K views • 2h ago
                        </p>
                    </div>
                 </div>
             ))}
        </div>
      </section>
    </div>
  );
};
