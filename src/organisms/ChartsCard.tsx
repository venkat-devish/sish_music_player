import thumbnail from "../assets/thumbnail.jpg";
import "../styles/card.scss";
import { formatModifier } from "../utilities/format-modifier";

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
          <div className="card__details--title">
            {formatModifier(title, "CARD_TITLE")}
          </div>
          <div className="card__details--description">
            {formatModifier(description, "CARD_DESCRIPTION")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
