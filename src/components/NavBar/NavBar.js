import './NavBar.css'

export function NavBar() {
    return (
        <div className="nav">
            <ul className="list">
                <li className="listP" href=".home">Home</li>
                <li className="listP">About</li>
                <li className="listP">Experience</li>
                <li className="listP">Projects</li>
            </ul>
        </div>
    ); 
}