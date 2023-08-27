import mongoose, { Schema } from "mongoose";

const addSearchSchema = new Schema(
  {
    age: Number,
    location: String,
  },
  {
    timestamps: true,
  }
);

const Search = mongoose.models.Search || mongoose.model("Search", addSearchSchema);

export default Search;
