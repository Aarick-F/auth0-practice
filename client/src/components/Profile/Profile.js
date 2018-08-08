import React, { Component } from 'react';
import "./profile.css";

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        if(err) throw err;
        this.setState({ profile });
        console.log(this.state);
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  
  render() {
    const { profile } = this.state;
    return (
      <div className="profileWrapper">
        <h1>{profile.nickname}</h1>
      </div>
    );
  }
}

export default Profile;