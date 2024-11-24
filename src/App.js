import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import styles from "./GlobalStyles.module.css";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.body}>
      <Navbar />
      <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
