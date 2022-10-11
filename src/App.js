
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import ShowChart from './components/ShowChart/ShowChart';
import Main from './Layouts/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/showchart',
        element:<ShowChart></ShowChart>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/quiz:Id',
        loader:({params})=>{
          // console.log(params);
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
        },
        element:<Quiz></Quiz>
      },

    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
