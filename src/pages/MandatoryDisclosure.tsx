import React, { useState } from 'react';
import { Download } from 'lucide-react';
import '../styles/MandatoryDisclosure.css';

const MandatoryDisclosure = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const pdfUrl = "https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Public_Disclosure.pdf";
      const response = await fetch(pdfUrl, {
        headers: {
          'Accept': 'application/pdf'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mandatory_Public_Disclosure.pdf';
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      setError('Failed to download the file. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="disclosure-page">
      <div className="inner-heading">
        <div className="container">
          <h1>Mandatory Public Disclosure</h1>
        </div>
      </div>

      <div className="disclosure-content">
        <div className="container">
          <div className="page-wrapper">
            <div className="disclosure-actions">
              <button 
                onClick={handleDownload} 
                className={`download-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
                aria-label={isLoading ? 'Downloading...' : 'Download Disclosure'}
              >
                {!isLoading && <Download size={20} />}
                <span>{isLoading ? 'Downloading...' : 'Download Disclosure'}</span>
              </button>
              {error && <div className="error-message">{error}</div>}
            </div>
            <div className="pdf-preview">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent('https://raw.githubusercontent.com/devloper-dp/vpa/86a402080c5b1f28399a4526c5c70515e06a0a9a/public/documents/Public_Disclosure.pdf')}&embedded=true`}
                width="100%"
                height="100%"
                title="Mandatory Public Disclosure PDF Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;