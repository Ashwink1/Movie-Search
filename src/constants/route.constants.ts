import {
    discoverIcon,
    playlistIcon,
    movieTVShowsIcon,
    watchLaterIcon,
    settingsIcon,
    logoutIcon
} from './images.constant';

// Define constant icons for easier access


// Define constant route paths
export const routes = {
    discover: '/discover',
    playlist: '/playlist',
    movies: '/movies',
    mylist: '/mylist',
    watchlater: '/watchlater',
    recommended: '/recommended',
    settings: '/settings',
    logout: '/logout',
};

// Define your tabs and their corresponding routes
export const tabs = [
    { label: 'Discover', icon: discoverIcon, route: routes.discover },
    { label: 'Playlist', icon: playlistIcon, route: routes.playlist },
    { label: 'Movie TV Shows', icon: movieTVShowsIcon, route: routes.movies },
    { label: 'My List', icon: playlistIcon, route: routes.mylist },
];

// Define your "Watch Later" and "Recommended" links
export const additionalLinks = [
    { label: 'Watch Later', icon: watchLaterIcon, route: routes.watchlater },
    { label: 'Recommended', icon: movieTVShowsIcon, route: routes.recommended },
];

// Define your "Settings" and "Logout" links
export const settingsLinks = [
    { label: 'Settings', icon: settingsIcon, route: routes.settings },
    { label: 'Logout', icon: logoutIcon, route: routes.logout },
];