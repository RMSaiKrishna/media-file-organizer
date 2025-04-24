
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Determine the current section based on the URL path
  const getTitle = () => {
    switch (pathname) {
      case '/':
        return 'Dashboard';
      case '/images':
        return 'Images';
      case '/audio':
        return 'Audio Files';
      case '/videos':
        return 'Videos';
      case '/documents':
        return 'Documents';
      case '/notes':
        return 'Notes';
      case '/links':
        return 'Links';
      case '/voice':
        return 'Voice Messages';
      default:
        return 'File Manager';
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-filemanager-header text-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">{getTitle()}</h1>
        </header>
        <main className="flex-1 overflow-auto bg-filemanager-background p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
