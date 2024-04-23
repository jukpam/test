import "./header.css";
function Header() {
    const count = 2
    return (
        <div className="header">
            <h1>Header</h1>
            <p>count: {count}</p>
        </div>
    );
}
export default Header;