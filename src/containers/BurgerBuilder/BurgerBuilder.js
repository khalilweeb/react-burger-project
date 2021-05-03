import React , {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/buildControls/BuildControls';
import Modal from '../../components/UI/model/Model';
import OrderSummary from '../../components/ordersummery/Ordersummery';

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
        purchaseble: true,
        purchasing : false
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
       purchaseHandler = () =>{
           this.setState({purchasing: true})
       }
       hideBackdropHandler = () => {
        this.setState({purchasing: false})
       }
       purchaseContinueHandler = () => {
           alert('You can\'t contunie in this opperation');
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
                <Modal show={this.state.purchasing} clicked={this.hideBackdropHandler}>
                    <OrderSummary 
                    price={this.state.price.toFixed(2)}
                    ingredients={this.state.ingredients} 
                    cancel={this.hideBackdropHandler} 
                    continue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                price={this.state.price}
                more={ this.addIngredientsHandler.bind(this)} 
                less={ this.removeIngredientsHandler.bind(this)} 
                disabled={disabledInfo}
                orderdisable={this.state.purchaseble}
                ordered={this.purchaseHandler}/>
                
            </Aux>
            
        )
    }
}

export default BurgerBuilder;