export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '0e3866f6d7msh3016d1fb6b96244p1fd4c9jsne2f142233646',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    
    return data;
}
