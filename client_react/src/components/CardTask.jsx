export const CardTask = () => {
  return (
    <div className="bg-gray-200 m-5 p-3 rounded-lg border border-gray-400">
      <div className="flex flex-row justify-between">
        <span>task.user</span>
        <button className="text-xl font-bold text-red-500">X</button>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl">Task.title</h1>
        <span>Excepteur exercitation tempor ipsum minim voluptate ex minim. Reprehenderit commodo velit minim eiusmod amet ex sit laboris et esse velit. Qui esse anim et deserunt.
          Veniam laboris voluptate dolore duis ullamco consectetur dolor ea in. Reprehenderit quis id id duis proident consequat enim. Adipisicing occaecat reprehenderit ex reprehenderit amet velit. Deserunt exercitation laboris cupidatat cupidatat exercitation pariatur minim mollit. Voluptate et nulla ipsum aliquip ex dolor exercitation do dolor ea labore.</span>
        <span className="mt-2">date</span>
        <div className="flex flex-row justify-between mt-5">
          <h1 className="font-semibold text-lg text-gray-700">Task.state</h1>
          <div className="flex space-x-4 align-middle items-center">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <span>0 Me gusta</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
