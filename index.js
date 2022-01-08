const mongoose = require('mongoose');

// import user schema file / model file for user table 
const User = require('./User');

mongoose.connect("mongodb://localhost/testdb");

// Add User 
//const user = new User({name: "John", age: 30});
//user.save().then(()=>console.log("User Saved"));

// Add user using asyn await 
// run();
// async function run(){
//     //const user = new User({name: "joe", age: 30});
//     //await user.save()

//     //one more way 
//     const user = await User.create(
//         {
//             name:"Maria",
//             age:22, 
//             email: 'Abc',
//             hobbies : ['Dancing', 'singing'],
//             address: {
//                 street: "bkroad",
//                 city: 'nmh'
//             }
//         }
//     )

//     // lets update name 
//     user.name = "RK";
//     await user.save()
//     console.log(user);
// }

// Good Practice to add data is like this 
// saveMe();

// async function saveMe (){
//     try {
//         const user = await User.create({
//             name: "new user",
//             age: 22,
//             email : 'ABC@gmail.com'
//         })
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//         //console.log(error.errors.age);
//     }
// }


// Query Basics 
const findMe =  async () => {
    try {
        // for find all users with name new user
       // const user = await User.find({name: 'new user'})

        //check if user with this name or not it returns true or false 
       //const user = await User.exists({name:'new'})

       //for delete one data  
       //const user = await User.deleteOne({name:'joe'})

        //find using where clause 
       // const user = await User.where('name').equals('new user').where('age').gt('20').lt(22)

        // with multiple where 
        // const user = await User.where('name')
        // .equals('new user')
        // .where('age')
        // .gt('20')
        // .lt(22)
        // .limit(2)
        // .select('age')
        // .populate('bestFriend')

        // user[0].age = 24
        // user[0].bestFriend = '61d9a4182ddc4b21e33c2686',
        // await user[0].save()

        //  For find one User 
        //const user = await User.findOne({name: "new user"})

        // find by id
        //const user = await User.findById('61d9a4182ddc4b21e33c2686')

        // Schema methods and virtuals
        //user.sayHi()
        //const user = await User.findByName('new user')
        //const user = await User.find().byName("new user")
       // const user = await User.where().byName("new user")

        const user = await User.findOne({name: "codergirl", email: "abc@example.com"})
        console.log(user);
        await user.save()
        console.log(user.namedEmail);
        
        
    } catch (e) {
        console.log(e.message);
    }
}

findMe();

