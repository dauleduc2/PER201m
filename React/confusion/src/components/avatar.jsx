function Avatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />;
}

export default Avatar;
