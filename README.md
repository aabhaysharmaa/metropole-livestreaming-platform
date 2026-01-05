# Metropole Streaming Platform

Metropole is a modern, high-performance live streaming platform designed for creators and viewers. It provides seamless integration with popular streaming software, real-time interactivity, and a scalable backend architecture built for production use.

---

## Overview

Metropole enables creators to go live using industry-standard streaming protocols while offering viewers a rich, interactive experience. The platform focuses on performance, reliability, and a clean user experience.

**Now supporting streaming up to 8K resolution** for ultra-high-definition live broadcasts, with **real-time interactive chat** and a **dedicated streaming player** for smooth playback.

---

## Key Features

### Streaming & Infrastructure

* Streaming support using **RTMP and WHIP protocols**
* **2k to 8K ultra-high-definition streaming support**
* Automatic ingress generation for streams
* Easy connection to OBS and other streaming software
* Live status management
* Live viewer count
* Webhook-based syncing of live status data

### Streaming & Customization

* Support for user-defined preferred streaming providers
* Users can select and save their favorite streaming provider in their account settings
* Seamless integration with multiple streaming providers
* Provider preference persisted and reused across streams
* **Dedicated streaming player** with:

  * Adaptive bitrate support for smooth playback
  * Low-latency streaming for real-time interaction
  * Full-screen and theatre modes
  * Integration with live chat and reaction features

### Real-Time Chat & Community

* **Fully real-time chat** using WebSockets
* **Unique color assigned to each viewer** for easy identification
* **Slow mode** to limit message frequency in high-traffic streams
* **Chat delay mode** to prevent spam during live broadcasts
* **Followers-only chat mode** for exclusive engagement
* **Offense/block moderation mode** to kick or ban disruptive participants
* Ability to enable or disable chat per stream
* Real-time updates for viewers joining or leaving
* Community tab for engagement and interaction

### Creator Tools

* Streamer / Creator dashboard with **real-time stream and chat analytics**
* Thumbnail upload for streams
* Live stream status indicators
* Full control over chat modes (slow mode, delay mode, followers-only, offense moderation)
* Real-time management of participants
* Streamer can customize player settings (quality options, autoplay, theatre mode)

### UI & UX

* **Dedicated streaming player** embedded in all stream views
* Collapsible layout (theatre mode, hide chat, hide sidebars)
* Sidebar with following list and recommended streams
* Home page with stream recommendations, sorted by live status
* Search results page with a dedicated layout
* Clean, modern, and visually appealing design

### Performance & Architecture

* Server-Side Rendering (SSR)
* Grouped routes and layouts
* Blazing fast performance
* MySQL database

---

## Tech Stack

* **Frontend:** Next.js
* **Backend:** Node.js
* **Streaming:** RTMP, WHIP (up to 8K)
* **Real-time:** WebSockets (for chat and live updates)
* **Database:** MySQL
* **Rendering:** Server-Side Rendering (SSR)

---

## Getting Started

### Prerequisites

* Node.js (latest LTS recommended)
* MySQL database
* Streaming software (OBS or compatible)
* RTMP/WHIP-compatible streaming server capable of **8K output**

### Installation

```bash
git clone https://github.com/your-username/metropole.git
cd metropole
npm install
```
