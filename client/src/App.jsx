import React from 'react'
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import Books from './Pages/Books';
import Home from './Pages/Home';
import Voice from './Pages/Voice';

const App = () => {
 return <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Books" element={<Books />} />
       <Route path="/Voice" element={<Voice />} />
     </Routes>
   </BrowserRouter>
  
 </>
}

export default App