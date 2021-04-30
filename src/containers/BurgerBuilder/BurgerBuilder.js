import React , {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/buildControls/BuildControls';

const PRICES = {
    salad: 0.5,
    cheese: 0.6,
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
        price: 3,
        purchaseble: true
    };


    updatePurshaseHandler = (price) => {
        if(price <= 3) {
            this.setState({purchaseble: true});
            
        } else {
            this.setState({purchaseble: false});
          
            
        }
        return this.state.purchaseble;
    }
    
    
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
        this.updatePurshaseHandler(totalPrice)

       }
       removeIngredientsHandler(type){
        //adding ingredient to the copied state

  
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const addcount = oldCount - 1;
        const updatedIngredients =  {...this.state.ingredients};
        updatedIngredients[type] = addcount;
        //calculating the price
        
        const oldPrice = this.state.price;
        const priceaddintion = PRICES[type];
        const totalPrice =   oldPrice - priceaddintion; 

        this.setState({price: totalPrice ,  ingredients: updatedIngredients });
        this.updatePurshaseHandler(totalPrice)
       
       }
     
    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
       
        return (
            <Aux>   
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                price={this.state.price}
                more={ this.addIngredientsHandler.bind(this)} 
                less={ this.removeIngredientsHandler.bind(this)} 
                disabled={disabledInfo}
                orderdisable={this.state.purchaseble}/>
                
            </Aux>
            
        )
    }
}

export default BurgerBuilder;