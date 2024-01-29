import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'GeyserMC',
    tagline: 'Meowing strictly prohibited',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://wiki.geysermc.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'GeyserMC', // Usually your GitHub org/user name.
    projectName: 'GeyserWiki', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/GeyserMC/Geyser/tree/main/',

                    routeBasePath: '/', // Serve the docs at the site's root
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'GeyserMC',
            logo: {
                alt: 'GeyserMC logo',
                src: 'img/apple-touch-icon.png',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Wiki',
                    position: 'right',
                    to: 'geyser/setup',
                    items: [
                        {
                            type: 'doc',
                            docId: 'geyser/setup',
                            label: 'Geyser',
                        },
                        {
                            type: 'doc',
                            docId: 'floodgate/setup',
                            label: 'Floodgate',
                        },
                        {
                            type: 'doc',
                            docId: 'other/geyseroptionalpack',
                            label: 'Other',
                        },
                    ]
                },
                {
                    to: 'download',
                    'aria-label': 'Download',
                    position: 'right',
                    className: 'header-download-link'
                },
                {
                    href: 'https://github.com/GeyserMC/Geyser',
                    'aria-label': 'GitHub',
                    position: 'right',
                    className: 'header-github-link'
                },
                {
                    href: 'https://discord.gg/geysermc',
                    'aria-label': 'Discord',
                    position: 'right',
                    className: 'header-discord-link'
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
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
                            label: 'GitHub',
                            href: 'https://github.com/GeyserMC/Geyser',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['bash', 'batch', 'java'],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
