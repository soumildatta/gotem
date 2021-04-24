import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

const useFetchRequests = (user) => {
  const { currentUser } = useAuth();
  const [requests, setRequests] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({});

  // user can be type driver or passenger
  const { isDriver } = user;
  const userType = isDriver ? "driver" : "user";
  // fetch from firestore
  useEffect(() => {
    db.collection("Requests")
      .where(userType, "==", currentUser.email)
      .onSnapshot((querySnapshot) => {
        const fetchedRequests = [];
        querySnapshot.forEach((doc) => {
          fetchedRequests.push({ ...doc.data(), id: doc.id });
        });

        // update the requests state with the requests recently fetched
        setRequests(fetchedRequests);

        // if the user is a passenger, then return all the documents where the request is not completed
        if (!isDriver) {
          setCurrentRequest(
            fetchedRequests.filter((request) => {
              return request.completed === false;
            })[0]
          );
        }
      });
  }, []);

  return { requests, currentRequest };
};

export default useFetchRequests;
