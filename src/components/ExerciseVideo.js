import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }}}>
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: '#ff2625', textTransform:"capitalize"}}>{name}</span>
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row'}, gap: { lg: '110px', xs:'0'}}}>
        {
          exerciseVideos?.map(() => {})
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideo