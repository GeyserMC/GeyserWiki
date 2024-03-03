import { faFileArrowDown, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Downloads } from '../types/downloads';
import { Column, Columns } from './Columns';
import { Grid } from './Grid';

interface ProjectDownloadProps {
    projectId: string;
    description: string;
    setup?: string;
    downloadsInfo: {
        [key: string]: string;
    };
    gridColumns?: number;
}

export const ProjectDownload: React.FC<ProjectDownloadProps> = ({ projectId, description, setup, downloadsInfo, gridColumns }) => {
    const [platformInfo, setPlatformInfo] = useState<Downloads.Builds>({
        project_id: '',
        project_name: '',
        version: '',
        builds: []
    });

    const [latestBuild, setLatestBuild] = useState<Downloads.Build>({
        project_id: '',
        project_name: '',
        version: '',
        build: 0,
        time: new Date().toLocaleDateString(),
        channel: '',
        promoted: false,
        changes: [],
        downloads: {}
    });

    const [changes, setChanges] = useState<Downloads.BaseBuild['changes']>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchPlatformInfo = async () => {
            try {
                const response = await fetch(new URL(`/v2/projects/${projectId}/versions/latest/builds`, 'https://download.geysermc.org'));
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Downloads.Builds = await response.json();

                setPlatformInfo(data);
                setLatestBuild(data.builds[data.builds.length - 1]);

                const allChanges: Downloads.BaseBuild['changes'] = [];
                data.builds.forEach(build => {
                    allChanges.push(...build.changes);
                });
                setChanges(allChanges.reverse().slice(0, 12));
                setIsLoaded(true);
            } catch (error) {
                console.error('Failed to fetch platform info:', error);
            }
        };

        fetchPlatformInfo();
    }, [projectId]);

    const fadeInStyle = {
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <div style={fadeInStyle}>
            <p>{description}</p>
            <Columns>
                <Column>
                    <h3>Build #{latestBuild.build} · {new Date(latestBuild.time).toLocaleDateString()}:</h3>
                    <Grid elementsPerRow={gridColumns || 2} gap="8px">
                        { setup &&
                            <a href={setup} className='no-underline'>
                                <div className='setup-button'>
                                    <b>Setup Instructions</b><br/>
                                    <FontAwesomeIcon icon={faBook}/>
                                </div>
                            </a>
                        }
                        {
                            Object.keys(latestBuild.downloads).map((platformId, i) => {
                                return (
                                    <a href={`https://download.geysermc.org/v2/projects/${projectId}/versions/latest/builds/latest/downloads/${platformId}`} key={i} className='no-underline'>
                                        <div className='download-button'>
                                            <b>{downloadsInfo[platformId]}</b><br/>
                                            <FontAwesomeIcon icon={faFileArrowDown}/> {latestBuild.downloads[platformId].name}
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </Grid>
                </Column>
                <Column>
                    <h3>Recent Changes:</h3>
                    <ul>
                        {
                            changes.map((change, i) => {
                                return (
                                    <li key={i}><b>{
                                        <a className='download-link' href={`https://github.com/GeyserMC/${platformInfo.project_name}/commit/${change.commit}`}>{change.commit.substring(0, 7)}</a>
                                    }</b> · {<LinkedCommitMessage message={change.summary} repo={platformInfo.project_name}/>}</li>
                                )
                            })
                        }
                    </ul>
                </Column>
            </Columns>
        </div>
    );
};

function LinkedCommitMessage({ message, repo }) {
    const regex = /#(\d+)/g;
    const parts = message.split(/(#\d+)/).filter((part: string) => part);

    const linked = parts.map((part, index) => {
        if (part.match(regex)) {
            const number = part.replace('#', '');
            return <a key={index} href={`https://github.com/GeyserMC/${repo}/pull/${number}`}>{part}</a>;
        }
        return part;
    });

    return <>{linked}</>;
}