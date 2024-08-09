const upperCase = "ABCDEFGHIJAKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const num = "1234567890"
const char = "~!@#$%^&*()_<>?/;:[]{}|-+"


const len = document.querySelector("#length")
const number = document.querySelector("#numbers")
const upper = document.querySelector("#uppercase")
const lower = document.querySelector("#lowercase")
const cracter = document.querySelector("#specialChar")
const btn = document.querySelector("#generateBtn")

const getrandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatepassword = (password = "") => {

    if (upper.checked) {
        password += getrandomdata(upperCase)
    }
    if (lower.checked) {
        password += getrandomdata(lowerCase)
    }
    if (number.checked) {
        password += getrandomdata(num)
    }
    if (cracter.checked) {
        password += getrandomdata(char)
    }
    if (password.length < len.value) {
        return generatepassword(password)
    }
    // console.log(truncateString(password , leng.value));
    const pass = truncateString(password, len.value);
    document.querySelector("#password").value = pass;
    navigator.clipboard.writeText(pass)

}

generatepassword()

btn.addEventListener(
    "click",
    () => {
        console.log("Button clicked !");
        generatepassword();
    })

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}