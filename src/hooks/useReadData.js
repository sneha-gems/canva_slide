import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import db from "../firebase/index.js";

export const useReadData = async () => {
  const [generalQuestions, setGeneralQuestions] = useState([]);
  const querySnapshot =
    generalQuestions?.length === 0 &&
    (await getDocs(collection(db, "generalQuestions")));
  querySnapshot &&
    querySnapshot.forEach((doc) => {
      if (!generalQuestions.includes(doc.data())) {
        // doc.data() is never undefined for query doc snapshots

        // console.log(doc.id, " => ", doc.data());
        setGeneralQuestions((prev) => [doc.data(), ...prev]);
      }
    });
  console.log("generalQuestions", generalQuestions);

  return { generalQuestions };
};
