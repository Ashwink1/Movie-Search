import React, { useState } from 'react';
import { Grid, Paper, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

interface TwoColumnLayoutProps {
  firstColumn: JSX.Element;
  secondColumn: JSX.Element;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ firstColumn, secondColumn }) => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [isFirstColumnVisible, setIsFirstColumnVisible] = useState<boolean>(isDesktop);

  const handleToggleColumn = () => {
    setIsFirstColumnVisible((prevValue) => !prevValue);
  };

  return (
    <Grid container>
      {/* Hamburger Icon */}
      {!isDesktop && (
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleToggleColumn}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      )}
      {/* First column */}
      {isFirstColumnVisible && (
        <Grid item xs={12} md={3} style={{ position: isDesktop ? 'absolute' : 'static' }}>
          <Paper style={{ width: 275, height: '100vh', backgroundColor: '#1F2A3C' }}>
            {firstColumn}
          </Paper>
        </Grid>
      )}
      {/* Second column */}
      <Grid item xs={12} md={isDesktop ? 9 : 12}>
        <Paper style={{ height: '100vh', backgroundColor: '#273244' }}>
          {secondColumn}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
