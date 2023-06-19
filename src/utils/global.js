exports.generateCode = () => {
    const randomNumber = Math.floor(Math.random() * 999999);
    return randomNumber.toString().padStart(6, '0');
}