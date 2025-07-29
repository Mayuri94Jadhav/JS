// if statement

const userLoggedIn = true
const githubAccount = true

const loggedInFromeGoogle = false
const loggedInFromeEmail = true
if(userLoggedIn && githubAccount){
    console.log("Allow to Applay ");
    
} 
 if (loggedInFromeGoogle || loggedInFromeEmail){
    console.log("User Loggrd in ");
    
 }


