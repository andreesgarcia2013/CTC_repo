import { useState } from 'react';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mexicanStates } from '../assets/MexicanStates'
import { likeTask, deleteTask } from '../api/TaskApi';


export const CardTask = ({ task, setListTask, setData }) => {


  const state = mexicanStates.find((state) => state.id == task.state).name;

  const [isLiked, setIsLiked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [countLikes, setCountLikes] = useState(task.likes_count);

  const likedTask = async (task_id) => {
    setIsLoading(true);
    const task = {
      task_id
    }
    await likeTask(task)
      .then((responseData) => {
        // Handle the response data here
        setIsLiked(true)
        setCountLikes(countLikes + 1)
        setIsLoading(false);
        console.log('Response data:', responseData);
        toast.info(responseData.message)
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        console.error('Error:', error);
      });

  }

  const deletedTask = async (task_id) => {
    console.log(task_id);
    setIsLoading(true);
    await deleteTask(task_id)
      .then((responseData) => {
        // Handle the response data here
        setIsLoading(false);
        setListTask((state)=>state.filter((task)=>task.id !==task_id));
        setData((state)=>state.filter((task)=>task.id !==task_id));
        console.log('Response data:', responseData);
        toast.warn(responseData.message);
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        toast.error(error);
        console.error('Error:', error);
      });
  }
  return (
    <div className="bg-gray-200 m-5 p-3 rounded-lg border border-gray-400">
      <div className="flex flex-row justify-between">
        <span>{task.author}</span>
        <button 
          onClick={() => deletedTask(task.id)}
          disabled={isLoading} 
          hidden={countLikes>0 } 
          className="text-xl font-bold text-red-500"
          >
            X
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl">{task.title}</h1>
        <span>{task.description}</span>
        <span className="mt-2">{task.date}</span>
        <div className="flex flex-row justify-between mt-5">
          <h1 className="font-semibold text-lg text-gray-700">
            {state}
          </h1>
          <div className="flex space-x-1 align-middle items-center">
            <span>{countLikes}</span>
            <button
            disabled={isLiked||isLoading }
              onClick={() => likedTask(task.id)}
              className={`bg-transparent rounded-full p-2 focus:outline-none ${isLiked ? 'text-blue-500' : 'text-gray-500'
                }`}
            >
              <FontAwesomeIcon
                icon={isLiked ? 'thumbs-up' : 'thumbs-up'}
                className="text-lg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
