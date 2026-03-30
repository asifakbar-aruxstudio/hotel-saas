const hotelSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  address: String,
});

export default mongoose.model("Hotel", hotelSchema);