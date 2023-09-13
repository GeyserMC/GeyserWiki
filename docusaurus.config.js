// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'GeyserMC Wiki',
  tagline: "This is the wiki for all of GeyserMC's projects.",
  favicon: 'img/favicon.ico',
  url: 'https://wiki.geysermc.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/GeyserMC/GeyserWiki/blob/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
  themeConfig: ({
    colorMode: {
      respectPrefersColorScheme: true
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GeyserMC Wiki',
      logo: {
        alt: 'GeyserMC Logo',
        src: 'img/favicon.ico'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'geyser',
          position: 'left',
          label: 'Geyser'
        },
        {
          type: 'docSidebar',
          sidebarId: 'floodgate',
          position: 'left',
          label: 'Floodgate'
        },
        {
          type: 'docSidebar',
          sidebarId: 'other',
          position: 'left',
          label: 'Other'
        },
        {
          href: 'https://discord.gg/GeyserMC',
          className: 'header-icon-link header-discord-link',
          position: 'right'
        },
        {
          href: 'https://github.com/GeyserMC',
          className: 'header-icon-link header-github-link',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} GeyserMC. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java', 'batch', 'bash']
    }
  })
}

module.exports = config
