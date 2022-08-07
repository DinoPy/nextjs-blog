export default function handler(req, res) {
  res.user = {
    token: "tring",
    name: "joan",
  };
  console.log(res);
  res.status(200).json({ text: "Hello" });
}
