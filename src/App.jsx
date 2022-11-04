import './App.css';
import ClotheContext from './Context/ClothesContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/client/Home.jsx';
import MyOrders from './Components/Orders/MyOrders';
import { authConfig } from './Functions/auth.js';
import { LoginPage, LogoutPage, RequireAuth } from './Components/Auth/Auth';
import types from './data/types.js';
import MainSavivaldybe from './Components/admin/MainSavivaldybe';
import MainService from './Components/admin/MainService';

// const reList = data => {
//   const d = new Map();
//   data.forEach(line => {
//       if (d.has(line.title)) {
//           d.set(line.title, [...d.get(line.title), line]);
//       } else {
//           d.set(line.title, [line]);
//       }
//   });
//   return [...d].map((d1, i) => ([...d1, {show: true}]));
//   //or
//   return [...d];
// }

function App() {

  const [savivaldybes, setSavivaldybes] = useState(null);
  const [paslaugos, setPaslaugos] = useState(null);
  
  const [stats, setStats] = useState(null);

  const [saveData, setSaveData] = useState(null);
  const [saveService, setService] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  const [modalComment, setModalComment] = useState(null);
  const [modalDelete, setModalDelete] = useState(null);
  const [newComment, setNewComment] = useState(null);

  const [refresh, setRefresh] = useState(Date.now());
  const [refreshStatus, setRefreshStatus] = useState(Date.now());

  const [deleteComment, setDeleteComment] = useState(null);
  const [updateComment, setUpdateComment] = useState(null);

  const [status, setStatus] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  const [comments, setComments] = useState(null);

// GET
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/savivaldybe', authConfig())
    .then(res => {
      setSavivaldybes(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setSavivaldybes('error'));
  }, [refresh, status]);

  // GET PASLAUGOS
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/paslauga', authConfig())
    .then(res => {
      setPaslaugos(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setPaslaugos('error'));
  }, [refresh, status]);

  //GET COMMENTS
  useEffect(()=>{
    if(status === 1){
      return;
    }
    axios.get('http://localhost:3007/comments', authConfig())
    .then(res => {
      setComments(res.data);
    })
    .catch(_ => setComments('error'));
  }, [refresh, status])

//CREATE
useEffect(()=>{
  if(saveData === null){
    return;
  }
  axios.post('http://localhost:3007/savivaldybe', saveData, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveData]);

//CREATE COMMENT
useEffect(()=>{
  if(newComment === null){
    return;
  }
  axios.post('http://localhost:3007/comments', newComment, authConfig())
  .then(res => setRefresh(Date.now()));
}, [newComment]);

//CREATE SERVICE
useEffect(()=>{
  if(saveService === null){
    return;
  }
  axios.post('http://localhost:3007/paslauga', saveService, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveService]);

//UPDATE
useEffect(()=>{
  if(updateComment === null){
    return;
  }
  axios.put('http://localhost:3007/comments/' + updateComment.id, updateComment, authConfig())
  .then(res => setRefresh(Date.now()));
}, [updateComment]);

useEffect(() => {
  if (null === deleteComment) {
      return;
  }
  axios.delete('http://localhost:3007/comments/'+ deleteComment.id, authConfig())
  .then(res => setRefresh(Date.now()));
}, [deleteComment]);

  return (
    <BrowserRouter>
    <ClotheContext.Provider value={{
      savivaldybes,
      setSavivaldybes,
      paslaugos,
      setPaslaugos,
      setSaveData,
      setService,
      setDeleteData,
      setModalComment,
      setModalDelete,
      modalComment,
      modalDelete,
      setNewComment,
      setDeleteComment,
      refreshStatus,
      status,
      setStatus,
      setUpdateComment,
      setRefresh,
      stats,
      types,
      setCurrentPage,
      currentPage,
      comments,
      refresh,
    }}>
      <div className="App">
        <header className="App-header">
          {/* <ShowNav /> */}
          <Routes>
            <Route path='/' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/login' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/logout' element={<LogoutPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/home' element={<RequireAuth role='user'><Home /></RequireAuth>}></Route>
            <Route path='/home/savivaldybe' element={<RequireAuth role='admin'><MainSavivaldybe /></RequireAuth>}></Route>
            <Route path='/home/services' element={<RequireAuth role='admin'><MainService /></RequireAuth>}></Route>
            <Route path='/home/comments' element={<RequireAuth role='admin'><MyOrders /></RequireAuth>}></Route>
          </Routes>
        </header>
      </div>
    </ClotheContext.Provider>
    </BrowserRouter>
  );
}

export default App;
