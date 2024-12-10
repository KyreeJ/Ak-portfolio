import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from './Components/pages/About.jsx'
import Home from './Components/Home.jsx'
import Project from './Components/pages/Project.jsx';
import Contact from './Components/pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/about', 
        element: <About />,
      },
      {
        path: '/projects',
        element: <Project />, 
      },
      {
        path: '/contact', 
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);