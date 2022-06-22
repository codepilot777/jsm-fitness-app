import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }}}>
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: '#ff2625'}}>{name}</span>
      </Typography>
    </Box>
  )
}

export default ExerciseVideo