import { Copy } from "lucide-react"
import React, { useContext } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Context } from "@/Context/context"
import CardDb from "../Card/CardDb"

 function DialogCloseButton() {
    const {showDialog,setShowDialog}=useContext(Context); 
    const onClose = () => {
        setShowDialog(false);   
    }
    

  return (
    
    <Dialog open={showDialog} onOpenChange={onClose} >
    
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>DATABASE</DialogTitle>
          <DialogDescription>
           Select DataBase to Connect
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
         <CardDb/>  
        </div>
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
 
  )
}
export default DialogCloseButton;