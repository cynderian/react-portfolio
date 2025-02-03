import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { ProfilePic } from "./components/ProfilePic/ProfilePic";
import { About } from "./components/About/About"

function App() {
  return <div className={styles.App}>
    <Navbar />
    <ProfilePic />
    <About />
  </div>;
}

export default App;
