export default async function handler(req, res) {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
  
      if (!response.ok) {
        return res.status(500).json({ error: "API error" });
      }
  
      const data = await response.json();
      return res.status(200).json(data);
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
  