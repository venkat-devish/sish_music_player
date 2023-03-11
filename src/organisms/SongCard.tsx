import "../styles/song-card.scss";
import { formatModifier } from "../utilities/format-modifier";

type SongsCardType = {
  images: any;
  subtitle: string;
  title: string;
};

const SongCard = ({ images, subtitle, title }: SongsCardType) => {
  return (
    <div className="song-card">
      <img src={images.coverarthq} alt="" />
      <div className="song-card__flex">
        <div className="song-card__info">
          <div className="song-card__info--title">{title}</div>
          <p className="song-card__info--artist">
            {formatModifier(subtitle, "SONG_CARD_ARTIST")}
          </p>
        </div>
        <div className="song-card__time">
          <p>4:20</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
