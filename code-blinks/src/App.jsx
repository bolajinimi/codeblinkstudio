// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import HomePage from './components/home'
import Courses from './components/courses'


function App() {
 

  return (
    <>
      <Navbar />
      <HomePage/>
      <Courses />
      {/* <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/make-payment" element={<MakePayment />} />
      </Routes>
    </Router> */}
     
    </>
  )
}

export default App
