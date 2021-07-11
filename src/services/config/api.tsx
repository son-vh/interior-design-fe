export const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.accessToken ? localStorage.accessToken : null}`,
    'Accept-Language': 'vi',
    'X-TZ-Offset': `${Intl.DateTimeFormat().resolvedOptions().timeZone}`
});

export const getHeadersNonAuth = () => ({
    'Content-Type': 'application/json',
    language: 'vi',
});
