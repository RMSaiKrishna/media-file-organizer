
import React from 'react';
import { 
  Image, 
  FileAudio, 
  Video, 
  FileText, 
  Book, 
  Link as LinkIcon, 
  File
} from 'lucide-react';
import { FileData } from './FileGrid';

interface FileItemProps {
  file: FileData;
  onClick?: () => void;
}

const FileItem = ({ file, onClick }: FileItemProps) => {
  // Determine which icon to use based on the file type
  const getIcon = () => {
    switch (file.type) {
      case 'image':
        return <Image className="w-12 h-12" />;
      case 'audio':
        return <FileAudio className="w-12 h-12" />;
      case 'video':
        return <Video className="w-12 h-12" />;
      case 'document':
        return <FileText className="w-12 h-12" />;
      case 'note':
        return <Book className="w-12 h-12" />;
      case 'link':
        return <LinkIcon className="w-12 h-12" />;
      case 'voice':
        return <FileAudio className="w-12 h-12" />;
      default:
        return <File className="w-12 h-12" />;
    }
  };

  return (
    <div className="file-item" onClick={onClick}>
      <div className="file-icon">
        {file.type === 'image' && file.thumbnail ? (
          <img 
            src={file.thumbnail} 
            alt={file.name} 
            className="w-full h-full object-contain" 
          />
        ) : (
          getIcon()
        )}
      </div>
      <div className="file-name">{file.name}</div>
      <div className="text-xs text-gray-500 mt-1">{file.size}</div>
    </div>
  );
};

export default FileItem;
