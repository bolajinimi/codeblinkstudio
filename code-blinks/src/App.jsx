// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import HomePage from './components/home'
import Courses from './components/courses'
import WhyChooseUs from './components/whyChooseUs'
import Footer from './components/footer'


function App() {
 

  return (
    <>
      <Navbar />
      <HomePage/>
      <Courses />
      <WhyChooseUs />
      <Footer />
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
