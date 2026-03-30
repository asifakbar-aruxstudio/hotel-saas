const roomSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  name: String,
  price: Number,
  available: Boolean,
});

export default mongoose.model("Room", roomSchema);