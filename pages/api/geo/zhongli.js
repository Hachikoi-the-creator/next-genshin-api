export default function handler(req, res) {
  console.log("steppies");
  res.status(200).json({ name: "John Doe" });
}
