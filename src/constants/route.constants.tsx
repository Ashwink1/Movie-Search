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

const routesList = [
    { path: '/discover', label: 'Discover', component: () => <div>Discover Page</div>, exact: true },
    { path: '/playlist', label: 'Playlist', component: () => <div>Playlist Page</div>, exact: true },
    { path: '/movies', label: 'Movie TV Shows', component: () => <div>Movie TV Shows Page</div>, exact: true },
    { path: '/mylist', label: 'My List', component: () => <div>My List Page</div>, exact: true },
    { path: '/watchlater', label: 'Watch Later', component: () => <div>Watch Later Page</div>, exact: true },
    { path: '/recommended', label: 'Recommended', component: () => <div>Recommended Page</div>, exact: true },
    { path: '/settings', label: 'Settings', component: () => <div>Settings Page</div>, exact: true },
    { path: '/logout', label: 'Logout', component: () => <div>Logout Page</div>, exact: true },
  ];

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