import axios from 'axios';

const API_URL = 'http://localhost:3001/api/quizzes';

export const getQuizzes = async (page, quizzesPerPage) => {
  const results = await axios.get(`${API_URL}`, {
    params: {
      page,
      quizzesPerPage,
    },
  });
  return results.data;
};
export const getQuiz = async (id, flashcards) => {
  const result = await axios.get(`${API_URL}/${id}`, {
    params: {
      flashcards,
    },
  });
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
