const mongoose =  require('mongoose')
let connectionString = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.ue2ejns.mongodb.net/RecipeApp?retryWrites=true&w=majority`


mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});