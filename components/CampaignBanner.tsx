
import React from 'react';
import { Button } from './Button';
import { Trophy, Sparkles, ArrowRight } from 'lucide-react';

export const CampaignBanner = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden mb-10 group">
      {/* Background with abstract gradient or image */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-fuchsia-900 to-jaco-dark z-0">
          <div className="absolute inset-0 opacity-20" style={{ 
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
              backgroundSize: '100px' 
          }}></div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute -right-10 -top-20 w-64 h-64 bg-jaco-primary rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute left-10 -bottom-20 w-48 h-48 bg-jaco-accent rounded-full blur-[80px] opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
        
        {/* Left Content */}
        <div className="flex items-start gap-4 max-w-2xl">
           <div className="hidden sm:flex h-16 w-16 bg-white/10 rounded-2xl items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20 shadow-xl transform group-hover:rotate-6 transition-transform">
               <Trophy className="text-jaco-accent" size={32} />
           </div>
           
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-jaco-accent/20 text-jaco-accent border border-jaco-accent/20 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                     Event
                 </span>
                 <span className="text-pink-300 text-xs font-bold flex items-center gap-1">
                     <Sparkles size={12} /> Limited Time
                 </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                  Jaco All-Star Tournament 2024
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-medium max-w-lg">
                  Watch the top creators battle for glory and a $50,000 prize pool. Tune in daily at 8 PM EST.
              </p>
           </div>
        </div>

        {/* Right CTA */}
        <div className="flex-shrink-0 flex gap-3 w-full md:w-auto">
            {/* Using !important classes to ensure the white background and primary text override component defaults */}
            <Button className="w-full md:w-auto !bg-white !text-jaco-primary hover:!bg-gray-100 font-bold shadow-xl border-none">
                Watch Event
            </Button>
            <Button variant="outline" className="w-full md:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white">
                Details <ArrowRight size={16} className="ml-1" />
            </Button>
        </div>
      </div>
    </div>
  );
};
