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
