export const capitalizeString = (string) =>
    string.replace(/./, (l) => l.toUpperCase());

export const getURLHost = (url) =>
    capitalizeString(new URL(url).hostname.replace('www.', '').split('.')[0]);
