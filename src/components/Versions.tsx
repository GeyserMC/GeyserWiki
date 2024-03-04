import versions from '../data/versions.json';

export const Versions = ({ platform }) => {
    return versions[platform]
};