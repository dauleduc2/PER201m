function RenderComment({ comments }) {
  if (comments) {
    return (
      <div className="">
        <h2>Comments</h2>
        {comments.map((item) => (
          <div>
            <p>{item.comment}</p>
            <p>
              -- {item.author} {item.date}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}

export default RenderComment;
