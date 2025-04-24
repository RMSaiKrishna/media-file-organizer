
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Upload, Search, Grid, List } from 'lucide-react';
import FileGrid, { FileData } from '@/components/FileGrid';
import UploadModal from '@/components/UploadModal';
import { Input } from '@/components/ui/input';

const Audio = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Sample audio data - in a real app, this would come from your API/database
  const [audioFiles, setAudioFiles] = useState<FileData[]>([
    {
      id: '1',
      name: 'favorite-song.mp3',
      type: 'audio',
      url: '#',
      dateAdded: '2023-04-15',
      size: '5.4 MB',
    },
    {
      id: '2',
      name: 'podcast-episode.mp3',
      type: 'audio',
      url: '#',
      dateAdded: '2023-03-22',
      size: '12.8 MB',
    },
    {
      id: '3',
      name: 'instrumental-music.mp3',
      type: 'audio',
      url: '#',
      dateAdded: '2023-04-01',
      size: '4.2 MB',
    }
  ]);

  const filteredAudio = audioFiles.filter(audio =>
    audio.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileClick = (file: FileData) => {
    // In a real app, you might show a audio player modal or download the file
    window.open(file.url, '_blank');
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Your Audio Files</h2>
          <Button onClick={() => setIsUploadModalOpen(true)}>
            <Upload className="w-4 h-4 mr-2" /> Upload Audio
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search audio files..."
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

        <FileGrid files={filteredAudio} onFileClick={handleFileClick} />
      </div>
      
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        fileType="audio" 
      />
    </Layout>
  );
};

export default Audio;
