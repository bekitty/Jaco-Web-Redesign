
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { StreamRoom } from './pages/StreamRoom';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Check if we are in the stream room to auto-collapse sidebar for more theater space
  const isStreamRoom = location.pathname.startsWith('/stream/');

  useEffect(() => {
    const handleResize = () => {
      // Auto close on mobile
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } 
      // If we are in stream room, default to closed on smaller desktops to focus on video
      else if (isStreamRoom && window.innerWidth < 1400) {
        setIsSidebarOpen(false);
      }
      else {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isStreamRoom]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Layout adjustment: If in stream room, remove standard padding/margin constraints to allow full width
  const mainClasses = isStreamRoom 
    ? `flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-60' : 'lg:ml-16'} overflow-hidden bg-black`
    : `flex-1 p-6 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-60' : 'lg:ml-16'}`;

  return (
    <div className="min-h-screen bg-jaco-dark text-jaco-text font-sans selection:bg-jaco-primary selection:text-white">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex pt-0">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className={mainClasses}>
          {isStreamRoom ? (
             <div className="w-full h-full">{children}</div>
          ) : (
            <>
              <div className="max-w-[1800px] mx-auto min-h-[80vh]">
                {children}
              </div>
              <footer className="mt-20 pt-10 border-t border-white/5 pb-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-jaco-muted">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-white">Jaco Inc.</span>
                        <span>© 2024 All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-jaco-primary">Terms</a>
                        <a href="#" className="hover:text-jaco-primary">Privacy</a>
                        <a href="#" className="hover:text-jaco-primary">Guidelines</a>
                    </div>
                </div>
              </footer>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/stream/:id" element={<StreamRoom />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
