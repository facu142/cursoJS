
// Una promesa es un objeto con dos callbacks en su interior

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

const getUser = (id) => {
    const user = users.find(user => user.id === id)
    const promise = new Promise((resolve, reject) => {
        if (!user) {
            reject(`No existe un usuario con id ${id}`)
        } else {
            resolve(user)
        }
    })

    return promise;
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)

    const promise = new Promise((resolve, reject) => {
        if (!email) {
            reject(`${user.name} no tiene email`);
        } else {
            resolve({
                id: user.id,
                name: user.name,
                email: email.email
            })
        }
    })
    return promise;
}


getUser(3)
    .then(user => getEmail(user))
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))




