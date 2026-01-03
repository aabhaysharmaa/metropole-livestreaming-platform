# Metropole Streaming Platform

Metropole is a modern, high-performance live streaming platform designed for creators and viewers. It provides seamless integration with popular streaming software, real-time interactivity, and a scalable backend architecture built for production use.

---

## Overview

Metropole enables creators to go live using industry-standard streaming protocols while offering viewers a rich, interactive experience. The platform focuses on performance, reliability, and a clean user experience, powered by server-side rendering and a robust database layer.

---

## Key Features

### Streaming & Infrastructure
- Streaming support using RTMP and WHIP protocols
- Automatic ingress generation for streams
- Easy connection to OBS and other streaming software
- Live status management
- Live viewer count
- Webhook-based syncing of live status data


### Streaming & Customization

- Support for user-defined preferred streaming providers
- Users can select and save their favorite streaming - - - provider in their account settings
- Seamless integration with multiple streaming providers
- Provider preference persisted and reused across streams

### Authentication & User Management
- Secure authentication system
- User information syncing to the database using webhooks
- Following system
- Blocking system

### Chat & Community
- Real-time chat using WebSockets
- Unique color assigned to each viewer in chat
- Slow chat mode
- Followers-only chat mode
- Ability to enable or disable chat
- Kick participants from a stream in real time
- Community tab for engagement

### Creator Tools
- Streamer / Creator dashboard
- Thumbnail upload for streams
- Live stream status indicators

### UI & UX
- Collapsible layout (theatre mode, hide chat, hide sidebars)
- Sidebar with following list and recommended streams
- Home page with stream recommendations, sorted by live status
- Search results page with a dedicated layout
- Clean, modern, and visually appealing design

### Performance & Architecture
- Server-Side Rendering (SSR)
- Grouped routes and layouts
- Blazing fast performance
- MySQL database

---

## Tech Stack

- **Frontend:** Next.js
- **Backend:** Node.js
- **Streaming:** RTMP, WHIP
- **Real-time:** WebSockets
- **Database:** MySQL
- **Rendering:** Server-Side Rendering (SSR)

---

## Getting Started

### Prerequisites
- Node.js (latest LTS recommended)
- MySQL database
- Streaming software (OBS or compatible)
- RTMP/WHIP-compatible streaming server

### Installation

```bash
git clone https://github.com/your-username/metropole.git
cd metropole
npm install
