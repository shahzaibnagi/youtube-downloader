# YouTube Downloader

A single serverless endpoint that takes a YouTube URL and streams back the file — video as MP4, audio as MP3.

## Files

| File | Job |
|---|---|
| `public/index.html` | Small interface for pasting a link |
| `api/download.js` | The endpoint |
| `package.json` | `ytdl-core` dependency and the start script |

## Endpoint

```
GET /api/download?url=https://www.youtube.com/watch?v=...&format=mp4
GET /api/download?url=https://www.youtube.com/watch?v=...&format=mp3
```

The response is the media file itself with `Content-Disposition: attachment`, so browsers save it instead of playing it.

## Running locally

```bash
npm install
node api/download.js
```

## Limits

- `ytdl-core` breaks whenever YouTube changes its player; expect to pin or replace it regularly.
- Age-restricted, private and region-locked videos are not handled.
- YouTube's terms do not permit downloading content you do not own — use it for your own uploads.

## Licence

MIT
