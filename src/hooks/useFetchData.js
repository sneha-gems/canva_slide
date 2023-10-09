import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/index.js";

function useApiRequestOnChange(apiUrl) {
  const [fetchData, setFetchData] = useState([]);

  const fetchQuestions = async (apiUrl) => {
    const querySnapshot = fetchData?.length === 0 && Boolean(apiUrl) && (await getDocs(collection(db, apiUrl)));

    querySnapshot &&
      querySnapshot.forEach((doc) => {
        setFetchData((prev) => {
            if (!prev.find(item => item.id === doc.data()?.id)) {
            return([{ ...doc.data(), answers: [] }, ...prev].sort(
                (a, b) => a.id - b.id
                ))
            } else {
                return[...prev]
            }
            
          }
          );
      });
  };

  fetchQuestions(apiUrl);
  // console.log("generalQuestions", generalQuestions);

  return { fetchData, setFetchData };
}

export default useApiRequestOnChange;
