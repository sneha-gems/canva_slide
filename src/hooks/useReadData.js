import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import db from "../firebase/index.js";

export const useReadData = () => {
  const [generalQuestions, setGeneralQuestions] = useState([]);

  const fetchQuestions = async () => {
    const querySnapshot =
      generalQuestions?.length === 0 &&
      (await getDocs(collection(db, "generalQuestions")));
    querySnapshot &&
      querySnapshot.forEach((doc) => {
        setGeneralQuestions((prev) => {
          if (!prev.find((item) => item.id === doc.data()?.id)) {
            return [{ ...doc.data(), answers: [] }, ...prev].sort(
              (a, b) => a.id - b.id
            );
          } else {
            return [...prev];
          }
        });
      });
  };

  fetchQuestions();

  // console.log("generalQuestions", generalQuestions);

  return { generalQuestions, setGeneralQuestions };
};
