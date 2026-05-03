// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StressGuard',
  tagline: 'Умный фитнес-трекер с детекцией эмоционального состояния',
  favicon: 'img/favicon.ico',

  // future: {
  //   v4: true,
  // },

  url: 'https://AA8X8.github.io',
  baseUrl: '/stress-guard/',

  organizationName: 'AA8X8',
  projectName: 'stress-guard',

  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/AA8X8/stress-guard/edit/main/my-website/',
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'stressguard',
            spec: 'api-specs/stressguard-openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'StressGuard',
        logo: {
          alt: 'StressGuard Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'О проекте',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '/docs/08-api-part1/01-api-spec',
            label: 'API',
            position: 'left',
          },
          {
            href: 'https://github.com/AA8X8/stress-guard',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Карточка сервиса',
                to: '/docs/intro',
              },
              {
                label: 'Архитектура',
                to: '/docs/07-architecture/01-architecture',
              },
              {
                label: 'API Reference',
                to: '/docs/08-api-part1/01-api-spec'
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/AA8X8/stress-guard/issues',
              },
            ],
          },
          {
            title: 'Ресурсы',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AA8X8/stress-guard',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StressGuard. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;