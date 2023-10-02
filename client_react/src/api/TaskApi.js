// apiService.js
import axios from 'axios';

const apiUrl = import.meta.env.VITE_URL_API;

export const sendTaskPostRequest = async (postData) => {
  try {
    const response = await axios.post(`${apiUrl}/task/create`, postData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTask = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/task/tasks`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const likeTask=async(task_id)=>{
  try {
    const response = await axios.post(`${apiUrl}/like/`, task_id);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const deleteTask=async(task_id)=>{
  try {
    const response = await axios.delete(`${apiUrl}/task/delete/${task_id}` );
    return response.data;
  } catch (error) {
    throw error;
  }
}


