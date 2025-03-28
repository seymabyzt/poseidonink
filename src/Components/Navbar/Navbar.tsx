import LangButton from '../Atoms/LangButton/langButton';
import './Navbar.module.css';
import logo from '../../assets/logoPic.png';
import Switch from '../Atoms/Switch/Switch';
import logoTitle from '../../assets/logoTitle.png';

export default function Navbar() {

  return (
 <>
 <nav className="navbar navbar-expand-lg">
  <div className="container">
    <img src={logo} width={75} alt="poseidoninklogo"/>
    <div className='navbar-brand'>
      <img src={logoTitle} width={150} alt="poseidoninklogo" />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <Switch></Switch>
    </button>
  
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
      <ul className="navbar-nav">
      <LangButton></LangButton>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
    </div>
    </div>
</nav>

 </>
  );
}
