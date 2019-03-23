import axios from 'axios';

const API_URL = 'http://localhost:3001/api/quizzes';

export const getQuizzes = async page => {
  const results = await axios.get(`${API_URL}`, { params: { page } });
  return results.data;
};
export const getQuiz = async id => {
  const result = await axios.get(`${API_URL}/${id}`);
  return result.data;
};
export const createQuiz = async quiz => {
  const result = await axios.post(`${API_URL}`, quiz);
  return result.data;
};
export const updateQuiz = async (id, quiz) => {
  const result = await axios.put(`${API_URL}/${id}`, quiz);
  return result.data;
};
export const deleteQuiz = async id => {
  const result = await axios.delete(`${API_URL}/${id}`);
  return result.data;
};

export const getFlashcardsForQuiz = async id => {
  const result = await axios.get(`${API_URL}/${id}/flashcards`);
  return result.data;
};

export const updateQuizTries = async id => {
  const result = await axios.post(`${API_URL}/${id}/tries`);
  return result.data;
};
export const updateQuizSuccesses = async id => {
  const result = await axios.post(`${API_URL}/${id}/successes`);
  return result.data;
};
export const getRatingStatsForQuiz = async (id, aggregate) => {
  const result = await axios.post(`${API_URL}/${id}/ratings/stats`, { aggregate });
  return result.data;
};
export const createRatingForQuiz = async (id, rating) => {
  const result = await axios.post(`${API_URL}/${id}/ratings`, { rating });
  return result.data;
};
