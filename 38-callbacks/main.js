
/* 
const getUser = (id, cb) => {
    const user = {
        name:'Facundo',
        id
    }

    if(id == 2 ){
        cb('User doesnt exist');
    }else{
        cb(null,user)
    }

}

getUser(1, (err,user)=>{
    if(err){
        return console.log(err);
    }else{
        return console.log(`user name is ${user.name}`);
    }
})
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

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id);

    if (!user) {
        cb(`The user with id ${id} doesn't exist`)
    } else {
        cb(null, user)
    }
}

const getEmail = (user, cb) =>{
    const email = emails.find(email => email.id == user.id)
    if (!email){
        cb(`${user.name} doesn't have email`);
    }else{
        cb(null, {
            id: user.id,
            name: user.name,
            email : email.email
        })
    }
}

getUser(3, (err, user) => {
    if (err) {
        return console.log(err);
    } else {
        getEmail(user, (err,res) =>{
            if (err){
                return console.log(err);
            }else{
                return console.log(res);;
            }
        } );
    }
});


