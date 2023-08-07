import "./HomeStyles.css";
import ProductTitleCard from "../components/ProductTitleCard/ProductTitleCard";
import ResultCard from "../components/ResultCard/ResultCard";
import About from "./About/About";

const Home = () => {
  return (
    <div className="home-page-outer-container">
      <ProductTitleCard />
      <ResultCard />
      <About />
    </div>
  );
};

export default Home;
