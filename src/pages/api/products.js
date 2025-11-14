export default async function handler(req, res) {
  try {
    const apiRes = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Vercel-Serverless)",
        "Accept": "application/json",
      },
      cache: "no-store",
    });

    if (!apiRes.ok) {
      const text = await apiRes.text();
      console.log("FAKESTORE ERROR:", text);
      return res.status(500).json({ error: "API failed" });
    }

    const data = await apiRes.json();
    return res.status(200).json(data);

  } catch (err) {
    console.log("API ROUTE ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
