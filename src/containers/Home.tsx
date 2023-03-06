import { Discover, SideBar } from "../components";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <Discover />
    </div>
  );
};

export default Home;
