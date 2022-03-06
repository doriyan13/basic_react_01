// Imports -
import { Route, Switch } from "react-router-dom";

// import the pages that i want to route between -
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

// Import layout items -
import MainNavigation from "./components/layout/MainNavigation";

/**
 * main, base function compoment.
 * @returns the return of jsx functions must return html elemnt!
 */
function App() {
  /* this section is going to focus on routing in react! */
  // my url - localhost:3000
  // all the things after it are 'routes' that i will define right now (remember that react is single page so i'm not really going to change pages but the proof of consept is the same!)
  // notice that with route i can either nest the components or switch between them!
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact /* exact - to check if it have only '/' and not starting with that.. */>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
