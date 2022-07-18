import fetch from "cross-fetch";
import { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
} from "reactstrap";
import { baseUrl } from "../share/baseUrl";
import RenderComments from "./RenderComment";

function TestFetchComponent() {
  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");

  const _fetchDishes = async () => {
    const data = await fetch(baseUrl + "dishes");
    const json = await data.json();
    setDishes(json);
  };
  const _fetchComments = async () => {
    const data = await fetch(baseUrl + "comments");
    const json = await data.json();
    setComments(json);
  };
  const _onSubmit = async (e, data) => {
    e.preventDefault();

    const res = await fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify({
        id: comments.length,
        dishId: data.id,
        rating: rating,
        comment: comment,
        author: author,
        date: new Date().toString(),
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "same-origin",
    });

    const json = await res.json();

    setComments([...comments, json]);
  };

  useEffect(() => {
    _fetchDishes();
    _fetchComments();
    return () => {};
  }, []);

  return (
    <div className="col-12 col-sm-5">
      {dishes.map((dish) => {
        return (
          <div className="col-12 col-sm-8" key={dish.id}>
            <Card>
              <CardImg top src={baseUrl + dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            <h4>Comments</h4>
            <RenderComments
              comments={comments.filter(
                (item) => item.dishId === parseInt(dish.id, 10)
              )}
            />
            <h4>Your comment</h4>
            <Form>
              <FormGroup>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="comment">Comment:</label>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="comment"
                  onChange={(e) => setComment(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="rating">Rating:</label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="rating"
                  onChange={(e) => setRating(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <button onClick={(e) => _onSubmit(e, dish)}>Submit</button>
              </FormGroup>
            </Form>
          </div>
        );
      })}
    </div>
  );
}

export default TestFetchComponent;
