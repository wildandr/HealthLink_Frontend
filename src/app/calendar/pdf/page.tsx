"use client"
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';


const Pdf = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('http://157.245.152.247:8000/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          
          const decodedImageData = atob(data.preview_image);
          const uint8Array = new Uint8Array(decodedImageData.length);
          for (let i = 0; i < decodedImageData.length; i++) {
            uint8Array[i] = decodedImageData.charCodeAt(i);
          }
          const blob = new Blob([uint8Array], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(blob);
  
          setPreviewImage(imageUrl);
          setIsChecked(true);
        } else {
          const errorData = await response.json();
          console.error('Failed to upload file:', errorData);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  
  const handleScanButtonClick = () => {
    router.push('/quiz');
  };

  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className="bg-[#28a99e] h-full px-8 py-12 flex flex-col gap-2 justify-center items-center">
        {!previewImage && (
          <>
            <h1 className="text-[2rem] font-semibold">Scan your PDF!</h1>
            <h1 className="text-2xl font-medium">Turn your file into a quiz!</h1>
            <div className="max-w-md mt-2 w-full flex justify-center">
              <button
                onClick={handleButtonClick}
                className="border-2 border-[#320083] rounded-2xl bg-[#F7C93D] py-5 px-7 w-full text-2xl text-black font-medium"
              >
                Select File
              </button>
              <input
                onChange={handleFileChange}
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
              />
            </div>
          </>
        )}
        {previewImage && (
          <div className="mt-4 flex flex-col justify-center items-center">
            <embed src={previewImage} type="application/pdf" width="100%" height="500" />
            <p className="text-lg font-medium mt-2">{selectedFile?.name}</p>
            <div className="max-w-md mt-2 w-full flex justify-center">
              <button
                onClick={handleScanButtonClick}
                disabled={!isChecked} // Disable button if checkbox is not checked
                className={`border-2 border-[#320083] rounded-2xl bg-[#F7C93D] py-5 px-7 w-full text-2xl text-black font-medium ${!isChecked && 'opacity-50 cursor-not-allowed'}`}
              >
                Scan File
              </button>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="agree"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm font-medium">
                The submission is my own work, except where I have acknowledged<br></br>  the use of the works of other people.
              </label>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Pdf;
