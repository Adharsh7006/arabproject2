import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Array2 from './Array2';
import Array3 from './Array3';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Array4 from './Array4';

const samplecontext = createContext();

function App() {
  const data = [
    { name: "vishakh", age: 22, mark: 40 },
    { name: "vyshakh", age: 24, mark: 60 },
    { name: "vyshnav", age: 24, mark: 30 },
  ];
  const [value, setvalue] = useState(data);
  console.log(value);

  return (
    <div>
      <samplecontext.Provider value={{ value, setvalue }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Array3 />} />
            <Route path="/Chart" element={<Array2 />} />
            <Route path="/Create" element={<Array4 />} />
          </Routes>
        </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}

export default App;
export { samplecontext };
