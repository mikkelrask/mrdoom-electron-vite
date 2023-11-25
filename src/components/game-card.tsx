// this component should show the game card, that has the game title, description a launch button and a settings button
// title and description, as well as the .cardGame should have the picture from the game folder as its background

function Card() {
  return (
    <>
      <div className="gameCard">
        <div className="gameCardTitle">
          <h1>Game Title</h1>
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

function Logo() {
  return (
    <>
      <div className="gameCard"></div>
    </>
  );
}

export default Logo;
