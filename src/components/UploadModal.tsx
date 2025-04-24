
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Upload, X } from 'lucide-react';
import { toast } from 'sonner';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileType: 'image' | 'audio' | 'video' | 'document' | 'note' | 'link' | 'voice';
}

const UploadModal = ({ isOpen, onClose, fileType }: UploadModalProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast.error('Please select at least one file to upload');
      return;
    }

    // Here you would implement your actual upload logic
    toast.success(`Uploaded ${files.length} files successfully!`);
    setFiles([]);
    onClose();
  };

  // Determine acceptable file types based on fileType prop
  const getAcceptedFileTypes = () => {
    switch (fileType) {
      case 'image':
        return 'image/*';
      case 'audio':
        return 'audio/*';
      case 'video':
        return 'video/*';
      case 'document':
        return '.pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx';
      case 'note':
        return '.txt,.md';
      case 'link':
        return '*/*';
      case 'voice':
        return 'audio/*';
      default:
        return '*/*';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload {fileType.charAt(0).toUpperCase() + fileType.slice(1)}</DialogTitle>
        </DialogHeader>
        <div
          className={`mt-4 p-6 border-2 border-dashed rounded-lg transition-colors ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <Upload className="h-10 w-10 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">
              Drag and drop your files here
            </p>
            <p className="mt-1 text-xs text-gray-500">or</p>
            <label className="mt-2 cursor-pointer">
              <input
                type="file"
                className="hidden"
                multiple
                accept={getAcceptedFileTypes()}
                onChange={handleFileChange}
              />
              <span className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors">
                Select files
              </span>
            </label>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Selected Files:</h4>
            <div className="max-h-32 overflow-y-auto">
              {files.map((file, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="text-sm truncate mr-2">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
