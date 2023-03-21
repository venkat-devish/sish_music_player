import { ChartsCard } from "../../organisms";
import Loading from "../../organisms/Loading";
import { ObjectType } from "../../redux/features/recommendedSlice";
import "../../styles/bighits.scss";

type ChartsRowState = {
  isFetching: boolean;
  chartsDataRef: ObjectType;
  heading: string;
};

const ChartsRow = ({ isFetching, chartsDataRef, heading }: ChartsRowState) => {
  return (
    <>
      {isFetching ? (
        <Loading />
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
