import React from "react";

export type HostingProvider = {
    name: string;
    url: string;
    description: React.ReactNode;
}

export type ProviderType = "built_in" | "support" | "no_support";

export type Providers = {
    built_in: HostingProvider[];
    support: HostingProvider[];
    no_support: HostingProvider[];
}
