import { Dumbbell, Camera, Music, Plane } from 'lucide-react';
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
    title: '运动',
    description: '在汗水中寻找多巴胺的快乐，让身体和代码一样充满能量。',
    icon: 'Dumbbell',
    color: '#00d4ff',
    details: [
      '每周坚持 4-5 次力量训练，保持体能在线',
      '热爱篮球，享受球场上的对抗与团队配合',
      '相信自律带来自由，运动是最好的解压方式',
    ],
  },
  {
    id: 'hobby-2',
    title: '摄影',
    description: '用镜头捕捉生活中的光影瞬间，喜欢街头摄影和风景摄影。',
    icon: 'Camera',
    color: '#ff2d95',
    details: ['最喜欢的题材：城市建筑和自然风光'],
  },
  {
    id: 'hobby-3',
    title: '音乐',
    description: '在民谣的叙事和粤语歌的细腻里，找到情绪的共鸣与出口。',
    icon: 'Music',
    color: '#7b2ff7',
    details: [
      '偏爱民谣和粤语歌曲，旋律里有故事和温度',
      '最喜欢的歌手：陈奕迅、张天赋（MC）',
      '常听曲目：《陀飞轮》《K歌之王》《反对无效》《世一》',
    ],
  },
  {
    id: 'hobby-4',
    title: '旅行',
    description: '喜欢探索不同的城市和文化，用脚步丈量世界。',
    icon: 'Plane',
    color: '#00ff88',
    details: [
      '已去过十多个城市',
      '最喜欢的目的地：重庆、贵州',
      '每次都带着相机记录旅行故事',
      '下一个目标：澳门',
    ],
  },
];

// Map icon name strings to actual Lucide components
export { Dumbbell, Camera, Music, Plane };

export const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Camera,
  Music,
  Plane,
};
