import React, { useState } from 'react';
import { MOCK_STREAMS, MOCK_CATEGORIES } from '../constants';
import { StreamCard } from '../components/StreamCard';
import { CategoryCard } from '../components/CategoryCard';
import { Button } from '../components/Button';
import { SlidersHorizontal, ArrowDownUp, Search } from 'lucide-react';

type Tab = 'categories' | 'live';

export const Browse = () => {
  const [activeTab, setActiveTab] = useState<Tab>('categories');
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', 'IRL', 'Gaming', 'Music', 'Creative', 'Esports', 'Development'];

  return (
    <div className="flex flex-col gap-6 min-h-screen">
      
      {/* Header & Controls */}
      <div className="sticky top-16 bg-jaco-dark/95 backdrop-blur-sm z-30 pt-4 pb-2 border-b border-white/5">
        <h1 className="text-3xl font-bold text-white mb-6">Browse</h1>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-jaco-card p-1 rounded-lg self-start">
            <button 
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'categories' ? 'bg-jaco-dark text-white shadow-sm' : 'text-jaco-muted hover:text-white'}`}
            >
              Categories
            </button>
            <button 
               onClick={() => setActiveTab('live')}
               className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'live' ? 'bg-jaco-dark text-white shadow-sm' : 'text-jaco-muted hover:text-white'}`}
            >
              Live Channels
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2 text-jaco-muted" size={14} />
                <input 
                  type="text" 
                  placeholder="Filter tags..."
                  className="bg-jaco-card border border-white/5 rounded-full pl-8 pr-3 py-1.5 text-xs text-white focus:border-jaco-primary outline-none"
                />
             </div>
             <div className="h-6 w-px bg-white/10 mx-1 hidden md:block"></div>
             
             {tags.map(tag => (
               <button
                 key={tag}
                 onClick={() => setActiveTag(tag)}
                 className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    activeTag === tag 
                    ? 'bg-jaco-primary text-white border-jaco-primary' 
                    : 'bg-jaco-card text-jaco-muted border-transparent hover:border-white/20 hover:text-white'
                 }`}
               >
                 {tag}
               </button>
             ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
              <Button variant="secondary" size="sm" className="w-full flex justify-between">
                  <span>Sort & Filter</span>
                  <SlidersHorizontal size={14} />
              </Button>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="animate-fade-in pb-10">
        {activeTab === 'categories' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
             {/* Duplicating mock data to simulate a full page */}
             {[...MOCK_CATEGORIES, ...MOCK_CATEGORIES, ...MOCK_CATEGORIES].map((cat, i) => (
               <CategoryCard key={`${cat.id}-${i}`} category={cat} />
             ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {[...MOCK_STREAMS, ...MOCK_STREAMS].map((stream, i) => (
                <StreamCard key={`${stream.id}-${i}`} stream={stream} />
             ))}
          </div>
        )}
      </div>
      
      {/* Infinite Scroll Loader Mock */}
      <div className="flex justify-center py-8">
          <div className="flex items-center gap-2 text-jaco-muted text-sm">
             <div className="w-2 h-2 rounded-full bg-jaco-primary animate-bounce"></div>
             <div className="w-2 h-2 rounded-full bg-jaco-primary animate-bounce delay-100"></div>
             <div className="w-2 h-2 rounded-full bg-jaco-primary animate-bounce delay-200"></div>
          </div>
      </div>
    </div>
  );
};