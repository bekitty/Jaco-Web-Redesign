
import { Stream, Category, User } from './types';

// Helper to get reliable Unsplash images with ixlib param
const getImg = (id: string, w = 800, h = 450) => `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const MOCK_USERS: User[] = [
  { id: 'u1', username: 'JacoGamer', avatarUrl: getImg('1566492031773-4fbc7176cb47', 100, 100), isLive: true, category: 'Gaming' },
  { id: 'u2', username: 'SaraVibes', avatarUrl: getImg('1494790108377-be9c29b29330', 100, 100), isLive: true, category: 'Just Chatting' },
  { id: 'u3', username: 'CodeMaster', avatarUrl: getImg('1535713875002-d1d0cf377fde', 100, 100), isLive: true, category: 'Tech' },
  { id: 'u4', username: 'DesertLife', avatarUrl: getImg('1527980965255-d3b416303d12', 100, 100), isLive: false },
  { id: 'u5', username: 'SpeedDemon', avatarUrl: getImg('1570295999919-56ceb5ecca61', 100, 100), isLive: true, category: 'Retro' },
  { id: 'u6', username: 'ChefDaily', avatarUrl: getImg('1580489944761-15a19d654956', 100, 100), isLive: false },
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Just Chatting', imageUrl: getImg('1529156069898-49953e39b3ac', 300, 400), totalViewers: 15400, tags: ['IRL', 'Talk'] },
  { id: 'c2', name: 'Gaming', imageUrl: getImg('1542751371-adc38448a05e', 300, 400), totalViewers: 52000, tags: ['FPS', 'RPG'] },
  { id: 'c3', name: 'Music', imageUrl: getImg('1511671782779-c97d3d27a1d4', 300, 400), totalViewers: 8900, tags: ['Live', 'Performance'] },
  { id: 'c4', name: 'Art', imageUrl: getImg('1513364776144-60967b0f800f', 300, 400), totalViewers: 3200, tags: ['Creative', 'Drawing'] },
  { id: 'c5', name: 'Sports', imageUrl: getImg('1518611012118-696072aa8795', 300, 400), totalViewers: 12500, tags: ['Football', 'Live'] },
  { id: 'c6', name: 'Tech & Dev', imageUrl: getImg('1517694712202-14dd9538aa97', 300, 400), totalViewers: 4500, tags: ['Coding', 'Gadgets'] },
];

export const MOCK_STREAMS: Stream[] = [
  {
    id: 's1',
    title: 'Late Night Ranked Games to Challenger 🎮',
    thumbnailUrl: getImg('1542751371-adc38448a05e'), // Gaming Setup
    viewerCount: 12503,
    user: MOCK_USERS[0],
    category: 'Gaming',
    tags: ['English', 'Competitive'],
    startedAt: '2023-10-27T18:00:00Z'
  },
  {
    id: 's2',
    title: 'Chill vibes & talking with chat 💬',
    thumbnailUrl: getImg('1511632765486-a01980e01a18'), // People talking
    viewerCount: 843,
    user: MOCK_USERS[1],
    category: 'IRL',
    tags: ['Travel', 'Outdoors'],
    startedAt: '2023-10-27T19:30:00Z'
  },
  {
    id: 's3',
    title: 'Building a React App from scratch ⚛️',
    thumbnailUrl: getImg('1555099962-4199c345e5dd'), // Code Screen
    viewerCount: 2300,
    user: MOCK_USERS[2],
    category: 'Tech',
    tags: ['Programming', 'Educational'],
    startedAt: '2023-10-27T16:00:00Z'
  },
  {
    id: 's4',
    title: 'Retro Speedrun Any% World Record Pace ⏱️',
    thumbnailUrl: getImg('1551103771-3f66954e1f77'), // Retro TV
    viewerCount: 4500,
    user: MOCK_USERS[4],
    category: 'Retro',
    tags: ['Speedrun', 'Classic'],
    startedAt: '2023-10-27T20:00:00Z'
  },
  {
    id: 's5',
    title: 'Live DJ Set - Deep House & Techno 🎵',
    thumbnailUrl: getImg('1470225620780-dba8ba36b745'), // Club DJ
    viewerCount: 780,
    user: { ...MOCK_USERS[3], isLive: true, category: 'Music' },
    category: 'Music',
    tags: ['Party', 'NoCopyright'],
    startedAt: '2023-10-27T21:00:00Z'
  },
  {
    id: 's6',
    title: 'Making the spiciest noodles ever! 🍜',
    thumbnailUrl: getImg('1556910103-1c02745a30bf'), // Food
    viewerCount: 120,
    user: { ...MOCK_USERS[5], isLive: true, category: 'Food' },
    category: 'Food',
    tags: ['Cooking', 'Spicy'],
    startedAt: '2023-10-27T20:45:00Z'
  }
];

export const MOCK_CHAT_MESSAGES = [
  { id: 'm1', user: 'Viewer123', text: 'PogChamp!', color: '#ff4d4d' },
  { id: 'm2', user: 'JacoFan', text: 'This stream looks amazing', color: '#7c3aed' },
  { id: 'm3', user: 'NightBot', text: 'Welcome to the stream! Follow the rules.', color: '#adadb8' },
  { id: 'm4', user: 'GamerX', text: 'What game is this?', color: '#facc15' },
  { id: 'm5', user: 'Newbie', text: 'Hello everyone from Brazil!', color: '#4ADE80' },
];

export const NAV_LINKS = [
  { name: 'Browse', path: '/browse' },
  { name: 'Following', path: '/following' },
  { name: 'Music', path: '/music' },
  { name: 'Esports', path: '/esports' },
];
