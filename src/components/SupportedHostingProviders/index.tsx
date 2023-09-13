import React from 'react'
import providersData from '@site/data/providers.json'

interface Props {
  section: Exclude<keyof typeof providersData, 'description_templates'>
}

const SupportedHostingProviders = ({ section }: Props): JSX.Element => {
  return (
    <ul>
      {providersData[section].map((provider, id) => (
        <li key={id}>
          <a href={provider.url}>{provider.name}</a>
          {(provider.description != null || provider.description_template != null) && (
            <span>
              {' - '}
              {provider.description_template != null && providersData.description_templates[provider.description_template]}
              {provider.description}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default SupportedHostingProviders
