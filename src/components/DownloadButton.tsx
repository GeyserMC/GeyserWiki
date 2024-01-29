import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

export const APIDownloadButton = ({ projectId, platformId, header }) => {
    const [buildInfo, setBuildInfo] = useState({ buildNumber: '', versionString: '', date: '' });

    useEffect(() => {
        const fetchBuildInfo = async () => {
            try {
                const response = await fetch(`https://download.geysermc.org/v2/projects/${projectId}/versions/latest/builds/latest`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const { build, version } = data;

                const response2 = await fetch(`https://download.geysermc.org/v2/projects/${projectId}/versions/${version}/builds/${build}`);
                if (!response2.ok) {
                    throw new Error('Network response was not ok');
                }
                const data2 = await response2.json();
                const { time } = data2;

                const formattedDate = new Date(time).toLocaleDateString();

                setBuildInfo({ buildNumber: build, versionString: version, date: formattedDate });
            } catch (error) {
                console.error('Failed to fetch build info:', error);
            }
        };

        fetchBuildInfo();
    }, [projectId]);

    return (
            <a href={`https://download.geysermc.org/v2/projects/${projectId}/versions/latest/builds/latest/downloads/${platformId}`}>
                <div className='download-button'>
                    <FontAwesomeIcon icon={faFileArrowDown}/> <b>{header}</b><br/>
                    #{buildInfo.buildNumber} · {buildInfo.date}
                </div>
            </a>
    );
};