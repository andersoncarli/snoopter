export default function Produtos(req, res) {
  console.log(req.query.id)
  res.status(200).json({ id: req.query.id })
}