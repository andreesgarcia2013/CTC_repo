import { useState } from 'react';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { sendTaskPostRequest } from '../api/TaskApi';
import { mexicanStates } from '../assets/MexicanStates'

export const CreatePage = () => {


  const [loading, setLoading] = useState(false);


  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = async (task) => {
    setLoading(true);
    await sendTaskPostRequest(task)
      .then((responseData) => {
        // Handle the response data here
        setLoading(false);
        console.log('Response data:', responseData);
        reset();
        toast.success(responseData.message);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        toast.error(error);
        console.error('Error:', error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col m-5 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <label>Titulo</label>
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    {...register("title", { required: "Titulo es un campo requerido" })}
                />
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                <label>Descripcion</label>
                <textarea
                    cols="30"
                    rows="10"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    {...register("description", { required: "Necesitas ingresar una descripcion" })}
                />
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>Fecha</label>
                        <input
                            type="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            {...register("date", { required: "Necesitas ingresar una fecha" })}
                        />
                        {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                    </div>
                    <div>
                        <label>Estado</label>
                        <select
                            id="stateSelect"
                            name="state"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400 sm:text-sm"
                            {...register("state", { required: "Necesitas seleccionar un estado" })}
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
                        {errors.state && <p className='text-red-500'>{errors.state.message}</p>}
                    </div>
                    <div>
                        <label>Autor</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            {...register("author", { required: "Necesitas ingresar un autor" })}
                        />
                        {errors.author && <p className='text-red-500'>{errors.author.message}</p>}
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button disabled={loading} type="submit" className=" w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{loading?'Cargando...':'Guardar'}</button>
                </div>
            </div>
        </form>
    </>
  )
}
