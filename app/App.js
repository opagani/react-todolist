var React = require('react');
var ListContainer = require('./ListContainer');

var App = React.createClass({
	render () {
		return (
			<div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div> 
		)
	}
});

React.render(<App />, document.getElementById('app'));