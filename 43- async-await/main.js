/*  const getName = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Facundo')
        },1000)

    })
}
//getName()
//  .then(name => console.log(name))
 
const sayHello = async() => {
    const name = await getName();

    return`Hello ${name}`;
}

sayHello()
.then(res => console.log(res))

*/

const users = [
    {
        id: 1,
        name: 'Facundo'
    },
    {
        id: 2,
        name: 'Dorian'
    },
    {
        id: 3,
        name: 'Carlos'
    }
];

const emails = [
    {
        id: 1,
        email: 'facundo@gmail.com'
    },
    {
        id: 2,
        email: 'dorian@gmail.com'
    }
];

const getUser = async (id) => {
    const user = users.find(user => user.id === id)

    if (!user) {
        throw new Error(`No existe un usuario con id ${id}`)
    } else {
        return user
    }

}

const getEmail = async (user) => {

    const email = emails.find(email => email.id == user.id)

    if (!email) {
        throw new Error(`${user.name} no tiene email`);
    } else {
        return {
            id: user.id,
            name: user.name,
            email: email.email
        }
    }
}

const getInfo = async (id) => {
    try {
        const user = await getUser(id);
        const res = await getEmail(user);
        return `${user.name}'s email is ${res.email} `
    }catch(error){
        console.log(error);
    }    
}

getInfo(3)
    .then(res => console.log(res));
/*
getUser(2)
    .then(user => getEmail(user))
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
*/

