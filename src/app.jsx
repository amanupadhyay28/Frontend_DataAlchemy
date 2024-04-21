import React from 'react'
import Bar from './components/Bar/Bar.jsx'
import Main from './components/Main/Main.jsx'
import DataBasePage from './components/DataBaseConnections/DataBasePage.jsx'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

 

const App = () => {
  return (
   <>
    <Bar/>
      <Routes>
      
        <Route path="/" element={<Main />} />
        <Route path="/database" element={<DataBasePage />} />
      </Routes>

</>
  
  );

  
}

export default App
