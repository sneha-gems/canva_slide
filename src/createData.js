// import { collection, doc, setDoc } from "firebase/firestore";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import { immunityQuestions } from "./contexts/constant";
// import db from "./firebase/index.js";

// const CreateData = () => {
//   const questionsRef = collection(db, "questions/supplement/immunity");

//   const writeQuestionData = async (questionId, values) => {
//     const userRef = doc(questionsRef, questionId);
//     await setDoc(userRef, { questionId: questionId, ...values });
//   };

//   useEffect(() => {
//     try {
//       {
//         immunityQuestions.map((question) => {
//           writeQuestionData(`immunity-${question.id}`, { ...question });
//         });
//       }
//     } catch (error) {
//       toast.error(error);
//     }
//   }, [writeQuestionData]);

//   return null;
// };

// export default CreateData;
