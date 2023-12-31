import React from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


library.add(fab, fas, far)
export const App = () => {

  return (
    <>
      <AppRoutes></AppRoutes>
      <ToastContainer autoClose={3000} />
    </>
  )
}

