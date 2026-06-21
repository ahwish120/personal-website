import { Code, Camera, Music, Plane, BookOpen, Gamepad2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  color: string;
  details: string[];
  image?: string;
}

export const hobbies: Hobby[] = [
  {
    id: 'hobby-1',
    title: '开源贡献',
    description: '热衷于参与开源项目，在 GitHub 上贡献代码、修复 Bug 和编写文档。',
    icon: 'Code',
    color: '#00d4ff',
    details: [
      '为 React 官方文档贡献了 3 个 PR',
      '维护一个拥有 500+ Star 的 Vue 组件库',
      '参与 Hacktoberfest 连续三年完成挑战',
      'GitHub 年度代码提交超过 1000 次',
    ],
  },
  {
    id: 'hobby-2',
    title: '摄影',
    description: '用镜头捕捉生活中的光影瞬间，喜欢街头摄影和风景摄影。',
    icon: 'Camera',
    color: '#ff2d95',
    details: [
      '拥有 Sony A7M4 + 24-70mm f/2.8 GM II',
      '在 500px 上发布了 200+ 张作品',
      '最喜欢的题材：城市建筑和自然风光',
      '2023 年完成了一个 365 天每日一拍的挑战',
    ],
  },
  {
    id: 'hobby-3',
    title: '音乐与吉他',
    description: '弹了 8 年吉他，喜欢民谣和指弹风格，偶尔也会自己写歌。',
    icon: 'Music',
    color: '#7b2ff7',
    details: [
      '最擅长的曲目：《风之诗》、《黄昏》、《奇迹的山》',
      '拥有一把 Martin D-28 和 Taylor 814ce',
      '在 B 站发布翻弹视频，累计 2 万播放',
      '2024 年计划录制第一张个人指弹 EP',
    ],
  },
  {
    id: 'hobby-4',
    title: '旅行',
    description: '喜欢探索不同的城市和文化，用脚步丈量世界。',
    icon: 'Plane',
    color: '#00ff88',
    details: [
      '已去过 12 个国家，30+ 个城市',
      '最喜欢的目的地：京都、巴塞罗那、清迈',
      '每次都带着相机记录旅行故事',
      '下一个目标：冰岛环岛自驾游',
    ],
  },
  {
    id: 'hobby-5',
    title: '阅读',
    description: '保持阅读习惯，每月至少读一本书，涵盖技术、小说和人文。',
    icon: 'BookOpen',
    color: '#ff9500',
    details: [
      '2024 年阅读目标：30 本书',
      '最近在读：《架构整洁之道》、《人类简史》',
      '喜欢在 Notion 上做读书笔记',
      '技术类书籍偏好：系统设计和编程语言',
    ],
  },
  {
    id: 'hobby-6',
    title: '独立游戏',
    description: '玩独立游戏是放松方式，也从中学习游戏设计和交互体验。',
    icon: 'Gamepad2',
    color: '#ff4444',
    details: [
      '最近沉迷：《Hades II》、《Celeste》、《Stray》',
      '拥有 Nintendo Switch 和 Steam Deck',
      '写过几篇游戏设计分析文章',
      '梦想有一天自己开发一款独立游戏',
    ],
  },
];

// Map icon name strings to actual Lucide components
export { Code, Camera, Music, Plane, BookOpen, Gamepad2 };

export const iconMap: Record<string, LucideIcon> = {
  Code,
  Camera,
  Music,
  Plane,
  BookOpen,
  Gamepad2,
};
