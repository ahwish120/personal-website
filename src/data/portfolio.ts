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
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'CloudBoard - 云端协作白板',
    description: '实时多人协作白板应用，支持绘图、便签、文档和视频会议。',
    longDescription: '一个功能丰富的实时协作白板平台，支持多人同时在线编辑。集成了 Excalidraw 绘图引擎、TipTap 富文本编辑器、WebRTC 视频通话和 Liveblocks 实时同步。使用 Next.js 构建，部署在 Vercel 边缘网络。',
    image: '',
    category: 'fullstack',
    tech: ['Next.js', 'TypeScript', 'Liveblocks', 'WebRTC', 'Tailwind CSS', 'Prisma'],
    githubUrl: 'https://github.com/alexchen/cloudboard',
    liveUrl: 'https://cloudboard-demo.vercel.app',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'PixelForge - AI 图片编辑器',
    description: '基于 AI 的智能图片编辑工具，支持背景移除、图片增强和风格迁移。',
    longDescription: '利用 Web ML 模型和 Stable Diffusion API 构建的智能图片编辑应用。支持一键抠图、超分辨率重建、老照片修复和多种艺术风格转换。所有 AI 处理在浏览器端完成，保护用户隐私。',
    image: '',
    category: 'frontend',
    tech: ['React', 'TensorFlow.js', 'WebGL', 'Canvas API', 'IndexedDB'],
    githubUrl: 'https://github.com/alexchen/pixelforge',
    liveUrl: 'https://pixelforge.app',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'DevMetrics - 开发者分析面板',
    description: '面向开发团队的效率分析仪表盘，整合 GitHub、Jira、Linear 数据。',
    longDescription: '聚合多个开发工具的数据，为团队提供可视化的效率指标和趋势分析。包括代码提交统计、PR 审查周期、Issue 解决速度、Sprint 燃尽图等功能。支持自定义报表和 Slack 通知。',
    image: '',
    category: 'fullstack',
    tech: ['React', 'Node.js', 'D3.js', 'PostgreSQL', 'Redis', 'OAuth 2.0'],
    githubUrl: 'https://github.com/alexchen/devmetrics',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Mini-RPC - 轻量级 RPC 框架',
    description: '基于 Netty 和 Zookeeper 的轻量级 Java RPC 框架，支持服务注册与发现。',
    longDescription: '一个学习性质的轻量级 RPC 框架实现，包含服务注册中心、动态代理、负载均衡、序列化协议等核心模块。使用 SPI 机制实现可插拔扩展。',
    image: '',
    category: 'backend',
    tech: ['Java', 'Netty', 'Zookeeper', 'Protobuf', 'SPI'],
    githubUrl: 'https://github.com/alexchen/mini-rpc',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'WeatherVue - 天气可视化',
    description: '精美的天气应用，支持 7 天预报、空气质量指数和气象雷达图。',
    longDescription: '基于 OpenWeatherMap API 的天气应用，使用 Canvas 和 D3.js 实现动态天气动画和交互式气象图表。支持地理定位、多城市收藏和极端天气预警推送。',
    image: '',
    category: 'frontend',
    tech: ['Vue 3', 'D3.js', 'Canvas', 'PWA', 'WebSocket'],
    githubUrl: 'https://github.com/alexchen/weathervue',
    liveUrl: 'https://weathervue.netlify.app',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'BlogNest - 极速博客平台',
    description: '面向开发者的 Markdown 博客平台，支持自定义主题和 RSS。',
    longDescription: '一个高性能的静态博客生成器，支持 Markdown/MDX 写作，内置代码高亮、数学公式、Giscus 评论系统。使用 Astro 构建，Lighthouse 满分。',
    image: '',
    category: 'fullstack',
    tech: ['Astro', 'MDX', 'Tailwind CSS', 'RSS', 'Giscus'],
    githubUrl: 'https://github.com/alexchen/blognest',
    liveUrl: 'https://blognest.blog',
    featured: false,
  },
];

export const categories = [
  { key: 'all', label: '全部项目' },
  { key: 'frontend', label: '前端' },
  { key: 'backend', label: '后端' },
  { key: 'fullstack', label: '全栈' },
] as const;

export type CategoryKey = (typeof categories)[number]['key'];
