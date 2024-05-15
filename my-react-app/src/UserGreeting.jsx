import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcome = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">User not logged in!</h2>
    
    return (props.isLoggedIn ? welcome : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string, 
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "User",
}

export default UserGreeting