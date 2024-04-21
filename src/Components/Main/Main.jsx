import React, { useContext ,useEffect,useState,useRef} from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/context";
import { Button } from "../ui/button";
import ListDbModal from "../Modal/ListDbModal";
import Bar from "../Bar/Bar";
import ReactMarkdown from 'react-markdown'
//import Markdown from 'https://esm.sh/react-markdown@9'
import Table from '../Table/table';
import Tabs from '../Tabs/Tabs';
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    resultData,
    setInput,
    input,
    showDialog,
    loading,
  } = useContext(Context); 
  const [escapedResultData, setEscapedResultData] = useState("");
  const resultRef = useRef(null); // Ref to hold the result element
  const searchBoxRef = useRef(null); // Ref to hold the search box element

  useEffect(() => {
    // Escape special characters in resultData to prevent XSS vulnerabilities
    console.log("data is" ,resultData);
    setEscapedResultData(resultData);
  }, [resultData]); 
 

  const handleSearchBoxResize = () => {
    const searchBox = searchBoxRef.current;
    if (searchBox) {
      const searchBoxHeight = searchBox.scrollHeight;
      searchBox.style.height = `${Math.min(searchBoxHeight, 200)}px`;;
    }
  };

  useEffect(() => {
    // Call handleSearchBoxResize on initial render and input changes
    handleSearchBoxResize();
  }, [input]);

  return (
    <div className='main'>
      {showDialog ? <ListDbModal /> : null}

      <div className="nav">
        <p>Data Alchemy</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
             
                <span>Hello, Dev. </span>
              </p>
              <p>How Can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Retrieve all customer information from the database.📊 Customer Database </p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card">
                <p>Fetch sales data for the past month.💼 Sales Analysis</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card">
                <p>Get a list of employees who joined the company in the last quarter.👥 New Employees</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card">
                <p>Extract product inventory details for the current stock.📦 Product Inventory</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
         

          <div className="result">
            <div className="result-title">
              <img style={{marginBottom:'10px'}}src={assets.user_icon} alt="" />
              <p style={{marginBottom:'20px'}}>{recentPrompt}</p>
            </div>
            <div className="result-data" >
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className="loader">
              <hr/>
              <hr/>
              <hr/>
            </div>:<Tabs/>}
             
             
            </div>
          </div>
        )}

        <div className="main-bottom">
        <div className="search-box-container">
            <div className="search-box" ref={searchBoxRef}>
              <textarea
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Enter a prompt here"
                onInput={handleSearchBoxResize}
                rows={1}
               
              />
              <div>
                <img src={assets.gallery_icon} alt="Gallery" />
                <img src={assets.mic_icon} alt="Mic" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="Send" />
              </div>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check before using it to make decisions. Gemini is not a
            substitute for professional advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
