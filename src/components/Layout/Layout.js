import Aux from '../../HOC/Aux'
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;