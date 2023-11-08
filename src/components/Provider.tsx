import type {Providers, HostingProvider, ProviderType} from "@site/src/types/providers";
import ReactMarkdown from "react-markdown";

export const noP = (props: { children: any; }) => {
  const { children } = props;
  return children;
}

export const Provider = ({type}) => {
  const data: Providers = require('@site/_data/providers.json')
  const providers: HostingProvider[] = data[type as ProviderType]

  console.log(data, type, providers)

  return (
    <div>
      <ul>{providers.map((provider: HostingProvider) => (
        <li>
          <a href={provider.url}>{provider.name}</a>
          {provider.description != null || provider.description_template != null ? (
            <ReactMarkdown children={`&nbsp;&hyphen; ${data.description_templates[provider.description_template] || ''} ${provider.description || ''}`} components={{p: noP}} />
          ) : (
            ''
          )}
        </li>
      ))}</ul>
    </div>
  )
}
