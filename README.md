# Portafolio · Steven Correa

Sitio estático (HTML, CSS y JS, sin build) con el mundo visual «Juego de planos»: cada proyecto es una hoja de un plano de ingeniería.

## Idioma

El idioma se elige con el parámetro `lang`:

- Español: `?lang=es`
- Inglés: `?lang=en`

Sin parámetro, el sitio usa el idioma del navegador (español si empieza por `es`, si no, inglés). El cambio ES/EN del rótulo y de la barra lateral actualiza la URL sin recargar la página. También funciona con una hoja concreta: `?lang=en#h02`.

## Ver en local

```bash
python3 -m http.server 4321
```

Luego abre http://localhost:4321/?lang=es y http://localhost:4321/?lang=en.

## Publicar en GitHub Pages

El workflow [.github/workflows/pages.yml](.github/workflows/pages.yml) publica solo los archivos del sitio (`index.html`, `404.html`, `robots.txt` y `assets/`). `PRODUCT.md`, `DESIGN.md` y `.impeccable/` quedan en el repositorio, pero no se publican.

1. Crea el repositorio y sube el código a `main`:

   ```bash
   git init -b main
   git add .
   git commit -m "Portafolio: juego de planos ES/EN"
   git remote add origin https://github.com/Aegisystem/Portfolio.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push a `main` vuelve a publicar el sitio. La primera publicación también se puede lanzar desde **Actions → Publicar en GitHub Pages → Run workflow**.

Quedará en:

- https://aegisystem.github.io/Portfolio/?lang=es
- https://aegisystem.github.io/Portfolio/?lang=en

### Dominio propio (opcional)

Para usar, por ejemplo, `portafolio.aegisystem.xyz`, como en `algo.aegisystem.xyz`:

1. Crea un archivo `CNAME` en la raíz con `portafolio.aegisystem.xyz`. El workflow lo copia solo.
2. En el DNS (Cloudflare), crea un registro `CNAME portafolio → aegisystem.github.io`.
3. En **Settings → Pages**, escribe el dominio y activa **Enforce HTTPS**.

## Pendiente

- No hay CV en inglés: en inglés, el enlace dice «CV, PDF in Spanish». Cuando exista, ponlo en `assets/cv/` y cambia los enlaces de la versión en inglés en `index.html`.
- No hay imagen para compartir (`og:image`). Necesita la URL final absoluta.
- El teléfono del CV no se publica a propósito.

## Archivos

- `index.html`: las 7 hojas, con el texto en español y en inglés (`lang="es"` / `lang="en"`).
- `assets/css/planos.css`: estilos y tokens del mundo visual.
- `assets/js/planos.js`: idioma, marcas de zona, hoja actual, trazado de líneas tipo plotter y globos de la lista de materiales.
- `assets/mat.svg`: tapete de corte del fondo, dibujado a mano en SVG.
- `assets/fonts/`: osifont (letra técnica ISO 3098, LGPL-3.0 con excepción de fuente) y Archivo (OFL).
- `assets/cv/`: CV en PDF.
