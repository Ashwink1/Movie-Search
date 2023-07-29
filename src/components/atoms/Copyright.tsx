import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">

      {'Copyright © '}
      <Link color="inherit" href="https://engineerify.io/">
        <h1 className="text-3xl font-bold underline">
          Engineerify.io
        </h1>
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}