import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MongoIcon from "../../assets/Mongo.png";
import PostgresIcon from "../../assets/PostGres.png";
import SqlIcon from "../../assets/Sql.png";
import { Context } from "../../Context/context";
import ConnectionForm from "./ConnectionForm";
import React, { useContext, useState } from "react";
import { DivideCircleIcon } from "lucide-react";
import databases from "./databaseData";

const DataBasePage = () => {
  const {
    showConnectionForm,
    setShowConnectionForm,
    connectedDatabases,
    setConnectedDatabases,
  } = useContext(Context);
  const [selectedDatabase, setSelectedDatabase] = useState(null);
  
  const handleConnect = (database) => {
    setSelectedDatabase(database); // Set the selected database when connecting
    setShowConnectionForm(true);
    //  setConnectedDatabases((prevDatabases) => [...prevDatabases, databaseName]);
  };
  // const handleConnectClick = () => {
  //   setShowConnectionForm(true);
  // };
  // const handleConnectFormSubmit = (connectionData) => {
  //   // Handle form submission and update connected databases
  //   setConnectedDatabases([...connectedDatabases, selectedDatabase.name]);
  //   setSelectedDatabase(null); // Reset selected database
  //   setShowConnectionForm(false);
  // };
  
  return (
    <div className="flex justify-center-between">
      <div>
        <div className="p-4">
          <h1 className="text-xl font-bold tracking-normal" style={{color:''}}>
            New DataBase Connections
          </h1>
          <p className="font-extrathin text-slate-500">
            Your Saved Chats will be Saved here
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 p-6">
          {databases.map((database) => (
            <Card
              key={database.name}
              className="w-[400px] flex border-2 border-transparent shadow-md transition duration-50 hover:border-[#a19cb2] items-center"
            >
              <CardHeader className="flex-row items-center w-full">
                <Avatar>
                  <AvatarImage src={database.icon} alt={database.name} />
                  <AvatarFallback>{database.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-grow ml-4">
                  <CardTitle className="text-xl">{database.name}</CardTitle>
                  <div className="ml-auto">
                    {connectedDatabases.includes(database.name) ? (
                      <div className="text-green-500">Connected</div>
                    ) : (
                      <Button
                        className="bg-white text-black text-base font-medium shadow-md hover:bg-slate-100"
                        type="button"
                        onClick={() => handleConnect(database)}
                      >
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      {showConnectionForm && (
        <>
          <style>{slideInKeyframes}</style>
          <div
            className="flex-1 pl-6 pt-[100px] overflow-y-auto"
            style={{
              animation: "slideInFromRight 0.3s ease-out forwards",
              width: "600px",
            }}
          >
            <ConnectionForm database={selectedDatabase} onSubmit={(connectionData) => {
              // Handle form submission and update connected databases
              setConnectedDatabases([...connectedDatabases, selectedDatabase.name]);
              setSelectedDatabase(null); // Reset selected database
              setShowConnectionForm(false);
            }}/>
          </div>
        </>
      )}
    </div>
  );
};

export default DataBasePage;
const slideInKeyframes = `
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
