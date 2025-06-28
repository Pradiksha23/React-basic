import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles.css';
// import App from './App';
import './portfolio.css';
import reportWebVitals from './reportWebVitals';
//import UserCardList from './components/UserCardList';
// import TodoList from './components/ToDoList';
// import Card2 from './components/card2';
// import Like from './components/Like';
import Likelist from './components/Likelist';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Card2 /> */}
    <Likelist/>
    {/* <TodoList/> */}
    {/* <UserCardList /> */}
    {/* <Home /> */}
    {/* <About /> */}
    {/* <Projects /> */}
    {/* <Contact /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
