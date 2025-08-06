import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleDownload = () => {
    setLocation('/download');
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

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Add-on Showcase Block */}
          <div style={{ backgroundColor: 'var(--minecraft-green)' }} className="pixelated-border p-8 md:p-12 mb-12 mx-auto max-w-2xl">
            <div style={{ backgroundColor: 'var(--minecraft-brown)' }} className="pixelated-border p-6 mb-6">
              {/* Minecraft grass block inspired icon */}
              <div className="w-24 h-24 mx-auto mb-6 minecraft-icon pixelated-border relative overflow-hidden">
                <div className="absolute inset-0 minecraft-icon-grid opacity-20"></div>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                Free Actions Stuff 1.4
              </h2>
              
              <div style={{ color: 'var(--minecraft-bg)' }} className="font-medium text-lg">
                Minecraft Bedrock Add-on
              </div>
            </div>
            
            <div className="text-white text-sm md:text-base font-medium mb-8">
              Compatible with Minecraft Bedrock Edition
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleDownload}
              className="minecraft-button text-white font-bold text-xl md:text-2xl px-12 py-6 tracking-wider border-0"
            >
              <Download className="mr-2 h-6 w-6" />
              DOWNLOAD NOW
            </Button>
          </div>
          
          {/* Download Info */}
          <div className="mt-8 text-gray-600 text-sm font-medium">
            <p>Click to download Free Actions Stuff 1.4 add-on</p>
            <p className="mt-1">File size: ~2.5 MB | .mcpack format</p>
          </div>
        </div>
      </main>
    </div>
  );
}
