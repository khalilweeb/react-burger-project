import { React } from "react";
import Aux from '../../HOC/Aux';
import Button from '../UI/button/Button';

const ordersummery = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {

        return <li key={igKey}> {igKey} : {props.ingredients[igKey]} </li>

    });
    return (
        <Aux>
            <h3>Your order:</h3>
            <p>Your deliceious burger with the following ingredients:</p>
            <ul>

                    {ingredientsSummary}
            </ul>
            <p>Total price : {props.price}</p>
            <p>Countinue to checkout ?</p>
            
                <Button classes='Button Danger' clicked={props.cancel}>CANCEL</Button>
                <Button classes='Button Success' clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
}

export default ordersummery;