import fbConfig from '../../firebase/fb-config';

import {
  loginError,
  logoutError,
  receiveLogin,
  receiveLogout,
  receiveSignUp,
  requestLogin,
  requestLogout,
  requestSignUp,
  SignUpError,
  verifyError,
  verifyRequest,
  verifySuccess,
  passwordResetRequest,
  passwordResetSuccess,
  passwordResetError,
} from './auth.actions';

export const loginUser = user => dispatch => {
  dispatch(requestLogin());
  let authUser = {};
  fbConfig
    .auth()
    .setPersistence(fbConfig.auth.Auth.Persistence.SESSION)
    .then(() => {
      return fbConfig
        .auth()
        .signInWithEmailAndPassword(
          user.email.toString().trim(),
          user.password
        );
    })
    .then(user => {
      authUser = user.user;
      return fbConfig
        .firestore()
        .doc('users/' + user.user.uid)
        .get()
        .then(user => user.data());
    })
    .then(newUser => dispatch(receiveLogin(newUser, authUser)))
    .catch(error => dispatch(loginError(error)));
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  fbConfig
    .auth()
    .signOut()
    .then(() => dispatch(receiveLogout()))
    .catch(error => dispatch(logoutError(error)));
};

function formatString(str) {
  return str
    .replace(/(\B)[^ ]*/g, match => match.toLowerCase())
    .replace(/^[^ ]/g, match => match.toUpperCase());
}

export const registerUser =
  ({ email, password, firstName, middleName }) =>
  dispatch => {
    let newUser = {};
    dispatch(requestSignUp());
    fbConfig
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        res.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => (newUser = res));
        return fbConfig
          .firestore()
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName: formatString(firstName),
            middleName: formatString(middleName),
            email: email.toString().trim(),
          });
      })
      .then(() => {
        fbConfig
          .firestore()
          .doc('users/' + newUser.user.uid)
          .get()
          .then(user => dispatch(receiveSignUp(user.data(), newUser.user)));
      })
      .catch(error => dispatch(SignUpError(error)));
  };

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  fbConfig.auth().onAuthStateChanged(user => {
    if (user !== null) {
      fbConfig
        .firestore()
        .doc('users/' + user.uid)
        .get()
        .then(newUser => dispatch(receiveLogin(newUser.data(), user)));
    } else {
      dispatch(verifyError());
    }
    dispatch(verifySuccess());
  });
};

export const resetPassword =
  ({ email }) =>
  dispatch => {
    dispatch(passwordResetRequest());
    fbConfig
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => dispatch(passwordResetSuccess()))
      .catch(e => dispatch(passwordResetError(e.message)));
  };
