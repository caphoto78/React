import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import moduleName from '../../components/Burger/BuidControls/BuildControls';
import BuildControls from '../../components/Burger/BuidControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {

    // update the ingredients
    const updatedCount = this.state.ingredients[type] + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount

    // update the price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    // update the state
    this.setState({
      totoalPrice: newPrice,
      ingredients: updatedIngredients
    })

  }
  removeIngredientHandler = (type) => { }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;