import versions from '../../_data/versions.json';

export const Versions = ({ platform }) => {
    return versions[platform]
};