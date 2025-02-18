

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};



export default UserCard;