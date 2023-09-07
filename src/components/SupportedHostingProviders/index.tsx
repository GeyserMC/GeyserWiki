import React from "react";
import providersData from "@site/data/providers.json";

interface Props {
    section: Exclude<keyof typeof providersData, "description_templates">;
}

const SupportedHostingProviders = ({ section }: Props) => {
    return (
        <ul>
            {providersData[section].map(provider => (
                <li>
                    <a href={provider.url}>{provider.name}</a>
                    {(provider.description || provider.description_template) && (
                        <span>
                            {" - "}
                            {provider.description_template &&
                                providersData.description_templates[provider.description_template]}
                            {provider.description}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default SupportedHostingProviders;