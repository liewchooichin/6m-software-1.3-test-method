/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
function getDatabaseCredential(env){
    let credential = "";
    switch(env) {
        case "DEV": // change
            credential = "devuser:password"
            break;
        case "STAGE":
            credential = "stageuser:password";
            break;
        case "PROD": 
            credential = "produser:password";
            break;
        default:
            credential = databaseCredential;
    }
    return credential;
}

databaseCredential = getDatabaseCredential(env);

console.log(`Database credential for environment ${env} is ${databaseCredential}`);

module.exports = { getDatabaseCredential };
