import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";


//checking if current user is a driver or not
//without worrying about async functions not updating fast enough
const useIsDriver = () => {
  const { currentUser } = useAuth();
  const [isDriver, setIsDriver] = useState(false);
  
  useEffect(() => {
      if (currentUser){
        db.collection("Users").doc(currentUser.email).get().then(function (doc) {
            if (doc.exists) {
                if (doc.data().persona !== "passenger"){
                    setIsDriver(true);
                }
            }
        });
      }
  });
    
    return { isDriver };
    
}


export default useIsDriver;