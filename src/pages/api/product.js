export default async function handler(req, res) {
    try {
      const apiRes = await fetch("https://fakestoreapi.com/products");
      const data = await apiRes.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }
  