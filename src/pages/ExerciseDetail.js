import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/video/related'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetail.name}`, youtubeOptions);
      console.log({exerciseVideoData});
      setExerciseVideos(exerciseVideoData);

    }
    fetchExercisesData();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail