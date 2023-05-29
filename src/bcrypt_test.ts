const b = require("bcryptjs")

const pass = "moje tajne hasło"

const encryptPass = async (password:string) => {

    let encryptedPassword = await b.hash(password, 10);
    console.log({ encryptedPassword: encryptedPassword });
}

const decryptPass = async (userpass:string, encrypted:string) => {

    let decrypted = await b.compare(userpass, encrypted)
    console.log(decrypted);

}

decryptPass(pass, "$2a$10$9vVN9nX3Os1off9hCAV24eW0T/C.NwL1FooOyLjU9BbDO/w1jBAxy")

encryptPass(pass)