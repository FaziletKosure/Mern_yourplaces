import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App=()=> {
  return (
   
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
      
      <Route path="/:userId/places" exact component={UserPlaces}/>
      <Route path="/places/new" component={NewPlace}/>
      <Route exact path="/" component={Users}/>
      <Redirect to='/'/>
      </Switch>
      </main>

    </Router>
  );
}

export default App;
