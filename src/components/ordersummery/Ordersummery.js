import { Component, React } from "react";
import Aux from '../../HOC/Aux';
import Button from '../UI/button/Button';


class Ordersummery extends Component  {
    componentDidUpdate () {
        console.log('orderSummary did update component');
    }

   
    render () {
        
        const  ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {

            return <li key={igKey}> {igKey} : {this.props.ingredients[igKey]} </li>
    
        });
        
        return (
                <Aux>
                    <h3>Your order:</h3>
                    <p>Your deliceious burger with the following ingredients:</p>
                    <ul>

                            {ingredientsSummary}
                    </ul>
                    <p>Total price : {this.props.price}</p>
                    <p>Countinue to checkout ?</p>
                    
                        <Button classes='Button Danger' clicked={this.props.cancel}>CANCEL</Button>
                        <Button classes='Button Success' clicked={this.props.continue}>CONTINUE</Button>
                </Aux>
    )}
}

export default Ordersummery;