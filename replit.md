# FreeActStuff1.4 - Minecraft Add-on Download Site

## Overview

This is a web application designed to distribute the "Free Actions Stuff 1.4" Minecraft Bedrock Edition add-on. The site provides a simple, user-friendly interface for downloading the .mcpack file directly to users' devices. The application features an ultra-minimal design with just a header, title, and download button, plus a confirmation page for downloads. The application uses a full-stack architecture with React frontend and Express backend, featuring a Minecraft-themed design with earth tones and pixelated aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom Minecraft-themed color palette and design system
- **Routing**: Wouter for lightweight client-side routing with two main routes:
  - `/` - Home page with header, title, and download button
  - `/download` - Download confirmation page with installation instructions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **File Serving**: Custom endpoint for streaming Minecraft add-on files
- **Development**: Hot reloading with Vite integration and custom logging middleware

### Design System
- **Theme**: Minecraft-inspired earth tone color scheme with warm browns, greens, and neutral backgrounds
- **Typography**: Roboto Mono font family for a technical, gaming aesthetic
- **Components**: Comprehensive UI component library including buttons, cards, dialogs, and form elements
- **Responsive**: Mobile-first design with adaptive layouts

### Data Storage
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema**: User management schema with username/password authentication structure
- **Storage Interface**: Abstracted storage layer with both database and in-memory implementations

### File Management
- **Asset Storage**: Static Minecraft add-on files stored in `attached_assets` directory
- **Download System**: Secure file streaming with proper headers and error handling
- **File Validation**: Existence checks and proper MIME type handling for .mcpack files

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Experience**: Hot module replacement, error overlays, and development banners

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **UI Components**: Radix UI component primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx utility

### Backend Dependencies
- **Server**: Express.js, Node.js built-in modules (fs, path, crypto, http)
- **Database**: Drizzle ORM, Neon Database serverless driver, PostgreSQL
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Utility Libraries
- **Validation**: Zod schema validation, Drizzle-Zod integration
- **Date Handling**: date-fns for date manipulation
- **State Management**: TanStack React Query for server state
- **UI Enhancements**: Embla Carousel, Command palette (cmdk)

### Development and Tooling
- **Replit Integration**: Specialized plugins for Replit development environment
- **Code Formatting**: Tailwind merge utilities, CSS variable management
- **Error Handling**: Runtime error modals, development banners