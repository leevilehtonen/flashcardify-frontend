import axios from 'axios';

const API_URL = 'http://localhost:3001/api/rating';

export const getRating = async id => {
  const result = await axios.get(`${API_URL}/quiz/${id}`);
  return result.data;
};

export const addRating = async (id, rating) => {
  const result = await axios.post(`${API_URL}/quiz/${id}`, { rating });
  return result.data;
};
