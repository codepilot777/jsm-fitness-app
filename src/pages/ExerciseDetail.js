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
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);

    }
    fetchExercisesData();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail