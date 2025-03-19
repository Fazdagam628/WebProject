import "./App.css";

const UserProfile = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Umur: {age}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
};

export default UserProfile;
