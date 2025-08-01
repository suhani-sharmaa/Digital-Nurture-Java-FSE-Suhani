const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h1>Welcome back User.</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
