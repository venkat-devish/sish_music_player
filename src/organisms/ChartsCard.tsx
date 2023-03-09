import thumbnail from "../assets/thumbnail.jpg";
import "../styles/card.scss";
import {
  descriptionSubString,
  titleSubstring,
} from "../utilities/format-modifier";

type ChartsCardType = {
  imageUrl: string;
  title: string;
  description: string;
};

const ChartsCard = ({ imageUrl, title, description }: ChartsCardType) => {
  return (
    <div className="card">
      <div className="card__info">
        <img src={imageUrl ? imageUrl : thumbnail} alt="thumbnail" />
        <div className="card__details">
          <div className="card__details--title">{titleSubstring(title)}</div>
          <div className="card__details--description">
            {descriptionSubString(description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
