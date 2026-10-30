<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:080b10,100:1f6feb&height=150&section=header&text=youtube-downloader&fontSize=32&fontColor=eaf0f7&animation=fadeIn&desc=MP4%20or%20MP3%20from%20a%20URL&descAlignY=76&descSize=14" alt="youtube-downloader" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=16&pause=1200&color=34D399&center=true&vCenter=true&width=560&lines=Streams%20the%20file%20straight%20back;ytdl-core%20behind%20an%20endpoint" alt="tagline" />

</div>

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
