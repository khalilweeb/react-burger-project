import React , {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/buildControls/BuildControls';

const PRICES = {
    salad: 0.5,
    chesse: 0.6,
    bacon: 0.7,
    meat : 1.5

}

class BurgerBuilder extends Component {
    
    state = {
        ingredients : {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        price: 3 
    };
    
    addIngredientsHandler(type){
        //adding ingredient to the copied state

  
        const oldCount = this.state.ingredients[type];
        const addcount = oldCount + 1;
        const updatedIngredients =  {...this.state.ingredients};
        updatedIngredients[type] = addcount;
        //calculating the price
        const oldPrice = this.state.price;
        const priceaddintion = PRICES[type];
        const totalPrice = priceaddintion + oldPrice; 

        this.setState({price: totalPrice ,  ingredients: updatedIngredients });


       }

    render() {
        return (
            <Aux>   
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={ this.addIngredientsHandler.bind(this)}/>
                
            </Aux>
            
        )
    }
}

export default BurgerBuilder;