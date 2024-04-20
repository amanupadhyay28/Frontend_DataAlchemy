import React, { useContext, useState } from 'react'
import './bar.css'
import {assets} from '../../assets/assets'
import { Button } from '../ui/button';
import ListDbModal from '../Modal/ListDbModal';
import { Context } from '../../Context/context';
import {Link} from 'react-router-dom'
const Bar = () => {
    const [extended,setExtended]=useState(false);
   const{setShowDialog}=useContext(Context);

    const handleDatabasesClick = () => {
      setShowDialog(true);
      setExtended(false); // Collapse the sidebar
  };
  const handleConnectionClick = () => {
    setExtended(prevExtended => !prevExtended);
  }
  const handleNewChatClick = () => {
    setExtended(prevExtended => !prevExtended);
    //setShowDialog(true);
   

};
  return (
    
    <div className='sidebar' >
    <div className='top'>

   <img  onClick={()=>setExtended(prev=>!prev)}className='menu' src={assets.menu_icon} alt='logo' />
 {/* New Chat button */}
 <div style={{display:'flex',flexDirection:'column'}}>
 <div className='new-chat' style={{marginBottom:'-30px'}} onClick={handleNewChatClick}>
 <Link to="/" style={{display:'flex',gap:'9px'}}>
          <img src={assets.plus_icon} alt='logo' />
          {extended ? <p>New Chat</p> : null}
          </Link>
        </div>
 <div className='new-chat' onClick={handleConnectionClick}>
 <Link to="/database" style={{display:'flex',gap:'9px'}}>
          <img src={assets.dataBaseIcon} alt='logo' />
          {extended ? <p>Connections</p> : null}
          </Link>
        </div>

</div>
     {/*<div className='new-chat'>
          <Link to="/database"> 
            <img src={assets.plus_icon} alt='Database' />
            <p>Database</p>
          </Link>
        </div> */}
  
   {extended?  <div className='recent'>
   <p className='recent-title'>  Recent</p>
  
   <div className='recent-entry'>
   <img src={assets.message_icon} alt='logo' />
   <p>What is react ...</p>
   </div>

   </div>:null}

 
    </div>
    {/* bottom tab */}
   <div className='bottom'>
    <div className='bottom-item recent-entry'>
    <img src={assets.question_icon} alt='logo' />
   {extended?<p>Help</p>:null} 
    </div>
    <div className='bottom-item recent-entry'>
    <img src={assets.history_icon} alt='logo' />
   {extended?<p>Activity</p>
:null}     </div>
    <div className='bottom-item recent-entry'>
    <img src={assets.setting_icon} alt='logo' />
  {extended? <p>Settings</p>:null} 
    </div>
   </div>


   </div>
    
   
  )
}

export default Bar
