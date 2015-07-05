var React = require('react')

var UserProfiles = React.createClass({
	propTypes:{
		username:React.PropTypes.string.isRequired,
		bio:React.PropTypes.object.isRequired
	},
	render: function(){
		return (
			<div>
				UserProfile <br/>
          		UserName  : {this.props.username} <br/>
	      		Bio : {this.props.bio}
	      	</div>
		)
	}
})

module.exports = UserProfiles;