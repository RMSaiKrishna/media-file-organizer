
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Image, FileAudio, Video, FileText, Book, Link as LinkIcon, File, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const categories = [
    { name: 'Images', icon: <Image className="w-10 h-10" />, path: '/images', color: 'bg-blue-50 text-blue-500' },
    { name: 'Audio', icon: <FileAudio className="w-10 h-10" />, path: '/audio', color: 'bg-green-50 text-green-500' },
    { name: 'Videos', icon: <Video className="w-10 h-10" />, path: '/videos', color: 'bg-red-50 text-red-500' },
    { name: 'Documents', icon: <FileText className="w-10 h-10" />, path: '/documents', color: 'bg-yellow-50 text-yellow-500' },
    { name: 'Notes', icon: <Book className="w-10 h-10" />, path: '/notes', color: 'bg-purple-50 text-purple-500' },
    { name: 'Links', icon: <LinkIcon className="w-10 h-10" />, path: '/links', color: 'bg-indigo-50 text-indigo-500' },
    { name: 'Voice', icon: <FileAudio className="w-10 h-10" />, path: '/voice', color: 'bg-pink-50 text-pink-500' },
  ];

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Media File Organizer</h1>
            <p className="text-gray-600">Store and organize all your media files in one place</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Upload className="w-4 h-4 mr-2" /> Upload New File
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.path} key={category.name} className="animate-fade-in">
              <div className="category-card">
                <div className={`rounded-full p-6 ${category.color}`}>
                  {category.icon}
                </div>
                <h2 className="font-semibold mt-4">{category.name}</h2>
                <p className="text-sm text-gray-500">Browse your {category.name.toLowerCase()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
