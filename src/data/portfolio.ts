export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  playUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'catapult-game',
    title: '投石问喜 🎯',
    description: '基于 Matter.js 物理引擎的弹弓投石类休闲游戏，拖拽瞄准、弹道模拟、碰撞检测。',
    longDescription: '使用 HTML5 Canvas 与 Matter.js 物理引擎构建的一款弹弓投石类休闲游戏。实现拖拽瞄准、弹道模拟、碰撞检测等核心玩法，操作流畅自然。支持鼠标与触屏双端交互，适配 PC 和移动设备。',
    image: 'catapult-game.png',
    category: 'frontend',
    tech: ['HTML5 Canvas', 'Matter.js', 'JavaScript'],
    githubUrl: 'https://github.com/ahwish120/catapult-game',
    playUrl: 'https://ahwish120.github.io/catapult-game/',
    featured: true,
  },
  {
    id: 'tarot-divination',
    title: '塔罗牌占卜 🔮',
    description: '功能完整的塔罗牌占卜网页应用，暗黑神秘风格，支持 5 种牌阵和 AI 解读。',
    longDescription: '一款暗黑神秘风格的塔罗牌占卜网页应用，功能完整且体验沉浸。支持 5 种不同牌阵布局，集成 AI 解读功能，配合精美的卡牌动画和氛围音效，为用户带来独特的占卜体验。',
    image: 'tarot-divination.png',
    category: 'frontend',
    tech: ['JavaScript', 'CSS', 'HTML5', 'AI 集成'],
    githubUrl: 'https://github.com/ahwish120/tarot-divination',
    playUrl: 'https://ahwish120.github.io/tarot-divination/',
    featured: true,
  },
];

export const categories = [
  { key: 'all', label: '全部项目' },
  { key: 'frontend', label: '前端' },
  { key: 'backend', label: '后端' },
  { key: 'fullstack', label: '全栈' },
] as const;

export type CategoryKey = (typeof categories)[number]['key'];
