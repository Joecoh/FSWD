// passwordChecker.jsconst readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPasswordStrength(password) {
  let strength = 0;
  
  if (password.length >= 8) strength++;
  
  if (/[A-Z]/.test(password)) strength++;
  
  if (/[a-z]/.test(password)) strength++;
  
  if (/[0-9]/.test(password)) strength++;
  
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  let status = "";
  switch(strength) {
    case 5: status = "Very Strong"; break;
    case 4: status = "Strong"; break;
    case 3: status = "Medium"; break;
    case 2: status = "Weak"; break;
    default: status = "Very Weak"; break;
  }

  return status;
}

rl.question("Enter your password to check strength: ", (password) => {
  const result = checkPasswordStrength(password);
  console.log(`Password Strength: ${result}`);
  rl.close();
});
