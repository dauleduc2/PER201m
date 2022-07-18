import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { useSelector } from "react-redux";
import TestFetchComponent from "./TestFetchComponent";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/test" component={TestFetchComponent} />
        <Route
          path="/home"
          component={() => (
            <Home
              dish={dishes.filter((dish) => dish.featured)[0]}
              promotion={
                promotions.filter((promotion) => promotion.featured)[0]
              }
              leader={leaders.filter((leader) => leader.featured)[0]}
            />
          )}
        />
        <Route path="/contactus" component={Contact} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/about" component={() => <About leaders={leaders} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
