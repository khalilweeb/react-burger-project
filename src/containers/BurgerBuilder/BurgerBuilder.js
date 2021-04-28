import React , {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/buildControls/BuildControls';


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients : {
                meat: 0,
                salad: 0,
                cheese: 0,
                bacon: 0
            }
        }
    }
    render() {
        return (
            <Aux>   
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
                
            </Aux>
            
        )
    }
}

export default BurgerBuilder;