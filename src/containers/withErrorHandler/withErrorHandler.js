import React, {Component} from 'react';
import Modal from '../../components/UI/model/Model';
import Aux from '../../HOC/Aux';

const withErrorHandler =( WrappedComponent , axios)=> {
    return class extends Component {
        state = {
            error: null 
        }
        componentDidMount() {
            axios.interceptors.request.use(req=> {
                this.setState({error : null})
                return req;

            } );
            axios.interceptors.response.use(res => res ,error=> {
                this.setState({error : error})

            } );
        }

        hideModelHandler = () => {
            this.setState({error: null})
        }
        render() {
            
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    clicked={this.hideModelHandler}>
                        {this.state.error ? this.state.error.message : null}
                        </Modal>
                 <WrappedComponent  {...this.props}/>
                </Aux>
       
                )

        }
    } 

}

export default withErrorHandler;