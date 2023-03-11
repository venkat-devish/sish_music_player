import { useSelector } from "react-redux/es/exports";
import { ChartsCard } from "../../organisms";
import {
  chartsData,
  isLoading,
  ObjectType,
} from "../../redux/features/recommendedSlice";
import "../../styles/bighits.scss";

type ChartsRowState = {
  isFetching: boolean;
  chartsDataRef: ObjectType;
  heading: string;
};

const ChartsRow = ({ isFetching, chartsDataRef, heading }: ChartsRowState) => {
  console.log(isFetching, chartsDataRef);
  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="big-hits__heading">{heading}</h1>
          <div className="big-hits">
            {chartsDataRef.map((item: ObjectType) => {
              const { key, images, title, subtitle } = item;
              return (
                <ChartsCard
                  key={key}
                  imageUrl={images.coverarthq}
                  title={title}
                  description={subtitle}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ChartsRow;
