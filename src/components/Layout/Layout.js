import Aux from '../../HOC/Aux'

const Layout = (props) => (
    <Aux>
        <div>toolbar, sidebar, backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;