import "../styles/song-card.scss";

const SongCard = () => {
  return (
    <div className="song-card">
      <img src="https://i.ibb.co/Y06xX3d/headset.jpg" alt="" />
      <div className="song-card__flex">
        <div className="song-card__info">
          <div className="song-card__info--title">Side To Side</div>
          <p className="song-card__info--artist">Ariana</p>
        </div>
        <div className="song-card__time">
          <p>4:20</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
