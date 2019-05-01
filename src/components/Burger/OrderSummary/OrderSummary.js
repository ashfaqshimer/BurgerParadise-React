import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span styles={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}{" "}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A scrumptious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>The Total Price is: Rs. {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.proceed}>
        PROCEED
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
