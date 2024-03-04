export namespace Downloads {
    export interface Builds {
        project_id: string;
        project_name: string;
        version: string;
        builds: Build[];
    }
    export interface BaseBuild {
        build: number;
        time: string;
        channel: string;
        promoted: boolean;
        changes: {
            commit: string;
            summary: string;
            message: string;
        }[];
        downloads: {
            [key: string]: {
                name: string;
                sha256: string;
            };
        };
    }
    export interface Build extends BaseBuild {
        project_id: string;
        project_name: string;
        version: string;
    }
}