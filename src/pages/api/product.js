export default async function handler(req, res) {
    try {
      const apiRes = await fetch("https://fakestoreapi.com/products");
  
      if (!apiRes.ok) {
        const text = await apiRes.text();
        console.log("FAKESTORE ERROR:", text);
        return res.status(500).json({ error: "API failed" });
      }
  
      const data = await apiRes.json();
      res.status(200).json(data);
    } catch (err) {
      console.log("API ROUTE ERROR:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
  