import {firebase, googleAuhtProvider} from '../../firebase/firebase';




export const login = (uid) => {
    return{
        type:'LOGIN',
        uid
    }
}


export const startLogin = () =>{
    return dispatch =>{
       return firebase.auth().signInWithPopup(googleAuhtProvider);
    }
}



export const logout = () => {
  return {
    type: "LOGOUT"
  };
};



export const startLogout = () =>{
    return dispatch =>{
        return firebase.auth().signOut();
    }
}