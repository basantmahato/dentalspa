import BookingCard from "./components/BookingCard";
import DentalCard from "./components/DentalCard";
import NavBar from "./components/NavBar"
import { Routes, Route, Link } from 'react-router-dom';
import Testimonials from "./components/Testimonials";
import Accordion from "./components/Accordion";
import Services from "./components/Services";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import AboutClinic from "./components/AboutClinic";
import HeaderCard from "./components/HeaderCard";
import ContactUs from "./components/ContactUs";
import MapComponent from "./components/MapComponent";
import Carousel from "./components/Carousel";


function App() {

  return (


  <>

  <HeaderCard />
  <NavBar />
  <WhatsAppIcon />

   
    <Routes>

      <Route path="/" element={
      <>
      <BookingCard />
      <DentalCard />
      <Services />
      <Testimonials />
      <Accordion />
       <MapComponent />
      </>

    } />

    <Route path="/about" element={
      <>
      <DentalCard />
         <Carousel />
      <AboutClinic />
      </>
    } />

     <Route path="/services" element={
      <>
      <Services />
      <Accordion />
      </>
    } />

     <Route path="/contact" element={
      <>
      <ContactUs />
   
       <MapComponent />
      </>
    } />


    </Routes>
   
    <Footer />

    </>
  )
}

export default App
