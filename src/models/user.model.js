import { Schema } from "mongoose";
import { bcrypt } from "bcrypt"
import jwt from "jsonwebtoken";
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  firstname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }

}, { timestamps: true })
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})
UserSchema.methods.isPasswordMatch = async function (password) {
  return await bcrypt.compare(password, this.password)
}
UserSchema.methods.generateAccessToken = function () {
  const accesstoken= jwt.sign
    ({
      _id: this._id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone

    },
      process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN })
  return accesstoken;
}
UserSchema.methods.generateRefreshToken = function () {
  const refreshtoken = jwt.sign
    ({   
      _id: this._id,
    },
      process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN })
  return refreshtoken;
}

export const User = mongoose.model("User", UserSchema)