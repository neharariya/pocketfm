import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("pocketfm_db"); // Replace with your database name

    if (req.method === "GET") {
      // Fetch all episodes
      const episodes = await db.collection("episodes").find({}).toArray();
      res.status(200).json(episodes);
    } else if (req.method === "POST") {
      // Add a new episode
      const { title, duration, description } = req.body;
      const result = await db.collection("episodes").insertOne({
        title,
        duration,
        description,
      });
      res.status(201).json({ message: "Episode added successfully", result });
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
