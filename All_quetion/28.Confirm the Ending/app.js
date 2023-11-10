
//Check if a string (first argument, str ) ends with the given target string (second argument, target ). This challenge can be solved with the . endsWith() method



function confirmEnding(string, confirm) {
    if (string.substr(-confirm.length) === confirm) {
      return true;
    } else {
      return false;
    }
  }
  confirmEnding('Ashish', 'h');
  