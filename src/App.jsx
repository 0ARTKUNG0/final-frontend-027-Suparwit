import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import AboutBox from "./components/AboutBox";
import ProjectsBox from "./components/ProjectsBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import ReviewBox from "./components/ReviewBox";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1100,
      reset: true,
    });
    
    sr.reveal(".feature-text-card", {});
    sr.reveal(".feature-name", { delay: 200 });
    sr.reveal(".feature-text-info", { delay: 400 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".feature-image", { delay: 200 });
    
    //Projectbox
    sr.reveal(".project-box", { interval:200});

    //Heading
    sr.reveal(".top-header",{})

    //left-right animation
    const srLeft = ScrollReveal({
      origin:"left",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin:"right",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    srRight.reveal(".skills-box", { delay: 200 });
    srRight.reveal(".form-control", { delay: 100 });
    

    // Typed.js effect
    const typingEffect = new Typed(".typedText", {
      strings: ["Home Product",],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      window.removeEventListener("scroll", scrollActive);
      typingEffect.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <AboutBox />
        <ReviewBox />
        <ProjectsBox />
        <ContactBox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
