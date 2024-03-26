# CopyCat
# Devfolio Link - https://devfolio.co/projects/copycat-3fee

## Empower Your Music, Own Your Art: Decentralizing Creativity with Blockchain!

## Introduction
CopyCat is an innovative solution designed to streamline and enhance the experience of music artists and listeners. This project is part of Techacks4.0 and aims to address key challenges in the music industry using modern web technologies.

## Features
- **Artist Upload**: Artists can upload their music, which is then processed and stored securely.
- **Content Recognition**: Utilizes advanced algorithms to recognize and manage music content.
- **User Interaction**: A user-friendly interface for both artists and listeners to interact with the platform.

### Problem it Solves
In the world where music platforms and conventional content ID systems centralize control, resulting in unauthorized duplication and diminished earnings for artists, CopyCat emerges as a beacon of change. This web3-based music application leverages decentralized content ID system through IPFS blockchain technology coupled with a robust API library, ensuring artists like Geetansh retain exclusive ownership of their music and a larger share of their earnings. It's our mission to eliminate middlemen, protect content from theft, and revolutionize the music industry by empowering artists.

### Technologies Used
- **MERN Stack**: A powerful combination of MongoDB, Express.js, React, and Node.js for a full-stack development experience.
- **Flask & Django**: Python's leading web frameworks for rapid development and clean, pragmatic design.
- **IPFS**: InterPlanetary File System for decentralized and peer-to-peer method of storing and sharing data in a distributed file system.
- **Chakra UI**: A simple, modular, and accessible component library that gives you the building blocks to build your React applications.
- **LevelDB & RocksDB**: Highly performant key-value storage libraries used for local data storage.

### Integration Highlights

#### OpenZeppelin
Our application embodies the ethos of open-source by employing IPFS blockchain technology for decentralized content ID, directly addressing the disadvantages faced by artists on current music platforms. Through the integration of OpenZeppelin's smart contracts, we ensure the exclusive ownership and a larger share of income for artists, fostering innovation and a more equitable digital music landscape. [Explore OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)

#### Orkes Conductor
The seamless integration with Orkes Conductor showcases our technical prowess and innovative approach, emphasizing workflow emulation and dual backend mastery. Our application not only stands as a testament to our capability in orchestrating complex processes but also sets a new industry standard for technical excellence and integration quality.

#### Ethereum
By aligning with Ethereum, CopyCat optimizes smart contract workflows within the ecosystem, enhancing the efficiency and scalability of processes. Our innovative solutions and novel techniques in managing smart contracts on Ethereum demonstrate our commitment to advancing blockchain technology and its application in the music industry.

## Project Structure
- `frontend`: Contains all the React components and styling for the web application.
- `backend`: Split into two parts:
  - `node`: Node.js server handling file uploads and interactions with IPFS.
  - `python`: Python Flask server for processing and recognizing music content.

### Prerequisites
- Node.js
- Python
- IPFS node (local or remote)
