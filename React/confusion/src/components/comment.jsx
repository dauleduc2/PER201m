function Comment({ author, text, date }) {
  return (
    <div className="">
      <div>
        <img src={author.avatarUrl} alt={author.name} />
        <div>{author.name}</div>
      </div>
      <div>{text}</div>
      <div>{new Date(date).toLocaleDateString()}</div>
    </div>
  );
}

export default Comment;
