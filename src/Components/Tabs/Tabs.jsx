import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Context } from "../../Context/context";

import Table from '../Table/table';
import GraphComponent from '../Graph/graph'
import ReactMarkdown from 'react-markdown';
import React, { useContext ,useEffect,useState,useRef} from "react";
import QueryComponent from "../Query/Query"
import axios from "axios";

 function TabsDemo() {
    const {
        onSent,
        recentPrompt,
        showResult,
       // resultData,
        setInput,
        input,
        showDialog,
        loading,
        TabData,
      } = useContext(Context); 
      // const [escapedResultData, setEscapedResultData] = useState("");
     // const [data, setData] = useState(null);

      // useEffect(() => {
      //   // Escape special characters in resultData to prevent XSS vulnerabilities
      //   console.log("data is" ,TabData);
      //   setEscapedResultData(TabData);
      // }, [TabData]); 
      // useEffect(() => {
      //   async function fetchData() {
      //     try {
      //       const response = await axios.get("http://localhost:8000/api/process_question");
      //       setData(response.data);
      //     } catch (error) {
      //       console.error("Error fetching data:", error);
      //     }
      //   }
      //   fetchData();
      // }, []);
      
     
  return (
    <Tabs defaultValue="insights" >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="insights">INSIGHTS</TabsTrigger>
        <TabsTrigger value="table">TABLES</TabsTrigger>
        <TabsTrigger value="graph">GRAPH</TabsTrigger>
        <TabsTrigger value="Query">QUERY</TabsTrigger>
      
       
      </TabsList>
      <TabsContent value="table">
      <Table data={TabData.Table}/>
       
      </TabsContent>
      <TabsContent value="insights" style={{display:'flex-1'}}>
      {/* <ReactMarkdown>{escapedResultData}</ReactMarkdown> */}
      <ReactMarkdown>{TabData.Insights}</ReactMarkdown>
      </TabsContent>
      <TabsContent value="graph">
        <GraphComponent data={TabData.graph} />
      </TabsContent>
      <TabsContent value="Query">
      <QueryComponent query={TabData.query} />

      </TabsContent>
    </Tabs>
  )
}
export default TabsDemo;