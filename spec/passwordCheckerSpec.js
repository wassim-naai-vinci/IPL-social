const passwordChecker = require("../src/passwordChecker");

describe("passwordChecker - Step 1: Min length 8", () => {
  it("Should fail if password length < 8 chars", () => {
    expect(passwordChecker("Ab!1")).toBe(false);
  });

  // Exemple: "Abcdef1!" fait 8 caractères et contient un caractère spécial
  it("Should pass if password length is exactly 8 chars", () => {
    expect(passwordChecker("Abcdef1!")).toBe(true);
  });

  it("Should fail if password is empty", () => {
    expect(passwordChecker("")).toBe(false);
  });
});

describe("passwordChecker - Step 2: Special character", () => {
  it("Should fail if there is no special character", () => {
    // "Abcdef12" ne contient aucun caractère spécial
    expect(passwordChecker("Abcdef12")).toBe(false);
  });

  it("Should pass if there are multiple special characters", () => {
    // "Abc!def@12" contient '!' et '@'
    expect(passwordChecker("Abc!def@12")).toBe(true);
  });

  it("Should pass if there is at least one special character", () => {
    // "Abcdef12!" contient '!'
    expect(passwordChecker("Abcdef12!")).toBe(true);
  });
});
