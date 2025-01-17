function passwordChecker(password) {
  // 1) cas a : minimum 8 caractères
  if (password.length < 8) {
    return false;
  }

  // 2) cas b : au moins un caractère spécial
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return false;
  }

  return true;
}

module.exports = passwordChecker;
