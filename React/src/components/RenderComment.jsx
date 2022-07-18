function RenderComments({ comments }) {
  return (
    <div className="col-12 col-sm-7">
      <h2>Comments</h2>
      {comments.map((item) => (
        <div key={item.id}>
          <h6>{"id" + item.id + " - rating " + item.rating}</h6>
          <p>{item.comment}</p>
          <p>
            {item.author} {item.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RenderComments;
