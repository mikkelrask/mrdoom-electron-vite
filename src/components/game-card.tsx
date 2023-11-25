import fs from "fs";
import path from "path";

interface CardProps {
  modPath: string;
}

function Card({ modPath }: CardProps) {
  const gameTitle = path.basename(modPath);
  const files = fs.readdirSync(modPath);
  const wadFiles = files.filter((file) => file.endsWith(".wad"));
  const pk3Files = files.filter((file) => file.endsWith(".pk3"));
  const modImg = files.filter(
    (file) =>
      file.endsWith(".png") ||
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg") ||
      file.endsWith(".webp")
  );
  console.log(wadFiles, pk3Files, modImg);
  return (
    <>
      <div className="gameCard" style={{ backgroundImage: `url(${modImg})` }}>
        <div className="gameCardTitle">
          <h1>{gameTitle}</h1>
        </div>
        <div className="gameCardDescription">
          <p>Game Description</p>
        </div>
        <div className="gameCardButtons">
          <button className="gameCardLaunchButton">Play</button>
          <button className="gameCardSettingsButton">Settings</button>
        </div>
      </div>
    </>
  );
}

export default Card;
