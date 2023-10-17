import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { linksDetails } from 'shared/constants';
import AppLayout from 'pages/AppLayout/AppLayout';
import NotFoundDashboard from 'pages/NotFound/NotFoundDashboard';
import  AboutDashboard  from 'pages/About/AboutDashboard';
import  AdvancedPatternsDashboard  from 'pages/AdvancedPatterns/AdvancedPatternsDashboard';
import  HomeDashboard  from 'pages/Home/HomeDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout links={linksDetails} />}>
        <Route index element={<HomeDashboard />} />
        <Route path="/advanced-patterns" element={<AdvancedPatternsDashboard />} />
        <Route path="/about" element={<AboutDashboard />} />
        <Route path="/404" element={<NotFoundDashboard />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  );
}

export default App;
