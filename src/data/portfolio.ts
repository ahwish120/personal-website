export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'hardware';
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  playUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'led-display',
    title: '十字旋转 LED 悬浮显示系统 💡',
    description: '基于视觉暂留（POV）原理的三维悬浮显示装置，STC8H1K28 主控，无线供电 + 红外同步，悬浮显示清晰稳定。',
    longDescription: '基于视觉暂留（POV）原理，采用 STC8H1K28 单片机为主控，设计实现具备无线供电、红外同步功能的三维悬浮显示装置。负责系统方案设计、硬件电路搭建与核心代码开发，完成整机联调与测试。解决了旋转画面偏移问题，实现稳定清晰的悬浮显示效果。',
    image: 'led-display-1.png',
    images: ['led-display-1.png', 'led-display-2.png'],
    category: 'hardware',
    tech: ['STC8H1K28', 'Proteus', 'C语言', '无线供电', '红外同步'],
    featured: true,
  },
  {
    id: 'catapult-game',
    title: '投石问喜 🎯',
    description: '基于 Matter.js 物理引擎的弹弓投石类休闲游戏，拖拽瞄准、弹道模拟、碰撞检测。',
    longDescription: '使用 HTML5 Canvas 与 Matter.js 物理引擎构建的一款弹弓投石类休闲游戏。实现拖拽瞄准、弹道模拟、碰撞检测等功能，操作流畅自然。支持鼠标与触屏双端交互，适配 PC 和移动设备。',
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
  { key: 'hardware', label: '硬件' },
] as const;

export type CategoryKey = (typeof categories)[number]['key'];
