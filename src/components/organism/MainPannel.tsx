import React, { useState } from 'react';
import { Grid } from '@mui/material';
// Get the data from the movies 
import { movies } from '../../data/movies';
import SearchBox from '../atoms/SearchBox';
import { useEffect } from 'react';
import CardTypeMinView from '../atoms/CardTypeMinView';
const modifiedMovies = movies.map((movie) => {
  return { ...movie, cardType: 1 };
});
console.log(`==> : modifiedMovies:`, modifiedMovies);
function MainPanel() {
  const [data, setData] = useState<any[]>(modifiedMovies);
  const [searchString, setSearchString] = useState<string>('');
  const handleCallBack = (text: string) => {
    console.log(`==> : handleCallBack -> text`, text);
    setSearchString(text);
  }
  const handleCardClick = () => {
    console.log(`==> : Function not implemented.:`);
  }
  useEffect(() => {
    const filteredData = movies.filter((movie) => {
      return movie?.Title.toLowerCase().includes(searchString.toLowerCase());
    });
    setData(filteredData);
  }, [searchString]);

  return (
    <Grid container direction="column" alignItems="start" justifyContent={'start'}>
      {/* Search box */}
      <div className='px-[48px] py-[41px]'>
        <SearchBox handleCallBack={handleCallBack} />
      </div>
      <div className='w-full'>
        {
          data.map((movie) => {
            return (<CardTypeMinView
              imageUrl={movie?.Images[0]}
              name={movie?.Title}
              onClickHandler={handleCardClick} />)
          })
        }
      </div>
    </Grid>

  );
}

export default MainPanel;
