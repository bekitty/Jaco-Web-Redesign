import React from 'react';
import { MOCK_USERS } from '../constants';
import { Video, Heart, MoreVertical } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // Base classes for sidebar transition and positioning
  const sidebarClasses = `
    fixed left-0 top-16 bottom-0 z-40
    bg-jaco-dark border-r border-white/5 overflow-y-auto
    transition-all duration-300 ease-in-out
    ${isOpen ? 'w-60' : 'w-0 lg:w-16'}
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="p-3">
        {/* Recommended Header */}
        <div className="flex items-center justify-between mb-4 px-2">
          {isOpen && (
            <h3 className="font-bold text-xs text-jaco-muted uppercase tracking-wider">
              Recommended
            </h3>
          )}
           {!isOpen && (
             <div className="w-full flex justify-center">
                 <Video size={18} className="text-jaco-muted" />
             </div>
           )}
        </div>

        {/* User List */}
        <div className="space-y-1">
          {MOCK_USERS.map((user) => (
            <div 
              key={user.id} 
              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-jaco-hover cursor-pointer transition-colors"
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={user.avatarUrl} 
                  alt={user.username} 
                  className={`rounded-full object-cover transition-all ${isOpen ? 'w-8 h-8' : 'w-8 h-8 lg:w-9 lg:h-9'}`}
                />
                {user.isLive && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 border-2 border-jaco-dark rounded-full"></span>
                )}
              </div>

              {isOpen && (
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-200 truncate group-hover:text-white">
                        {user.username}
                    </p>
                    {user.isLive && (
                        <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            <span className="text-xs text-jaco-muted">2.4k</span>
                        </div>
                    )}
                  </div>
                  <p className="text-xs text-jaco-muted truncate group-hover:text-gray-400">
                    {user.category || 'Offline'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {isOpen && <div className="my-4 h-px bg-white/5 mx-2" />}

        {/* Following Section (Only if open) */}
        {isOpen && (
             <div className="mb-4 px-2 mt-4">
                 <h3 className="font-bold text-xs text-jaco-muted uppercase tracking-wider mb-3">
                    Following
                </h3>
                 <div className="text-center py-6 bg-jaco-card/50 rounded-lg border border-dashed border-white/5">
                    <Heart className="mx-auto text-jaco-muted mb-2" size={20} />
                    <p className="text-xs text-jaco-muted">Sign in to follow channels</p>
                 </div>
             </div>
        )}
      </div>
    </aside>
  );
};