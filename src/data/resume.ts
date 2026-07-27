export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  tech?: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'hardware' | 'web' | 'circuit' | 'tools';
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
  avatar?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'xiaoLiu',
  title: '电子信息工程 · 本科在读',
  email: '1461507618@qq.com',
  location: '广东江门',
  website: '',
  github: 'https://github.com/ahwish120',
  linkedin: '',
  bio: '不断进步！',
};

export const experiences: Experience[] = [
  {
    id: 'exp-5',
    company: '个人作品集网站',
    position: '个人项目 · 全栈开发',
    period: '2026.06',
    description: [
      '从零搭建了一个响应式个人作品集网站，使用 React 19 + TypeScript + Vite 8 技术栈构建',
      '采用 Tailwind CSS v4 实现暗黑科技风 UI，包含玻璃拟态卡片、霓虹渐变文字、粒子动画背景等视觉效果',
      '使用 Framer Motion 实现流畅的页面过渡与交互动画，包括悬浮动画、滚动触发动画等',
      '集成 React Router v7 实现多页面路由，适配 HashRouter 部署至 GitHub Pages',
      '涵盖首页、简历、作品集（含项目详情页）、个人爱好四大模块，支持桌面端与移动端自适应布局',
      '使用 Claude Code AI 辅助开发全流程，包括架构设计、组件开发、样式调整与自动化部署',
    ],
    tech: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4', 'Framer Motion', 'React Router v7', 'GitHub Pages'],
  },
  {
    id: 'exp-1',
    company: '十字旋转 LED 悬浮显示系统',
    position: '项目负责 · 硬件开发',
    period: '2025.03 - 2025.06',
    description: [
      '基于视觉暂留原理，采用 STC8H1K28 单片机为主控，设计实现具备无线供电、红外同步功能的三维悬浮显示装置',
      '负责系统方案设计、硬件电路搭建与核心代码开发，完成整机联调与测试',
      '解决旋转画面偏移问题，实现稳定清晰的悬浮显示效果',
    ],
    tech: ['STC8H1K28', 'Proteus', 'C语言', '无线供电', '红外同步'],
  },
  {
    id: 'exp-4',
    company: '塔罗牌占卜应用',
    position: '个人项目 · 独立开发',
    period: '2025.09 - 2025.12',
    description: [
      '开发了一款暗黑神秘风格的塔罗牌占卜网页应用，支持 5 种不同牌阵布局',
      '集成 AI 解读功能，配合精美的卡牌动画和氛围音效',
      '为用户提供沉浸式的在线占卜体验',
    ],
    tech: ['JavaScript', 'CSS', 'HTML5', 'AI 集成'],
  },
  {
    id: 'exp-2',
    company: '基于物理引擎的互动游戏',
    position: '个人项目 · 独立开发',
    period: '2024.09 - 2024.12',
    description: [
      '使用 HTML5 Canvas 与 Matter.js 物理引擎构建的一款弹弓投石类休闲游戏',
      '实现拖拽瞄准、弹道模拟、碰撞检测等功能，操作流畅自然',
      '支持鼠标与触屏双端交互，适配 PC 和移动设备',
    ],
    tech: ['HTML5 Canvas', 'Matter.js', 'JavaScript'],
  },
  {
    id: 'exp-3',
    company: '"三下乡"百千万工程',
    position: '实践服务负责人',
    period: '2024.07 - 2024.08',
    description: [
      '作为"百千万工程"实践服务负责人之一，带领团队深入乡镇，开展夏令营宣传、便民服务、教育实践等活动',
      '负责活动策划、教育讲解，与当地工作人员沟通协调工作',
      '荣获一星级义工、院级优秀志愿者称号',
    ],
    tech: ['团队协作', '活动策划', '教育实践'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    school: '五邑大学',
    degree: '电子信息工程 · 本科在读',
    period: '2023.09 - 2027.06',
    description: '核心课程：单片机原理、C 语言程序设计、数字电子技术、模拟电子技术、信号与系统等电子信息类相关课程。',
  },
];

export const skills: Skill[] = [
  { name: 'STM51 单片机开发', level: 90, category: 'hardware' },
  { name: 'C 语言编程', level: 85, category: 'hardware' },
  { name: '嵌入式系统开发', level: 80, category: 'hardware' },
  { name: 'Proteus 电路仿真', level: 75, category: 'hardware' },

  { name: 'React 19 + TypeScript', level: 80, category: 'web' },
  { name: 'Tailwind CSS v4', level: 78, category: 'web' },
  { name: 'Vite + GitHub Pages', level: 75, category: 'web' },
  { name: 'AI 工具链开发', level: 78, category: 'web' },

  { name: 'Altium Designer', level: 80, category: 'circuit' },
  { name: '嘉立创 EDA', level: 78, category: 'circuit' },
  { name: '模电/数电基础', level: 85, category: 'circuit' },
  { name: 'PCB 设计', level: 75, category: 'circuit' },

  { name: '示波器/万用表等仪器', level: 88, category: 'tools' },
  { name: '焊接技术', level: 82, category: 'tools' },
  { name: 'ClaudeCode AI 工作流', level: 80, category: 'tools' },
  { name: 'HTML5 Canvas', level: 70, category: 'tools' },
];
