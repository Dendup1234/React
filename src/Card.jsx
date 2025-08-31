import Profilepic from "./assets/react.svg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" alt="profile-pic" src={Profilepic}></img>
      <h1 className="card-title">Dendup</h1>
      <p className="card-paragraph">
        This is dendup and i am practicing the react now
      </p>
    </div>
  );
}

export default Card;
