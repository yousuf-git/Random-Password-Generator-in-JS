# Random Password Generator

This project is a random password generator that allows you to generate strong and secure passwords based on your specific requirements. It is written in JavaScript and can be easily customized to suit your needs.

## Features

- Generate passwords of any length
- Include uppercase letters
- Include lowercase letters
- Include numbers
- Include special characters

## Usage

To use the random password generator, simply follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.
3. Enter the desired length of the password.
4. Check the boxes for the character types you want to include.
5. Click the "Generate Password" button.
6. Your random password will be displayed on the screen.

## Example

Here's an example of how you can generate a random password using this tool:

```javascript
const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSpecialCharacters = true;

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters);

console.log(password);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
