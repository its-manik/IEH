import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Layout from '../components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../screens/Dashboard/Dashboard';
import Scheme from '../screens/Scheme/Scheme';
import Connectors from '../screens/Connectors/Connectors';
import Applications from '../screens/Applications/Applications';
import Events from '../screens/Events/Events';
import Webhooks from '../screens/Webhooks/Webhooks';
import ActivityTypes from '../screens/ActivityTypes/ActivityTypes';
import Activities from '../screens/Activities/Activities';
import FAQ from '../screens/FAQ/FAQ';
import Logs from '../screens/Logs/Logs';
import ControlPanel from '../screens/ControlPanel/ControlPanel';

import './App.css';

function App() {
  const { 
    isAuthenticated,
    user
   } = useSelector((state: RootState) => state.auth);
  return (
    <Routes>
      {
        isAuthenticated && user && (
          <Route path="/" element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/security-scheme-configurations" element={<Scheme />} />
            <Route path="/data-connectors-configurations" element={<Connectors />} />
            <Route path="/application-configurations" element={<Applications />} />
            <Route path="/event-configurations" element={<Events />} />
            <Route path="/webhooks-configurations" element={<Webhooks />} />
            <Route path="/activity-types-configurations" element={<ActivityTypes />} />
            <Route path="/activities" element={<Activities />} />
            
            <Route path="FAQ" element={<FAQ />} />
            <Route path="logs" element={<Logs />} />
            <Route path="control-panel" element={<ControlPanel />} />

            <Route path="*"  element={<Navigate to="/" replace />} />
          </Route>
        )
      }
      {
        !isAuthenticated && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )
      }

    </Routes>
  );
}

export default App;
