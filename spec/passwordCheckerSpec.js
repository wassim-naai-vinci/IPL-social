const passwordChecker = require("../src/passwordChecker");

describe("passwordChecker - Step 1: Min length 8", () => {
  it("Should fail if password length < 8 chars", () => {
    expect(passwordChecker("Ab!1")).toBe(false);
  });

  it("Should pass if password length is exactly 8 chars", () => {
    // Exemple: "Abcdef1!" fait 8 caractères et contient un caractère spécial
    expect(passwordChecker("Abcdef1!")).toBe(true);
  });

  it("Should fail if password is empty", () => {
    // Exemple: "" est vide
    expect(passwordChecker("")).toBe(false);
  });
});

describe("passwordChecker - Step 2: Special character", () => {
  it("Should fail if there is no special character", () => {
    // "Abcdef12" ne contient aucun caractère spécial
    expect(passwordChecker("Abcdef12")).toBe(false);
  });

  it("Should pass if there is at least one special character", () => {
    // "Abcdef12!" contient '!'
    expect(passwordChecker("Abcdef12!")).toBe(true);
  });
});

describe("passwordChecker - Step 3: Digit presence", () => {
  it("Should fail if there is no digit", () => {
    expect(passwordChecker("Abzdef!!")).toBe(false);
  });

  it("Should pass if there is at least one digit", () => {
    expect(passwordChecker("Qbcg!123")).toBe(true);
  });
});
