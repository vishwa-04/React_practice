import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserDetails from './pages/userData';
import UserData from './pages/Component/UserData';
import UserPost from './pages/Component/UserPost';
import UserComment from './pages/Component/UserComment';
import UserForm from './pages/Component/UserForm';
import CreatePost from './pages/Component/CreatePost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserDetails />,
  },
  {
    path: "/userProfile",
    element: <UserData />,
  },
  {
    path:"/userPost",
    element:<UserPost />,
    children:[ {
      path:"userComment",
      element:<UserComment />
    }

    ]
  },
 {
  path:"/userForm",
  element:<UserForm />
 },
 {
  path:'/createPost',
  element:<CreatePost />
 }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
