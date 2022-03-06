import { Link } from "react-router-dom";

//import css custom modules -
// * it's importent to know that the all the css data is only for this module alone, meaning try accessing that from another place isn't possible without calling the module.
// ** another thing to note that the name of css module isn't mendatory to be the same but rather best-practice for large-scale projects and maintaining!
import classes from './MainNavigation.module.css';

/* we will use 'Link' to use the a-herf but instead of sending a request and reloading 
    the webpage and then having to handle all the request and load the components accordingly
    this Link component do it for us! */

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to='/' >All Meetup</Link>
          </li>
          <li>
            <Link to = '/new-meetup' >New Meetup</Link>
          </li>
          <li>
            <Link to = '/favorites' >Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
