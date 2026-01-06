# Metropole Streaming Platform

Metropole is a modern, high-performance live streaming platform designed for creators and viewers. It provides seamless integration with popular streaming software, real-time interactivity, and a scalable backend architecture built for production use.

---

## Overview

Metropole enables creators to go live using industry-standard streaming protocols while offering viewers a rich, interactive experience. The platform focuses on performance, reliability, and a clean user experience.

**Now supporting streaming up to 8K resolution**, including **console-based streaming (PS5, Xbox)**, with **real-time interactive chat** and a **dedicated streaming player** for smooth, low-latency playback.

---

## Key Features

### Streaming & Infrastructure

* Streaming support using **RTMP and WHIP protocols**
* **2K to 8K ultra-high-definition streaming support**
* Automatic ingress generation for streams
* Easy connection to OBS and other streaming software
* Native **console streaming support (PS5, Xbox)**
* Capture card compatibility (Elgato, AverMedia, etc.)
* Live status management
* Live viewer count
* Webhook-based syncing of live status data

---

### Streaming Providers & Customization

* Support for user-defined preferred streaming providers
* Users can select and save their favorite streaming provider in account settings
* Seamless integration with multiple streaming providers
* Provider preference persisted and reused across streams
* Dedicated streaming player with:

  * Adaptive bitrate streaming
  * Ultra-low latency playback
  * Full-screen and theatre modes
  * Integrated live chat and reactions

---

### Console & External Device Streaming

* Stream directly from **PS5 / consoles** to Metropole
* Support for built-in console RTMP output
* OBS + capture card workflow support
* Console-optimized bitrate and latency presets
* Automatic gameplay thumbnail generation
* Game audio and voice chat mixing
* Stream start/stop status syncing

---

### Loading Skeletons (Professional UI Feedback)

Metropole now includes fully integrated loading skeletons for a polished and responsive user experience. This ensures users never see blank screens while content is loading. Features include:

* Stream Preview Skeletons: Placeholder cards for live streams while data loads

* Chat Skeletons: Shows message boxes with shimmer effect while chat connects

* Sidebar Skeletons: Loading placeholders for following and recommended streams

* Dashboard Skeletons: Creator dashboard placeholders with real-time analytics layout

* Adaptive Skeletons: Automatically match content type (video, chat, stats)

* Smooth Animation: Subtle shimmer and fade-in for professional feel

These skeletons improve perceived performance and provide a premium, modern UX for both creators and viewers.
### Real-Time Chat & Community

* Fully real-time chat using **WebSockets**
* Unique color assigned to each viewer
* Slow mode to limit message frequency
* Chat delay mode for spam prevention
* Followers-only chat mode
* Kick, mute, and ban moderation tools
* Enable or disable chat per stream
* Real-time join/leave indicators
* Community tab for engagement

---

### Creator Tools

* Creator dashboard with real-time analytics
* Stream health and quality monitoring
* Thumbnail upload and management
* Live stream status indicators
* Full control over chat modes
* Participant moderation tools
* Player configuration controls

---

### UI & UX

* Dedicated streaming player embedded across the platform
* Theatre mode and collapsible layouts
* Hide chat and sidebars for focus viewing
* Sidebar with following and recommended streams
* Home page with live-first recommendations
* Dedicated search results layout
* Clean, modern, creator-focused UI

---

### Performance & Architecture

* Server-Side Rendering (SSR)
* Optimized route grouping and layouts
* High-performance backend architecture
* Horizontally scalable streaming pipeline
* MySQL database

---

## Tech Stack

* **Frontend:** Next.js
* **Backend:** Node.js
* **Streaming:** RTMP, WHIP (up to 8K)
* **Real-time:** WebSockets
* **Database:** MySQL
* **Rendering:** Server-Side Rendering (SSR)

---

## Getting Started

### Prerequisites

* Node.js (latest LTS recommended)
* MySQL database
* Streaming software (OBS or compatible)
* PS5 / console (optional)
* RTMP / WHIP-compatible streaming server supporting **8K output**

### Installation

```bash
git clone https://github.com/your-username/metropole.git
cd metropole
npm install
```
