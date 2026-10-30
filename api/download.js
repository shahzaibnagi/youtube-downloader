const ytdl = require("ytdl-core");

export default async function handler(req, res) {
  const videoURL = req.query.url;
  const formatType = req.query.format || "mp4";

  if (!videoURL || !ytdl.validateURL(videoURL)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    const info = await ytdl.getInfo(videoURL);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, "_");

    if (formatType === "mp3") {
      res.setHeader("Content-Disposition", `attachment; filename="${title}.mp3"`);
      res.setHeader("Content-Type", "audio/mpeg");
      ytdl(videoURL, { filter: "audioonly", quality: "highestaudio" }).pipe(res);
    } else {
      res.setHeader("Content-Disposition", `attachment; filename="${title}.mp4"`);
      res.setHeader("Content-Type", "video/mp4");
      ytdl(videoURL, { filter: "audioandvideo", quality: "highest" }).pipe(res);
    }
  } catch (error) {
    console.error("download failed:", error.message);
    res.status(500).json({ error: "Failed to download video." });
  }
}
