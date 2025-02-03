import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { ProfilePic } from "./components/ProfilePic/ProfilePic";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <ProfilePic />
  </div>;
}

export default App;
