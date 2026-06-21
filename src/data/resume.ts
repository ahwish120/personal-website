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
  category: 'frontend' | 'backend' | 'tools' | 'other';
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
  name: 'Alex Chen',
  title: '全栈工程师 / Full-Stack Developer',
  email: 'alex.chen@example.com',
  location: '上海，中国',
  website: 'https://alexchen.dev',
  github: 'https://github.com/alexchen',
  linkedin: 'https://linkedin.com/in/alexchen',
  bio: '热爱技术，专注于构建优雅且高性能的 Web 应用。5 年全栈开发经验，擅长 React 生态和 Node.js 后端开发，对开源充满热情，相信技术可以让世界变得更美好。',
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechVision 科技有限公司',
    position: '高级前端工程师',
    period: '2023.03 - 至今',
    description: [
      '主导公司核心产品的前端架构重构，从 Vue 2 迁移至 React 18 + TypeScript',
      '搭建组件库和设计系统，提升团队开发效率 40%',
      '优化 Webpack 构建流程，构建时间从 8 分钟降至 2 分钟',
      '带领 5 人前端团队，制定代码规范和 Code Review 流程',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
  },
  {
    id: 'exp-2',
    company: 'DataFlow 数据平台',
    position: '全栈开发工程师',
    period: '2020.07 - 2023.02',
    description: [
      '从零搭建公司数据可视化平台，服务超过 10 万用户',
      '设计并实现 RESTful API 和 WebSocket 实时数据推送',
      '使用 AWS 服务构建弹性可扩展的后端架构',
      '开发自动化测试框架，将代码覆盖率从 20% 提升至 85%',
    ],
    tech: ['Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'exp-3',
    company: '创新互联网工作室',
    position: '前端开发实习生',
    period: '2019.06 - 2020.06',
    description: [
      '参与多个企业官网和小程序的开发',
      '学习和实践响应式设计与移动端适配',
      '使用 Git 进行团队协作和版本管理',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'React', '微信小程序'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    school: '上海交通大学',
    degree: '计算机科学与技术 · 本科',
    period: '2016.09 - 2020.06',
    description: '主修计算机科学，辅修数字媒体艺术。GPA 3.7/4.0，获得校级奖学金。毕业论文：《基于 React 的组件化数据可视化方案》。',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },

  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'GraphQL', level: 72, category: 'backend' },
  { name: 'Redis', level: 70, category: 'backend' },
  { name: 'Docker', level: 75, category: 'backend' },

  { name: 'Git', level: 92, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Figma', level: 68, category: 'tools' },
  { name: 'CI/CD', level: 78, category: 'tools' },
];
