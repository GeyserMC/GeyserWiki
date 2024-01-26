import type { Providers, HostingProvider, ProviderType } from "@site/src/types/providers";
import ReactMarkdown from "react-markdown";
import Admonition from '@theme/Admonition';
import React, { useState } from 'react';

export const noP = (props: { children: any; }) => {
    const { children } = props;
    return children;
}

export const Provider = ({ type }) => {
    const data: Providers = require('@site/_data/providers.json')
    const providers: HostingProvider[] = data[type as ProviderType]

    console.log(data, type, providers)

    return (
        <div>
            <ul>{providers.map((provider: HostingProvider) => (
                <li>
                    <a href={provider.url}>{provider.name}</a>
                    {provider.description != null || provider.description_template != null ? (
                        <ReactMarkdown children={`&nbsp;&hyphen; ${data.description_templates[provider.description_template] || ''} ${provider.description || ''}`} components={{ p: noP }} />
                    ) : (
                        ''
                    )}
                </li>
            ))}</ul>
        </div>
    )
}

export const ProviderSelector = () => {
    const data: Providers = require('@site/_data/providers.json')
    const providers: HostingProvider[] = [
        ...Object.values(data.built_in), 
        ...Object.values(data.support), 
        ...Object.values(data.no_support)
    ].flat();

    // update providers if description_template is set
    providers.forEach((provider) => {
        if (provider.description_template != null) {
            provider.description = data.description_templates[provider.description_template]
        }
    })
    

    const [selectedProvider, setSelectedProvider] = useState(null);

    const handleSelectionChange = (event) => {
        const selectedName = event.target.value;
        const provider = providers.find(p => p.name === selectedName);
        setSelectedProvider(provider);
    }

    return (
        <div>
            <select onChange={handleSelectionChange}>
                <option value="none">Select a provider</option>
                {providers.map((provider) => (
                    <option key={provider.name} value={provider.name}>
                        {provider.name}
                    </option>
                ))}
            </select>
            <Admonition type="info">
                {selectedProvider ? (
                    <ReactMarkdown>{selectedProvider.description}</ReactMarkdown>
                ) : (
                    <p>Select a provider to see the description</p>
                )}
            </Admonition>
        </div>
    );
}
