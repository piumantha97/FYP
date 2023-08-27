import mongoose, { Schema } from "mongoose";

const addSearchSchema = new Schema(
  {
    age: Number,
    gender: String,
    location: Number,
    occupation: String,
    education: String,

  },
  {
    timestamps: true,
  }
);

const Search = mongoose.models.Search || mongoose.model("Search", addSearchSchema);

export default Search;
