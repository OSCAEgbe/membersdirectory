import '../style/style.css';

function Header(){
    return(
        <div className='container'>
            <div className='nav__container'>
            <div><img src="osca-logo.svg" width="70%"/></div>
            <ul>
                <li><a href='#'> Home </a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Github</a></li>
            </ul>
        </div>
            </div>
    );
}

export default Header;