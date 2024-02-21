import Contact from "./Contact";

const User = ({ user }) => {
  const { name, age, picture, ...rest } = user;
  return (
    <div className="userProfile">
      <img src={picture} alt={name} />
      <div>
        <p>Name:{name} </p>
        <p>Age: {age}</p>
        <Contact contact={rest} />
      </div>
    </div>
  );
};

export default User;
