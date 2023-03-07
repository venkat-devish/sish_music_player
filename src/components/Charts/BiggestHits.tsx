import { ChartsCard } from "../../organisms";
import "../../styles/bighits.scss";

const BiggestHits = () => {
  return (
    <>
      <h1 className="big-hits__heading">Made for You</h1>
      <div className="big-hits">
        <ChartsCard />
        <ChartsCard />
        <ChartsCard />
        <ChartsCard />
        <ChartsCard />
        <ChartsCard />
      </div>
    </>
  );
};

export default BiggestHits;
