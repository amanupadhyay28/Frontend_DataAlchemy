import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';

function ConnectionForm({database,onSubmit}) {
  const [connectionData, setConnectionData] = useState({
    username: "",
          password: "",
          host: "",
          port: "",
          dbname: "",
          dbtype: database ? database.name : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConnectionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8000/api/save-database-connection/', connectionData)
      .then(response => {
        console.log("Connection Status:", response.status);
        // Assuming you want to do something with response data
        console.log("Response Data:", response.data);
        onSubmit(response);
        // Clear form fields after successful submission
        setConnectionData({
          username: "",
          password: "",
          host: "",
          port: "",
          dbname: "",
          dbtype: database ? database.name : "",
        });
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <Card className="w-[500px] h-[610px] shadow-xl">
      <CardHeader>
      <CardTitle>{database ? `Connection Setup - ${database.name}` : "Connection Setup"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={connectionData.username}
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={connectionData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div>
              <Label htmlFor="host">Host</Label>
              <Input
                id="host"
                name="host"
                value={connectionData.host}
                onChange={handleChange}
                placeholder="Enter Host"
              />
            </div>
            <div>
              <Label htmlFor="port">Port</Label>
              <Input
                id="port"
                name="port"
                type="port"
                value={connectionData.port}
                onChange={handleChange}
                placeholder="Enter Port"
              />
            </div>
            <div>
              <Label htmlFor="dbname">Database Name</Label>
              <Input
                id="dbname"
                name="dbname"
                value={connectionData.dbname}
                onChange={handleChange}
                placeholder="Enter Database Name"
              />
            </div>
            <div>
              <Label htmlFor="dbtype">Database Type</Label>
              <Input
                id="dbtype"
                name="dbtype"
                value={connectionData.dbtype}
                onChange={handleChange}
                placeholder="Enter Database Type"
              />
            </div>
           
            
            {/* <div>
              <Label htmlFor="database">Database</Label>
              <Input
                id="database"
                name="database"
                value={connectionData.database}
                onChange={handleChange}
                placeholder="Enter database"
              />
            </div> */}
          </div>
          <div className="flex justify-center mt-6">
            <Button variant ="outline"type="submit">Connect</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ConnectionForm;
