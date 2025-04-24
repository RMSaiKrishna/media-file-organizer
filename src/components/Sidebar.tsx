
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Image, 
  Audio, 
  Video, 
  FileText, 
  Book, 
  Link as LinkIcon, 
  File 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigation = [
    { name: 'Dashboard', path: '/', icon: <File className="w-5 h-5" /> },
    { name: 'Images', path: '/images', icon: <Image className="w-5 h-5" /> },
    { name: 'Audio', path: '/audio', icon: <Audio className="w-5 h-5" /> },
    { name: 'Videos', path: '/videos', icon: <Video className="w-5 h-5" /> },
    { name: 'Documents', path: '/documents', icon: <FileText className="w-5 h-5" /> },
    { name: 'Notes', path: '/notes', icon: <Book className="w-5 h-5" /> },
    { name: 'Links', path: '/links', icon: <LinkIcon className="w-5 h-5" /> },
    { name: 'Voice', path: '/voice', icon: <Audio className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground flex-shrink-0 hidden md:block">
      <div className="p-4 text-xl font-bold border-b border-sidebar-border">
        Media Organizer
      </div>
      <nav className="mt-4">
        {navigation.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
              pathname === item.path && "bg-sidebar-accent text-sidebar-primary"
            )}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
