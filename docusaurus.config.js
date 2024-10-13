// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LadysVoa',
  tagline: 'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://lbykoo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lbykoo', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [ 'en','zh-Hans', 'zh-Hant','es','fr','ru','pt-br','ko','ja'],
    localeConfigs: {     
      // 如果不需要重写默认值，可以忽略 locale (例如 fr)
      en: {
        htmlLang: 'en-GB',
        path: 'en',
      },
      'zh-Hans': {
        htmlLang: 'zh-CN',
        path: 'zh-Hans',
      },
      'zh-Hant': {
        htmlLang: 'zh-TW',
      },
      'es': {
        htmlLang: 'es',
      },
      'fr': {
        htmlLang: 'fr',
      },
      'ru': {
        htmlLang: 'ru',
      },      
      'pt-br': {
        htmlLang: 'pt-BR',
      },
      'ko': {
        htmlLang: 'ko-KR',
      },
      'ja': {
        htmlLang: 'ja',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
           // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        gtag: {
          trackingID: 'G-FD3SE5PEL4',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-597RJSNZ',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        routeBasePath: 'news', 
        path: 'news', 
        blogTitle: 'News', 
        blogDescription: `Here, we bring you the latest global news highlights, in-depth reports, and exclusive insights! Whether it's fashion trends, technological innovations, workplace dynamics, or the rise of women's power, we'll guide you in interpreting those moments that are changing the world in real time.`, 
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'ask',
        routeBasePath: 'ask', 
        path: 'ask', 
        blogTitle: 'Q&A', 
        blogDescription: `Here, there are no 'stupid' questions, only great conversations! Whether you want to learn about career tips, life hacks, or insightful perspectives on women's growth, we're happy to provide the answers!`, 
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'health',
        routeBasePath: 'health', 
        path: 'health', 
        blogTitle: 'Health', 
        blogDescription: `Whether you're looking for fitness inspiration, nutrition guides, or practical tips for mental health, we've got plenty of content for you! From energizing workout plans to easy and delicious healthy recipes, everything here is designed to help you stay healthy, strong, and happy.`, 
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'parenting',
        routeBasePath: 'parenting', 
        path: 'parenting', 
        blogTitle: 'Parenting', 
        blogDescription: `Fostering children's independence, confidence, and spirit of exploration. Here, you'll find the most comprehensive, scientific, and authoritative parenting guide to help you raise an exceptional child.`, 
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'celebrities',
        routeBasePath: 'celebrities', 
        path: 'celebrities', 
        blogTitle: 'Celebrities', 
        blogDescription: `Fostering children's independence, confidence, and spirit of exploration. Here, you'll find the most comprehensive, scientific, and authoritative parenting guide to help you raise an exceptional child.`, 
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'info', 
        path: 'info', 
        routeBasePath: 'info',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'library', 
        path: 'library', 
        routeBasePath: 'library',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sharing', 
        path: 'sharing', 
        routeBasePath: 'sharing',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'music', 
        path: 'music', 
        routeBasePath: 'music',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'video', 
        path: 'video', 
        routeBasePath: 'video',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LadysVoa',
        logo: {
          alt: 'LadysVoa Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/news', label: 'News', position: 'left'},
          {to: '/ask', label: 'Q&A', position: 'left'},
          {to: '/health', label: 'Health', position: 'left'},
          {to: '/parenting', label: 'Parenting', position: 'left'},
          {to: '/celebrities', label: 'Celebrities', position: 'left'},
          {to: '/sharing', label: 'Knowledge Sharing', position: 'left'},
          {to: '/library', label: 'Library', position: 'left'},                 
          {to: '/music', label: 'Music', position: 'left'},                 
          {to: '/video', label: 'Video', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'About',
                to: '/info/site-info/about',
              },
              {
                label: 'Privacy Policy',
                to: '/info/site-info/privacy-policy',
              },
              {
                label: 'FAQ',
                to: '/info/site-info/faq',
              },
              {
                label: 'Contact Us',
                to: '/info/site-info/contact',
              },
              {
                label: 'Advertise with us',
                to: '/info/site-info/ads',
              },
            ],
          },
          {
            title: 'Submission Entrance',
            items: [
              {
                label: 'Significance of Submissions',
                to: '/info/submission/significance-of-submissions',
              },
              {
                label: 'Submission Rules',
                to: '/info/submission/submission-rules',
              },
              {
                label: 'Submit prerequisites',
                to: '/info/submission/submit-prerequisites',
              },
              {
                label: 'How to Submit',
                to: '/info/submission/how-to-submit',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright 2024 <a href="/">LadysVoa</a> All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia:{
        contextualSearch: true,
        apiKey: 'bd81fe91b8f9f8fc192a27d8da80ce9a',
        indexName: 'ladys', 
        appId: '78CUPFXA1P',
      },
    }),
};

export default config;
