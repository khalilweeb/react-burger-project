import Aux from '../../HOC/Aux'
import './layout.css';
const Layout = (props) => (
    <Aux>
        <div>toolbar, sidebar, backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;