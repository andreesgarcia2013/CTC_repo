import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CardTask } from '../components/Components'
import { getAllTask } from '../api/TaskApi';
import { Spinner } from '../components/Spinner';
import { mexicanStates } from '../assets/MexicanStates'

export const HomePage = () => {
  const [listTask, setListTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const [titleSearchTerm, setTitleSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  const getListTasks = async () => {
    await getAllTask()
      .then((responseData) => {
        // Handle the response data here
        setLoading(false);
        console.log('Response data:', responseData);
        setListTask(responseData);
        setData(responseData);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getListTasks();
  }, []);

  const handleTitleSearch = (e) => {
    const searchText = e.target.value;
    setTitleSearchTerm(searchText);
    filterData(searchText, stateFilter);
  };

  const handleStateFilter = (e) => {
    const selectedFilter = e.target.value;
    setStateFilter(selectedFilter);
    filterData(titleSearchTerm, selectedFilter);
  };

  const filterData = (titleFilter, stateFilter) => {
    const filteredData = listTask.filter((task) =>
      task.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (stateFilter === '' || task.state === stateFilter)
    );

    setData(filteredData);
  };


  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center align-middle mt-5'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='mx-5 my-2 flex flex-col md:flex-row justify-end space-y-2 md:space-x-2'>
            <div className='flex flex-row w-fit items-center space-x-2'>
              <label>Estado</label>
              <select
                onChange={handleStateFilter}
                id="stateSelect"
                name="state"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400 sm:text-sm"
              >
                <option value={''}>
                  Selecciona un estado
                </option>
                {mexicanStates.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative ">
              <input
                type="text"
                placeholder="Buscar..."
                onChange={handleTitleSearch}
                className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon
                  icon="search" // Use the icon name you imported from FontAwesome
                  className="h-5 w-5 text-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 lg:grid-cols-3 gap-4">
            {
              data.map((task) => (
                <CardTask 
                  key={task.id} 
                  task={task} 
                  setListTask={setListTask}
                  setData={setData}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}
