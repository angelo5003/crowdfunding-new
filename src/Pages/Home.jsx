import "./HomeStyles.css";
import ProductTitleCard from "../components/Cards/ProductTitleCard/ProductTitleCard";
import ResultCard from "../components/Cards/ResultCard/ResultCard";
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
