import React from "react";
import {Navigate, Routes, Route, NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';
import BlockLogin from './blockLogin.jsx';
import BlockRegistration from './blockRegistration.jsx' 

const SBlockRegistrationLogin = styled.div`
grid-area: 5/3/11/11;
display:grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 8.333%);
background: #00ff1b;
`





const BlockRegistrationLogin = () => {
  return (
  <SBlockRegistrationLogin> 
  <Routes>
    
  <Route path={'log'} element={<BlockLogin/> }/>
  
  <Route path={'reg'} element={<BlockRegistration/> }/>
  
 </Routes>
 <Outlet/> 
  </SBlockRegistrationLogin>
)} ;

export default BlockRegistrationLogin;
