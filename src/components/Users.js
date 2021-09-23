import React, { Component } from 'react';
import { connect } from 'react-redux';
// DO NOT FORGET TO IMPORT THE CONNECT BEFORE YOU USE IT BELOW oy

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.count} Users!

        {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)} 
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    count: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
