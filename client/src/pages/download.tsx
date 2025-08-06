import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, ArrowLeft, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      const response = await fetch('/api/download/addon');
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Actions Stuff 1.4.mcpack';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: "Free Actions Stuff 1.4 add-on is downloading...",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download the add-on. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--minecraft-bg)' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'var(--minecraft-brown)' }} className="pixelated-border">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
              FreeActStuff1.4
            </h1>
            <div className="mt-2 w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--minecraft-green)' }}></div>
          </div>
        </div>
      </header>

      {/* Download Confirmation Section */}
      <main className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-8 flex justify-center">
            <Button
              onClick={() => setLocation('/home')}
              variant="outline"
              className="text-gray-700 border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          {/* Confirmation Card */}
          <div style={{ backgroundColor: 'var(--minecraft-green)' }} className="pixelated-border p-8 md:p-12 mb-12 mx-auto max-w-2xl">
            <div style={{ backgroundColor: 'var(--minecraft-brown)' }} className="pixelated-border p-6 mb-6">
              {/* Success Icon */}
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-20 h-20 text-green-400" />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                Ready to Download
              </h2>
              
              <div style={{ color: 'var(--minecraft-bg)' }} className="font-medium text-lg mb-4">
                Free Actions Stuff 1.4
              </div>

              <div className="text-white text-sm md:text-base font-medium space-y-2">
                <p>✓ Compatible with Minecraft Bedrock Edition</p>
                <p>✓ File size: ~2.5 MB</p>
                <p>✓ Format: .mcpack</p>
              </div>
            </div>
            
            <div className="text-white text-sm md:text-base font-medium mb-8">
              Click the button below to start your download
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="minecraft-button text-white font-bold text-xl md:text-2xl px-12 py-6 tracking-wider border-0"
            >
              {isDownloading ? (
                <>
                  <Download className="mr-2 h-6 w-6 animate-bounce" />
                  DOWNLOADING...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-6 w-6" />
                  CONFIRM DOWNLOAD
                </>
              )}
            </Button>
          </div>
          
          {/* Installation Instructions */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Installation Instructions:</h3>
            <div className="text-sm text-gray-700 space-y-2 text-left">
              <p>1. Download the .mcpack file</p>
              <p>2. Open Minecraft Bedrock Edition</p>
              <p>3. Click the file and it will go to Minecraft then upload automatically</p>
              <p>4. Activate the add-on in your world settings</p>
              <p>5. Enjoy your new actions!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}