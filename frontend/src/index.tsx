import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/" component={VideoList} exact />
          <Route path="/new-video" component={VideoForm} exact />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
