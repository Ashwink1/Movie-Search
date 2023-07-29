import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/profile-image.png';
import useRouteChecker from '../../hooks/useRouteChecker';
import {tabs, additionalLinks, settingsLinks} from '../../constants/route.constants';

// Custom styled line for separating sections
const Separator = styled('line')({
    strokeWidth: 1,
    stroke: '#394B61',
});

function SidePanel(): JSX.Element {
    const { checkRouteContains } = useRouteChecker();

    return (
        <Grid container direction="column" alignItems="center" justifyContent={'start'}>
            {/* Section 1 */}
            <div className='p-10 w-full'>
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

            {/* Sections */}
            {[tabs, additionalLinks, settingsLinks].map((sectionLinks, index) => (
                <div key={index}>
                    <div className='flex justify-start items-start flex-col pl-[52px] py-2 w-full'>
                        {sectionLinks.map((link) => (
                            <Link
                                key={link.route}
                                to={link.route}
                                className={`flex items-center py-3 text-gray-400 hover:text-blue-500 ${checkRouteContains(link.route) ? 'text-blue-500' : ''
                                    }`}
                            >
                                {link.icon}
                                <span className="mr-2">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                    {/* Separators */}
                    <svg key={index} height="1" width="100%">
                        <Separator x1="0" y1="0" x2="100%" y2="0" />
                    </svg>
                </div>
            ))}
        </Grid>
    );
}

export default SidePanel;
