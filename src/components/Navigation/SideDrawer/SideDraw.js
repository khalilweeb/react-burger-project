import react from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../navigation';
import './sidedraw.css';
import Backdrop from '../../UI/backdrops/BackDrop';
import Aux from '../../../HOC/Aux';

const sidedraw = (props) => {
    
    
    const classes = ['Sidedraw', 'close'];
    if(props.open) {
        classes[1] = 'open';
    }
    return (

        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={classes.join(' ')}>
                <Logo/>
                <nav>
                    <Navigation/>
                </nav>
           
            </div>
        </Aux>
        
    )
    
};

export default sidedraw;