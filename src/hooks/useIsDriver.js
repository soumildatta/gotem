import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

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