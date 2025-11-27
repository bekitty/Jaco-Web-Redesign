
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_STREAMS } from '../constants';
import { VideoPlayer } from '../components/VideoPlayer';
import { ChatBox } from '../components/ChatBox';
import { Button } from '../components/Button';
import { Heart, Share2, MoreHorizontal, UserPlus, Star } from 'lucide-react';
import { StreamCard } from '../components/StreamCard';

export const StreamRoom = () => {
  const { id } = useParams();
  
  // Default to first stream if ID not found for demo purposes
  const stream = MOCK_STREAMS.find(s => s.id === id) || MOCK_STREAMS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      
      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-jaco-card">
        <div className="p-4 lg:p-6 max-w-[1600px] mx-auto">
          
          {/* Video Player */}
          <div className="mb-6">
            <VideoPlayer stream={stream} />
          </div>

          {/* Stream Info & Meta */}
          <div className="flex flex-col md:flex-row gap-6 justify-between mb-8 border-b border-white/5 pb-8">
            <div className="flex-1 min-w-0">
               <h1 className="text-xl md:text-2xl font-bold text-white mb-2 truncate">
                   {stream.title}
               </h1>
               <div className="flex flex-wrap items-center gap-3 text-sm">
                   <span className="text-jaco-primary font-bold hover:underline cursor-pointer">
                       {stream.category}
                   </span>
                   {stream.tags.map(tag => (
                       <span key={tag} className="px-2 py-0.5 bg-jaco-card text-jaco-muted rounded-full text-xs border border-white/5">
                           {tag}
                       </span>
                   ))}
               </div>
            </div>

            <div className="flex items-start gap-3 flex-shrink-0">
                <Button variant="secondary" className="gap-2">
                    <Share2 size={18} />
                    <span className="hidden sm:inline">Share</span>
                </Button>
                <Button variant="ghost" className="px-2">
                    <MoreHorizontal size={20} />
                </Button>
            </div>
          </div>

          {/* Channel Profile Bar */}
          <div className="bg-jaco-card/50 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                  <div className="relative">
                      <div className="w-16 h-16 rounded-full p-[3px] bg-gradient-to-br from-jaco-primary to-pink-500">
                          <img 
                              src={stream.user.avatarUrl} 
                              alt={stream.user.username} 
                              className="w-full h-full rounded-full border-2 border-jaco-dark object-cover"
                          />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-[10px] font-bold px-1.5 rounded text-white uppercase tracking-wide border border-jaco-dark">
                          Live
                      </div>
                  </div>
                  <div>
                      <h2 className="text-lg font-bold text-white hover:text-jaco-primary cursor-pointer transition-colors">
                          {stream.user.username}
                      </h2>
                      <p className="text-sm text-jaco-muted">245K Followers</p>
                  </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button variant="primary" className="gap-2 flex-1 sm:flex-none">
                      <Heart size={18} />
                      Follow
                  </Button>
                  <Button variant="secondary" className="gap-2 text-jaco-accent border-jaco-accent/20 hover:bg-jaco-accent/10 flex-1 sm:flex-none">
                      <Star size={18} />
                      Subscribe
                  </Button>
              </div>
          </div>

          {/* About / Description Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                  <div className="bg-jaco-card rounded-xl p-6 border border-white/5">
                      <h3 className="font-bold text-lg text-white mb-4">About {stream.user.username}</h3>
                      <p className="text-jaco-text leading-relaxed text-sm mb-4">
                          Hey everyone! Welcome to the official channel. I stream mostly competitive FPS games and do creative coding sessions on weekends. 
                          Join the community discord to stay updated!
                          <br /><br />
                          Schedule:<br/>
                          Mon-Fri: 6PM EST<br/>
                          Sat: 12PM EST (Community Games)
                      </p>
                      <div className="flex gap-4">
                          {/* Social links mock */}
                          <div className="h-10 w-24 bg-white/5 rounded-lg"></div>
                          <div className="h-10 w-24 bg-white/5 rounded-lg"></div>
                          <div className="h-10 w-24 bg-white/5 rounded-lg"></div>
                      </div>
                  </div>
              </div>
              
              {/* Suggested Streams */}
              <div className="lg:col-span-1">
                  <h3 className="font-bold text-sm text-jaco-muted uppercase tracking-wider mb-4">You might also like</h3>
                  <div className="flex flex-col gap-4">
                      {MOCK_STREAMS.slice(1, 4).map(s => (
                          <div key={s.id} className="flex gap-3 group cursor-pointer">
                               <div className="w-32 h-20 flex-shrink-0 relative rounded-lg overflow-hidden">
                                   <img src={s.thumbnailUrl} className="w-full h-full object-cover" alt="" />
                               </div>
                               <div className="flex-1 min-w-0">
                                   <p className="text-sm font-bold text-white truncate group-hover:text-jaco-primary transition-colors">{s.title}</p>
                                   <p className="text-xs text-jaco-muted mt-1">{s.user.username}</p>
                                   <p className="text-xs text-jaco-primary mt-0.5">{s.category}</p>
                               </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

        </div>
      </div>

      {/* Chat Sidebar (Fixed on Desktop, hidden/stacked on mobile logic could be added) */}
      <div className="hidden lg:block w-[340px] border-l border-white/5 bg-jaco-dark flex-shrink-0 z-20">
          <ChatBox />
      </div>
    </div>
  );
};
