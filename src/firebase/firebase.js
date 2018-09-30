import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDe7UEVypuDeCbGrv09QKVun7RG7te8XcY",
    authDomain: "expensify-7ac7d.firebaseapp.com",
    databaseURL: "https://expensify-7ac7d.firebaseio.com",
    projectId: "expensify-7ac7d",
    storageBucket: "expensify-7ac7d.appspot.com",
    messagingSenderId: "530721380198"
};

firebase.initializeApp(config);


const database = firebase.database();
const googleAuhtProvider = new firebase.auth.GoogleAuthProvider(); 


export { firebase, googleAuhtProvider, database as default };









// database.ref('expenses')
//   .once('value')
//   .then((snapshot) =>{
//       const expenses = [];

//       snapshot.forEach(childSnapshot => {
//           expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//          }); 
//       });
//       console.log(expenses);
//   })



// database.ref('expenses').push({
//     description: 'mdrrrr',
//     note: 'mdrrrrr',
//     amount: 5555555,
//     createdAt: 2000000000
// })


// database.ref('notes').push({
//     title: 'an note!',
//     body: 'this is my note'
// });

// database.ref().on('value', (snapshot) =>{
//     const sentence = `${snapshot.val().name} is a ${snapshot.val().job.title}`;
//     console.log(sentence);
// })


// database.ref('job/title')
//   .once('value')
//   .then((snapshot) =>{
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) =>{
//       console.log('error fetching data',e);
//   })


// firebase.database().ref().set({
//     name: 'Tanguy De Herdt',
//     age: 26,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'developer',
//         company: 'google'
//     },
//     attributes: {
//         height: 2,
//         weight: 80
//     }
// }).then(() =>{
//     console.log('data is saved');
// }).catch((e) =>{
//     console.log('this failed', e);
// })



// const adaRef2 = firebase.database().ref();
// adaRef2.update({
//     stressLevel: 9,
//     'job/company': 'google'
// })

// firebase.database().ref('age').set(27);

