

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
import {Avatar ,AvatarFallback ,AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MongoIcon from '../../assets/Mongo.png';
import PostgresIcon from '../../assets/PostGres.png';
import SqlIcon from '../../assets/Sql.png';
import {Context} from '../../Context/context';
import React, { useContext } from "react"
 function CardWithForm() {
   
  
  return (

    <div className="grid grid-cols-3 gap-6">
    <Card className="flex flex-col justify-between hover:bg-slate-100">
        <CardHeader className="flex-row gap-4 items-center">
        <Avatar>
        <AvatarImage src={PostgresIcon} alt="Postgres" />
        <AvatarFallback>P</AvatarFallback>

        </Avatar>
            <div>
             <CardTitle>Postgres</CardTitle>   
             <CardDescription>Connect to a Database</CardDescription>
            </div>
        </CardHeader>
        <CardContent> 
        <p>Postgres is open source </p>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button  className="bg-[#eceff1] hover:bg-[#a8b2bc]" variant="secondary"type="submit" >Enter Details</Button>
        </CardFooter>
    </Card>
    <Card className="flex flex-col justify-between hover:bg-slate-100">
        <CardHeader  className="flex-row gap-4 items-center">
        <Avatar>
        <AvatarImage src={MongoIcon} alt="Postgres" />
        <AvatarFallback>P</AvatarFallback>

        </Avatar>
            <div>
             <CardTitle>MongoDb</CardTitle>   
             <CardDescription>Connect to a Database</CardDescription>
            </div>
        </CardHeader>
        <CardContent> 
        <p>Postgres is open source </p>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button  className="bg-[#eceff1] hover:bg-[#a8b2bc]"variant="secondary" type="submit">Enter Details</Button>
        </CardFooter>
    </Card>
    <Card className="flex flex-col justify-between hover:bg-slate-100">
        <CardHeader  className="flex-row gap-4 items-center">
        <Avatar>
        <AvatarImage src={SqlIcon} alt="Postgres" />
        <AvatarFallback>P</AvatarFallback>

        </Avatar>
            <div>
             <CardTitle>Sql</CardTitle>   
             <CardDescription>Connect to a Database</CardDescription>
            </div>
        </CardHeader>
        <CardContent> 
        <p>Postgres is open source </p>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Button className="bg-[#eceff1] hover:bg-[#a8b2bc]" variant="secondary" type="submit" >Enter Details</Button>
        </CardFooter>
    </Card>

    </div>
   
  )
}
export default CardWithForm;