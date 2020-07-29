import React from 'react';
import './App.scss';
import {SignInandSignout} from './page/sign-in-and-sign-up/sign-in-sign-out'
import {Route,Switch } from 'react-router-dom';
import Header from './component/header/header';
import {HomePage} from './page/hompage/homepage';
import ShopPage from './page/shoppage/ShopPage';
import {auth, createUserProfileDocument} from  './firebase/firebase.util';
import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component{
  unsunscribeFromAuth =null

  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsunscribeFromAuth=auth.onAuthStateChanged(async userAuth=> 
    { 
        if(userAuth)
        {
          const userRef =await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot=>{
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
            
          });
        }

        // this part has some doubt his video doesn't match
        else{
          setCurrentUser(userAuth);
        }
    }
    )
  }
  componentWillUnmount(){

    this.unsunscribeFromAuth();
  }
  render(){
   return (
    <div >
      <Header />
      <Switch>
        <Route exact component={HomePage} path='/'/>
        <Route exact component={ShopPage} path='/shop'/>
        <Route exact component={SignInandSignout} path='/signin'/>
      </Switch>
        {/* Hello world !! */}
    </div>
  );
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});


export default connect(null,mapDispatchToProps)(App);
