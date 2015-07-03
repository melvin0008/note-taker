var React = require('react')

var UserProfiles = React.createClass({
	propTypes:{
		username:React.PropTypes.string.isRequired,
		bio:React.PropTypes.object.isRequired
	},
	render: function(){
		return (
			<div>
          		UserName  : {this.props.username}
	      		Bio : {this.props.bio}
	      	</div>
		)
	}
})

module.exports = UserProfiles;