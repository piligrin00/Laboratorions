# Mídia original, fora do build

Os arquivos aqui são os **originais sem compressão**, guardados para
poder reencodar depois com outros parâmetros sem pedir de novo ao
cliente.

**Esta pasta fica fora de `public/` de propósito.** Tudo que está em
`public/` é copiado cru para `dist/` e vai para o deploy: o original de
`processo-consultorio` tem 170MB, e ele acabaria publicado.

| Arquivo | Origem | Vira |
|---|---|---|
| `processo-consultorio-original.mp4` | 1080×1920, 70,5s, 20 Mbps, 170MB | `public/video/processo-consultorio.mp4` (6,89MB) |

Comando usado na compressão:

```bash
ffmpeg -i midia-original/processo-consultorio-original.mp4 \
  -vf "scale=720:1280:flags=lanczos" \
  -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p \
  -c:a aac -b:a 96k -ac 1 \
  -movflags +faststart \
  public/video/processo-consultorio.mp4
```

Pôster extraído em 13,5s (o momento do escaneamento), do original e não
do comprimido, para não herdar artefato de compressão:

```bash
ffmpeg -ss 13.5 -i midia-original/processo-consultorio-original.mp4 \
  -frames:v 1 -c:v libwebp -quality 86 \
  src/assets/video/processo-consultorio-poster.webp
```
