import { Route, Routes } from "react-router-dom";
import Phonebook from "./Phonebook/Phonebook";

export const App = () => {
  return (
        <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Routes>
      <Route path="/" element={<Phonebook/>} />
      
     </Routes>
    </div>
  );
};
