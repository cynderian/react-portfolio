import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { ProfilePic } from "./components/ProfilePic/ProfilePic";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <ProfilePic />
    <About />
    <Experience />
    <Projects />
  </div>;
}

export default App;
