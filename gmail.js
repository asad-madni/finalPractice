let data = require("./mail.json");
module.exports = { mail };

function mail(username, password) {
  let credentialMatch = false;
  let isBlocked = false;

  for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].emails.length; j++) {
      if (username === data[i].emails[j] && password == data[i].password) {
        credentialMatch = true;
        if (data[i].securityCheck.isBlocked) {
          isBlocked = true;
        }
      }
    }
  }
  if (!isBlocked) return "your account is blocked";

  if (!credentialMatch) return "Invalid Credential";
  else return "Authentication Successful";
}
