/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  geyser: [
    'geyser/README',
    {
      type: 'category',
      label: 'Setting up Geyser',
      link: {
        type: 'generated-index'
      },
      items: [
        // "geyser/setup",
        'geyser/supported-hosting-providers',
        'geyser/using-geyser-with-consoles',
        'geyser/playit-gg',
        'geyser/creating-a-startup-script'
      ]
    },
    {
      type: 'category',
      label: 'Common Issues',
      link: {
        type: 'generated-index'
      },
      items: [
        'geyser/common-issues',
        'geyser/fixing-unable-to-connect-to-world'
      ]
    },
    {
      type: 'category',
      label: 'Configuring Geyser',
      link: {
        type: 'generated-index'
      },
      items: [
        'geyser/understanding-the-config',
        'geyser/commands',
        'geyser/geyser-command-line-arguments-and-system-properties'
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'generated-index'
      },
      items: [
        'geyser/faq',
        'geyser/anticheat-compatibility',
        'geyser/current-limitations'
      ]
    },
    'geyser/custom-items',
    'geyser/custom-blocks',
    'geyser/custom-skulls',
    {
      type: 'category',
      label: 'Geyser API',
      link: {
        type: 'generated-index'
      },
      items: [
        'geyser/getting-started-with-the-api',
        'geyser/api',
        'geyser/events',
        'geyser/forms'
      ]
    },
    'geyser/extensions',
    'geyser/global-api'
  ],

  floodgate: [
    'floodgate/README',
    'floodgate/setup',
    'floodgate/issues',
    'floodgate/faq',
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index'
      },
      items: [
        'floodgate/features',
        'floodgate/commands'
      ]
    },
    {
      type: 'category',
      label: 'Floodgate API',
      link: {
        type: 'generated-index'
      },
      items: [
        'floodgate/player',
        'geyser/forms'
      ]
    },
    {
      type: 'category',
      label: 'Linking',
      link: {
        type: 'generated-index'
      },
      items: [
        'floodgate/linking'
      ]
    }
  ],

  other: [
    'other/README',
    'other/geyseroptionalpack',
    'other/hurricane',
    'other/geyserconnect',
    'other/community-geyser-projects',
    'other/test-server',
    'other/developer-guide',
    'other/discord-bot-usage'
  ]
}

module.exports = sidebars
