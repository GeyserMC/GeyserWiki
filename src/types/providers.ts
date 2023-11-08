export type HostingProvider = {
  name: string;
  url: string;
  description?: string;
  description_template?: "default" | "ip_and_port" | "forwarding_option" | "java_ip";
}

export type ProviderType = "built_in" | "support" | "no_support";

export type Providers = {
  description_templates: {
    default: string;
    ip_and_port: string;
    forwarding_option: string;
    java_ip: string;
  },
  built_in: HostingProvider[];
  support: HostingProvider[];
  no_support: HostingProvider[];
}
