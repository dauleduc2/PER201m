import RenderComment from "./renderComment";
import RenderDish from "./renderDish";

function DishDetail({ selectedDish }) {
  return (
    <div className="row">
      <div className="col-12 col-md-5 mt-1">
        <RenderDish dish={selectedDish} />
      </div>
      <div className="col-12 col-md-5 mt-1 w-100 text-left">
        <RenderComment comments={selectedDish.comments} />
      </div>
    </div>
  );
}

export default DishDetail;
