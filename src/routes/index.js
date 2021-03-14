import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from '../pages/home/home';
import Registration from '../pages/registration/registration';

export default function Routes() {
  return (
  	<>
  		<Switch>
	      <Route path="/registration" component={Registration} />
	      <Route exact path="/" component={Home} />
      	</Switch>
    </>
  );
}