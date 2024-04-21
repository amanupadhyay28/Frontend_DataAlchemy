import { createContext,useState } from "react";
import runChat from "../config/gemini";
import axios from "axios";

export const Context=createContext();
const ContextProvider=(props)=>{
  
const [input ,setInput]=useState(""); 
const [recentPrompt,setRecentPrompt]=useState("");
const [prevPrompts,setPrevPrompts]=useState([]);
const [showResult,setShowResult]=useState(false);   
const [loading,setLoading]=useState(false);
const [resultData,setResultData]=useState("");  
const [showDialog, setShowDialog] = useState(false);
const [showRightBar, setShowRightBar] = useState(false);
const [showConnectionForm, setShowConnectionForm] = useState(false);
const [connectedDatabases, setConnectedDatabases] = useState([]);

const [TabData,setTabData]=useState("");
const onSent = async () => {
  setResultData("");
  setLoading(true);
  setShowResult(true);
  setRecentPrompt(input);

  try {
    const response = await axios.post("http://localhost:8000/api/process_question", {
      question: input,
      // Add other data you need to send to the backend
    });

    console.log("response", response.data);
    //let res = JSON.parse(response.data);
    //console.log("res", res);
  //  console.log("res.output", res.output);

   setTabData(response.data);
  } catch (error) {
    console.error("Error:", error);
    // Handle error
  }

  setLoading(false);
  setInput("");
};



    const contextValue={
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,
      showDialog,
      setShowDialog,
      showRightBar,
      setShowRightBar,
      showConnectionForm, // Add the state
      setShowConnectionForm, // Add the setter
      connectedDatabases, // Added connectedDatabases to context
      setConnectedDatabases, // Added setConnectedDatabases to context
      setTabData,
      TabData,

        


    }
    return (
      <Context.Provider value={contextValue}>
        {props.children}
      </Context.Provider>
    )
}
export default ContextProvider;