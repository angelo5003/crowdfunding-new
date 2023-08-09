import { useState } from "react";
import "./AboutStyle.css";
import PledgeCard from "../../components/Cards/PledgeCard/PledgeCard";
import data from "../../data/data.json";

const About = () => {
  const [dataList, setDataList] = useState(data);

  return (
    <div className="about-page-outer-container">
      <section className="about-page-inner-container">
        <h3 className="about-page-title">About this project</h3>
        <p className="about-page-info">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <br />
        <p className="about-page-info">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </section>

      {Array.isArray(dataList) &&
        dataList.map((info) => {
          return <PledgeCard key={info.id} info={info} />;
        })}
    </div>
  );
};

export default About;
