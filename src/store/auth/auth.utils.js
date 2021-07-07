import fbConfig from "../../firebase/fb-config";

import {
  loginError,
  logoutError,
  passwordResetError,
  passwordResetRequest,
  passwordResetSuccess,
  receiveLogin,
  receiveLogout,
  receiveSignUp,
  requestLogin,
  requestLogout,
  requestSignUp,
  SignUpError,
  verifyError,
  verifyRequest,
  verifySuccess
} from "./auth.actions";

import {CREATE_USER} from "../../apollo/mutations/user_mutations";
import {GET_USER} from "../../apollo/queries/user_queries";

export const loginUser = ({email, password}) => dispatch => {
  dispatch(requestLogin());
  fbConfig.auth().setPersistence(fbConfig.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return fbConfig.auth().signInWithEmailAndPassword(email.toString().trim(), password)
    })
    .then(async (userCredential) => {
      let result = await getUser({firebaseID: userCredential.user.uid});
      if (result) {
        if (result.error) {
          dispatch(loginError(result.error))
        } else {
          dispatch(receiveLogin({firebaseUser: userCredential.user, gqlUser: result}));
        }
      } else {
        dispatch(receiveLogin({firebaseUser: userCredential.user, gqlUser: null}));
      }
    })
    .catch((error) => {
      dispatch(loginError(error))
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  console.log("here")
  fbConfig.auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
      window.location.href = "/";
    })
    .catch(error => dispatch(logoutError(error)));
};

// fbConfig.auth()
//   .signOut()

export const registerUser = ({firstName, middleName, lastName, email, phoneNumber, password}) => async dispatch => {
  dispatch(requestSignUp());
  let firebaseUser = {}
  fbConfig.auth()
    .createUserWithEmailAndPassword(email.toString().trim(), password)
    .then(res => {
      firebaseUser = res.user;
      fetch('https://zoritt-back-end-api.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: CREATE_USER,
          variables: {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            userType: "Normal",
            email: email.toString().trim(),
            phoneNumber: phoneNumber,
            firebaseId: res.user.uid
          },
        }),
      })
        .then(res => res.json())
        .then((res) => {
          let result = res.data['userCreateOne']['record'];
          dispatch(receiveSignUp({firebaseUser: firebaseUser, gqlUser: result}));
        })
        .catch((error) => dispatch(SignUpError(error)));
    })
    .catch(error => dispatch(SignUpError(error)));
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  fbConfig.auth()
    .onAuthStateChanged(async (user) => {
      if (user !== null) {
        let result = await getUser({firebaseID: user.uid})
        if (result) {
          if (result.error) {
            dispatch(verifyError());
          } else {
            dispatch(receiveLogin({firebaseUser: user, gqlUser: result}));
          }
        } else {
          dispatch(receiveLogin({firebaseUser: user, gqlUser: null}));
        }
      } else {
        dispatch(verifyError());
      }
      dispatch(verifySuccess());
    });
};

export const resetPassword = ({email}) => dispatch => {
  dispatch(passwordResetRequest())
  fbConfig.auth().sendPasswordResetEmail(email)
    .then(() => dispatch(passwordResetSuccess()))
    .catch(e => dispatch(passwordResetError(e.message)));
}

const getUser = async ({firebaseID}) => {
  let result = null;
  await fetch('https://zoritt-back-end-api.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GET_USER,
      variables: {
        firebaseId: firebaseID
      },
    }),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.data['userOne'] !== null) {
        result = res.data['userOne'];
      } else {
        result = null
      }
    })
    .catch((error) => {
      result = {error}
    });
  return result
}