import { BrowserRouter, Route, Routes } from "react-router-dom";
import Takief from "./Takief";
import Fan from './Fann'
import Nav from "./Nav";

export default function App() {
  return (
    <div className="bg-gray-950">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Takief />} />
          <Route path="/fan" element={<Fan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
