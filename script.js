// complete the given function

function palindrome(str){
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}

module.exports = palindrome
