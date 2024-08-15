const NavBar = ({cartCount}) => (
    <header className="header">
        <h1>Courses</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/cart">cart ({cartCount})</Link>
        </nav>
    </header>
);