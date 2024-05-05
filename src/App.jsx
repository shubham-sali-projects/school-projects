import Header from "./components/Header/Header";
import Nav from "./components/NAVBAR/Nav";
import Student from "./components/student-department/Student";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Header />
        <div className="container">
          <Student />
        </div>
      </div>
    </>
  );
}

export default App;
