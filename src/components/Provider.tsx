import type { HostingProvider, ProviderType } from "@site/src/types/providers";
import ReactMarkdown from "react-markdown";
import Admonition from '@theme/Admonition';
import React, { useState } from 'react';
import Translate from "@docusaurus/Translate";
import { providersData } from "../data/providers";

export const noP = (props: { children: any; }) => {
    const { children } = props;
    return children;
}

export const Provider = ({ type }) => {
    const hostingProviders: HostingProvider[] = providersData[type as ProviderType]

    return (
        <div>
            <ul>{hostingProviders.map((provider: HostingProvider) => (
                <li>
                    <a href={provider.url}>{provider.name}</a>
                    {provider.description != null ? (
                        <ReactMarkdown children={`&nbsp;&hyphen; ${provider.description}`} components={{ p: noP }} />
                    ) : (
                        ''
                    )}
                </li>
            ))}</ul>
        </div>
    )
}

export const ProviderSelector = () => {
    const providers: HostingProvider[] = [
        ...Object.values(providersData.built_in),
        ...Object.values(providersData.support), 
        ...Object.values(providersData.no_support)
    ].flat().sort((a, b) => a.name.localeCompare(b.name));
    

    const [selectedProvider, setSelectedProvider] = useState(null);

    const handleSelectionChange = (event) => {
        const selectedName = event.target.value;
        const provider = providers.find(p => p.name === selectedName);
        setSelectedProvider(provider);
    }

    return (
        <div className="host-select">
            <select onChange={handleSelectionChange}>
                <option value="none">Select a provider</option>
                {providers.map((provider) => (
                    <option key={provider.name} value={provider.name}>
                        {provider.name}
                    </option>
                ))}
            </select>
            <Admonition type="tip" title={<Translate id='providers.instructions'>Provider Instructions</Translate>}>
                {selectedProvider ? (
                    <ReactMarkdown>{selectedProvider.description}</ReactMarkdown>
                ) : (
                    <p>
                        <Translate id='providers.select'>Select a provider to see specific installation instructions</Translate>
                    </p>
                )}
            </Admonition>
        </div>
    );
}
