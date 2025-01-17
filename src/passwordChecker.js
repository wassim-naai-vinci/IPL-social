function passwordChecker(password) {
  // 1) cas a : minimum 8 caractères
  if (password.length < 8) {
    return false;
  }

  return true;
}

module.exports = passwordChecker;
