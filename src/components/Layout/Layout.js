import React , {Component} from 'react';
import Aux from '../../HOC/Aux'
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedraw  from '../Navigation/SideDrawer/SideDraw';

class Layout extends Component {

    state = {
        showSideBar: false
    }


    sideBarHandler = () => {
        this.setState({showSideBar: true})
    }
    backdropHandler = () => {
        this.setState({showSideBar: false})
    }

    render() {

        

        return (
            <Aux>
            <Toolbar open={this.sideBarHandler}/>
            <Sidedraw open={this.state.showSideBar} close={this.backdropHandler} />
            <main className="content">
                {this.props.children}
            </main>
        </Aux>
        )
    }

}
   

export default Layout;