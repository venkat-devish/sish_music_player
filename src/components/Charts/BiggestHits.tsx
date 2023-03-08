import { useSelector } from "react-redux/es/exports";
import { ChartsCard } from "../../organisms";
import { chartsData, isLoading } from "../../redux/features/recommendedSlice";
import "../../styles/bighits.scss";

const BiggestHits = () => {
  const chartsDataRef = useSelector(chartsData);
  const isFetching = useSelector(isLoading);
  console.log(chartsDataRef);
  // console.log(isFetching);
  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="big-hits__heading">Made for You</h1>
          <div className="big-hits">
            {chartsDataRef.map((item: any) => {
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

export default BiggestHits;
