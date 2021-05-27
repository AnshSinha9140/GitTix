import mongoose from 'mongoose';
import { Password } from '../services/password';
//interface that describe properties that are required to create a new User
interface userAttrs {
    email: string;
    password: string;
}

//interface that describes the properties that Usermodel has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs:userAttrs): UserDoc;
}

//interface that describes properties that user document has
interface UserDoc extends mongoose.Document {
  email : string;
  password: string;
}
//Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    }
},{ 
    //how data should be transmitted along the network
    //basically customizing what we return to the user
    toJSON: {
       transform(doc, ret){
           ret.id = ret._id;
           delete ret._id;
           delete ret.password;
           delete ret.__v;
       } 
    }
});
//hashing
userSchema.pre('save', async function(done){
  if(this.isModified('password')) {
     const hashed = await Password.toHash(this.get('password'));
     this.set('password', hashed);

  }
  done();
});
//to create a new user adding property to our model
userSchema.statics.build = (attrs: userAttrs) => {
    return new User(attrs);
}
const User = mongoose.model<UserDoc, UserModel>('User', userSchema); //returns type of usermodel

export { User };