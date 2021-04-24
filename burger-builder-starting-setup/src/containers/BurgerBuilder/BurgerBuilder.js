import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuidControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

  state = {
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    // console.log(this.props)
    // axios.get('/ingredients.json')
    //   .then(response => {
    //     this.setState({ ingredients: response.data })
    //   })
    //   .catch(error => {
    //     this.setState({ error: true });
    //     console.log(error)
    //   })
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  // addIngredientHandler = (type) => {

  //   // update the ingredients
  //   const oldCount = this.state.ingredients[type]
  //   const updatedCount = oldCount + 1
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount

  //   // update the price
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;

  //   // update the state
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   })
  //   this.updatePurchaseState(updatedIngredients);
  // }
  // removeIngredientHandler = (type) => {
  //   // update the ingredients
  //   let oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return
  //   }
  //   const updatedCount = oldCount - 1
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount

  //   // update the price
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;

  //   // update the state
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients
  //   })
  //   this.updatePurchaseState(updatedIngredients);
  // }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    // alert('You Continue!');
    // this.setState({ loading: true })
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice, //in real app this in calculated tp the server
    //   customer: {
    //     name: 'Constantin Antochi',
    //     address: {
    //       street: 'Test Street nr. 69',
    //       zipCode: '077025',
    //       country: 'Romania'
    //     },
    //     email: 'test@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // }
    // axios.post('/orders.json', order)
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, purchasing: false });
    //   })

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.props.price);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />


    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}></Burger>
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.price}
      />;
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    // {salad: true, meat: false, ...}
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}
const mapDispatchtoProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  }
}



export default connect(mapStateToProps, mapDispatchtoProps)(withErrorHandler(BurgerBuilder, axios));