import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/profile-image.png';
import { Home, PlaylistPlay, Favorite, WatchLater, Settings, ExitToApp } from '@mui/icons-material';

// Custom styled line for separating sections
const Separator = styled('line')({
    strokeWidth: 1,
    stroke: '#394B61',
});

function SidePanel(): JSX.Element {
    return (
        <Grid container direction="column" alignItems="center">
            {/* Section 1 */}
            <div className='p-10'>
                <Grid item xs={12} className='flex justify-center items-center pb-2'>
                    <div className="rounded-full overflow-hidden">
                        <img
                            src={reactLogo}
                            alt="Profile Image"
                            className="w-20 h-20 object-cover"
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <span className="font-semibold text-lg text-center text-gray-400 font-open-sans text-20">
                        Eric Hoffman
                    </span>
                </Grid>
            </div>

            {/* Separator Line 1 */}
            <svg height="1" width="100%">
                <Separator x1="0" y1="0" x2="100%" y2="0" />
            </svg>

            {/* Section 2 */}
            <Grid item xs={12} className='py-4'>
                <Link to="/discover" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <Home className="mr-2" />
                    Discover
                </Link>
                <Link to="/playlist" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <PlaylistPlay className="mr-2" />
                    Playlist
                </Link>
                <Link to="/movies" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <Favorite className="mr-2" />
                    Movie TV Shows
                </Link>
                <Link to="/mylist" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <PlaylistPlay className="mr-2" />
                    My List
                </Link>
            </Grid>

            {/* Separator Line 2 */}
            <svg height="1" width="100%">
                <Separator x1="0" y1="0" x2="100%" y2="0" />
            </svg>

            {/* Section 3 */}
            <Grid item xs={12} className='py-4'>
                <Link to="/watchlater" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <WatchLater className="mr-2" />
                    Watch Later
                </Link>
                <Link to="/recommended" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <Favorite className="mr-2" />
                    Recommended
                </Link>
            </Grid>

            {/* Separator Line */}
            <svg height="1" width="100%">
                <Separator x1="0" y1="0" x2="100%" y2="0" />
            </svg>

            {/* Section 4 */}
            <Grid item xs={12} className='py-4'>
                <Link to="/settings" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <Settings className="mr-2" />
                    Settings
                </Link>
                <Link to="/logout" className="flex items-center px-2 text-gray-400 hover:text-blue-500">
                    <ExitToApp className="mr-2" />
                    Logout
                </Link>
            </Grid>
        </Grid>
    );
}

export default SidePanel;
