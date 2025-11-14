export default async function handler(req, res) {
    try {
      const response = await fetch(process.env.API_URL);
  
      if (!response.ok) {
        return res.status(500).json({ error: "API error" });
      }
  
      const data = await response.json();
      return res.status(200).json(data);
  
    } catch (error) {
      console.error("API Error:", error);
      return res.status(500).json({ error: "Server error" });
    }
  }
  