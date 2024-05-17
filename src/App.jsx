import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Nav from "./components/NAVBAR/Nav";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Student from "./components/student-department/Student";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Header />
        <div className="container">
          <Title subtitle="Our School" title="what we offer" />
          <Student />
          <About />
          <Title subtitle="Gallery" title="campus photo" />
          <Campus />
          <Title subtitle="TESTIMONIALS" title="What Student Says" />
          <Testimonials />
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
