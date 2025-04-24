
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Upload, Search, Grid, List } from 'lucide-react';
import FileGrid, { FileData } from '@/components/FileGrid';
import UploadModal from '@/components/UploadModal';
import { Input } from '@/components/ui/input';

const Links = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Sample links data - in a real app, this would come from your API/database
  const [links, setLinks] = useState<FileData[]>([
    {
      id: '1',
      name: 'GitHub Repository',
      type: 'link',
      url: 'https://github.com',
      dateAdded: '2023-04-15',
      size: '',
    },
    {
      id: '2',
      name: 'Documentation Reference',
      type: 'link',
      url: 'https://docs.example.com',
      dateAdded: '2023-03-22',
      size: '',
    },
    {
      id: '3',
      name: 'Tutorial Website',
      type: 'link',
      url: 'https://tutorial.example.com',
      dateAdded: '2023-04-01',
      size: '',
    }
  ]);

  const filteredLinks = links.filter(link =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileClick = (file: FileData) => {
    // Open the URL in a new tab
    window.open(file.url, '_blank');
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Your Links</h2>
          <Button onClick={() => setIsUploadModalOpen(true)}>
            <Upload className="w-4 h-4 mr-2" /> Add Link
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search links..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <FileGrid files={filteredLinks} onFileClick={handleFileClick} />
      </div>
      
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        fileType="link" 
      />
    </Layout>
  );
};

export default Links;
