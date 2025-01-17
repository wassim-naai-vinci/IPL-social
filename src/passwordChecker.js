function passwordChecker(password) {
  // 1) cas a : minimum 8 caractères
  if (password.length < 8) {
    return false;
  }

  // 2) cas b : at least one special character
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return false;
  }

  // 3) cas c : at least one digit
  const digitRegex = /\d/;
  if (!digitRegex.test(password)) {
    return false;
  }

  // 4) cas d : no "IPL" (case-insensitive)
  if (password.toLowerCase().includes("ipl")) {
    return false;
  }

  return true;
}

module.exports = passwordChecker;
