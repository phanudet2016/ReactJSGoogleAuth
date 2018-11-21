import React, { Component } from 'react';
import { FIREBASE_AUTH, PROVIDER_AUTH } from '../../firebase'

class welcome extends Component {

  signin () {
    FIREBASE_AUTH.signInWithPopup(PROVIDER_AUTH).then(function (result) {
      let token = result.credential.accessToken
      let user = result.user
      console.log(token, user)
    }).catch(function (error) {
      let errorCode = error.code
      let errorMessage = error.message
      let email = error.email
      let credential = error.credential
      console.log(errorCode, errorMessage, email, credential)
    })
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.signin}>Log in</button>
        </div>
      </div>
    )
  }
}

export default welcome