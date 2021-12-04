import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// note: make sure to exit server and then re-'yarn start' after importing relative files, like the one above
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
