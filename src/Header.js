import 'bootstrap/dist/css/bootstrap.css'
import {TiContacts} from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className='container-float'>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Contact Manager</a>
    <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className='navbar-nav ms-auto'>
        <li className=''>
            <NavLink className='nav-link  text-white  ms-1' to="addcontact">Add Contact</NavLink>
         </li>
        <li className=''>
            <NavLink className='nav-link  text-white  ms-1' to="contactlist">Contactlist</NavLink>
        </li>

    </ul>
    </div>
  </div>
</nav>
            
           
            
        </div>
    );
}
export default Header;