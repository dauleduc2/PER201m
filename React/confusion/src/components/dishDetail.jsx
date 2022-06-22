import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

function DishDetail({ selectedDish }) {
  const _renderDish = (dish) => {
    if (dish !== null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <></>;
    }
  };

  const _renderComments = (comments) => {
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
  };
  return (
    <div className="row">
      <div className="col-12 col-md-5 mt-1">{_renderDish(selectedDish)}</div>
      <div className="col-12 col-md-5 mt-1 w-100 text-left">
        {_renderComments(selectedDish.comments)}
      </div>
    </div>
  );
}

export default DishDetail;
