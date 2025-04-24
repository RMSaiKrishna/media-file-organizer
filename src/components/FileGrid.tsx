
import React from 'react';
import FileItem from './FileItem';

export interface FileData {
  id: string;
  name: string;
  type: 'image' | 'audio' | 'video' | 'document' | 'note' | 'link' | 'voice';
  url: string;
  thumbnail?: string;
  dateAdded: string;
  size?: string;
}

interface FileGridProps {
  files: FileData[];
  onFileClick?: (file: FileData) => void;
}

const FileGrid = ({ files, onFileClick }: FileGridProps) => {
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-400">
        <p className="text-lg">No files found</p>
        <p className="text-sm">Upload some files to get started</p>
      </div>
    );
  }

  return (
    <div className="file-grid">
      {files.map((file) => (
        <FileItem 
          key={file.id} 
          file={file} 
          onClick={() => onFileClick && onFileClick(file)} 
        />
      ))}
    </div>
  );
};

export default FileGrid;
