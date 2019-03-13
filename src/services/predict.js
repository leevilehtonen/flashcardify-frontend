import axios from 'axios';

const API_URL = 'http://localhost:3001/api/predict';

export const startQuiz = async id => {
  const result = await axios.post(`${API_URL}/start/${id}`);
  return result.data;
};
export const finishQuiz = async id => {
  const result = await axios.post(`${API_URL}/finish/${id}`);
  return result.data;
};
