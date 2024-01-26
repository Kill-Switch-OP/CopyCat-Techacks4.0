# CopyCat-Techacks4.0

## Introduction
CopyCat is an innovative solution designed to streamline and enhance the experience of music artists and listeners. This project is part of Techacks4.0 and aims to address key challenges in the music industry using modern web technologies.

## Features
- **Artist Upload**: Artists can upload their music, which is then processed and stored securely.
- **Content Recognition**: Utilizes advanced algorithms to recognize and manage music content.
- **User Interaction**: A user-friendly interface for both artists and listeners to interact with the platform.

## Technology Stack
- **Frontend**: React.js, Chakra UI
- **Backend**: Node.js, Express, Python Flask
- **Database**: LevelDB
- **Other Technologies**: IPFS for decentralized storage, Shazam API for music recognition

## Project Structure
- `frontend`: Contains all the React components and styling for the web application.
- `backend`: Split into two parts:
  - `node`: Node.js server handling file uploads and interactions with IPFS.
  - `python`: Python Flask server for processing and recognizing music content.

### Prerequisites
- Node.js
- Python
- IPFS node (local or remote)
