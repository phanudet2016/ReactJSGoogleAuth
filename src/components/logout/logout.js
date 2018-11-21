import React, { Component } from 'react';
import { FIREBASE_AUTH } from '../../firebase'

class logout extends Component {

  signOut () {
    FIREBASE_AUTH.signOut().then(function () {
      console.log('signOut sucess')
    })
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.signOut}>Log out</button>
        </div>
      </div>
    )
  }
}

export default logout