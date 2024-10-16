import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Foter";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const refAbout = useRef(null)
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <About compRef={refAbout}/>
      <ContactsForm />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
