
export function pnEncrypt (inputString:string) {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString.charAt(i);

    // Check if the character is a number
    if (!isNaN(parseInt(currentChar))) {
      // Convert the number to uppercase using ASCII table

      let randomIncrement = '';

      //This will convert the character either begin with A or K
      if (Math.floor(Math.random() * 2))
        randomIncrement = '0';
      else
        randomIncrement = '10';

      const upperCaseChar = String.fromCharCode(parseInt(currentChar) + 65 + parseInt(randomIncrement));

      result += upperCaseChar;
    } else {
      // Keep non-number characters as they are
      result += currentChar;
    }

    // Attach a random number or lowercase letter
    const randomValue = Math.random() < 0.5 ? Math.floor(Math.random() * 10) : String.fromCharCode(97 + Math.floor(Math.random() * 26));
    result += randomValue;
  }

  return result;
};



export function verificationCodeGenerate() {
  const codeLength = 6; // The length of the verification code
  let verificationCode = '';

  for (let i = 0; i < codeLength; i++) {
    // Generate a random digit (0-9) and append it to the verificationCode string
    const randomDigit = Math.floor(Math.random() * 10);
    verificationCode += randomDigit.toString();
  }

  return verificationCode;
}


/* const generateJwtToken = async (payload, skey) => {

    // Secret key for signing the token
    try {
      const token = jwt.encode(payload, skey);

      return token;
    } catch (error) {
      console.error('Error generating JWT token:', error);
      return null;
    }
  };
 */