import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Modal } from 'react-bootstrap';
import { useAppContext } from './Apiservice/AppProvider';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import SimpleModal from './pages/CreateeditUser';
import UserView from './pages/UserList';
import Header from './components/Header';


function App() {
  const { appContextValue } = useAppContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userList" element={<UserView />} />
        <Route path="/CreateEditUser" element={<SimpleModal />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
      <div>
        <Modal className='loader_modal' centered show={appContextValue.value}>
          <RotatingLines
            strokeColor="#659DBD"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={appContextValue.value}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;