import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Download endpoint for the Minecraft add-on
  app.get("/api/download/addon", async (req, res) => {
    try {
      const addonPath = path.resolve(import.meta.dirname, "..", "attached_assets", "Actions Stuff 1.4_1754487505287.mcpack");
      
      // Check if file exists
      if (!fs.existsSync(addonPath)) {
        return res.status(404).json({ 
          message: "Add-on file not found. Please contact support." 
        });
      }

      const stat = fs.statSync(addonPath);
      
      // Set appropriate headers for file download
      res.setHeader('Content-Disposition', 'attachment; filename="Actions Stuff 1.4.mcpack"');
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Cache-Control', 'no-cache');
      
      // Stream the file
      const fileStream = fs.createReadStream(addonPath);
      fileStream.pipe(res);
      
      fileStream.on('error', (error) => {
        console.error('Error streaming file:', error);
        if (!res.headersSent) {
          res.status(500).json({ message: "Error downloading file" });
        }
      });

    } catch (error) {
      console.error('Download error:', error);
      res.status(500).json({ 
        message: "Internal server error while downloading add-on" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
