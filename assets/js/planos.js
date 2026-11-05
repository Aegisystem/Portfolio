/* Juego de planos: idioma por ?lang=, hoja actual, plotter y globos */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- idioma ---------- */
  var META = {
    es: {
      title: "Steven Correa · Ingeniero de software full stack",
      desc: "Portafolio de Steven Correa, ingeniero de software full stack en Ibagué, Colombia: Nous, Quitsie, ControlTurnos y un curso de programación competitiva, con cifras medidas.",
      rail: "Hojas del portafolio"
    },
    en: {
      title: "Steven Correa · Full stack software engineer",
      desc: "Portfolio of Steven Correa, full stack software engineer in Ibagué, Colombia: Nous, Quitsie, ControlTurnos and a competitive programming course, with measured numbers.",
      rail: "Portfolio sheets"
    }
  };

  function setLang(lang, push) {
    if (lang !== "es" && lang !== "en") return;
    root.lang = lang;
    document.title = META[lang].title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", META[lang].desc);
    var rail = document.querySelector(".rail");
    if (rail) rail.setAttribute("aria-label", META[lang].rail);
    document.querySelectorAll("[data-set-lang]").forEach(function (a) {
      a.setAttribute("aria-pressed", String(a.getAttribute("data-set-lang") === lang));
    });
    if (push) {
      var url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }

  setLang(root.lang, false);

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-set-lang]");
    if (!a) return;
    e.preventDefault();
    setLang(a.getAttribute("data-set-lang"), true);
  });

  /* ---------- marcas de zona (1–8, A–F) ---------- */
  var COLS = 8;
  var ROWS = "ABCDEF";
  document.querySelectorAll(".sheet").forEach(function (sheet) {
    var z = document.createElement("div");
    z.className = "zones";
    z.setAttribute("aria-hidden", "true");
    var html = "";
    var h = sheet.offsetHeight;
    var rows = Math.max(3, Math.min(ROWS.length, Math.round(h / 260)));
    for (var i = 0; i < COLS; i++) {
      var x = ((i + 0.5) / COLS) * 100;
      html += '<span class="zt" style="left:' + x + '%">' + (i + 1) + "</span>";
      html += '<span class="zb" style="left:' + x + '%">' + (i + 1) + "</span>";
      if (i > 0) {
        var bx = (i / COLS) * 100;
        html += '<i class="tick-x" style="left:' + bx + '%;top:0"></i><i class="tick-x" style="left:' + bx + '%;bottom:0"></i>';
      }
    }
    for (var j = 0; j < rows; j++) {
      var y = ((j + 0.5) / rows) * 100;
      html += '<span class="zl" style="top:' + y + '%">' + ROWS[j] + "</span>";
      html += '<span class="zr" style="top:' + y + '%">' + ROWS[j] + "</span>";
      if (j > 0) {
        var by = (j / rows) * 100;
        html += '<i class="tick-y" style="top:' + by + '%;left:0"></i><i class="tick-y" style="top:' + by + '%;right:0"></i>';
      }
    }
    z.innerHTML = html;
    sheet.insertBefore(z, sheet.firstChild);
  });

  /* ---------- plotter: medir trazos ---------- */
  var sheets = Array.prototype.slice.call(document.querySelectorAll(".sheet"));
  if (!reduce.matches && "IntersectionObserver" in window) {
    sheets.forEach(function (sheet) {
      var n = 0;
      sheet.querySelectorAll(".pl").forEach(function (el) {
        if (typeof el.getTotalLength !== "function") return;
        var dash = getComputedStyle(el).strokeDasharray;
        if (dash && dash !== "none") return;
        var len;
        try { len = el.getTotalLength(); } catch (err) { return; }
        if (!len) return;
        el.style.strokeDasharray = len + " " + len;
        el.style.setProperty("--len", len);
        el.style.setProperty("--d", Math.min(n * 0.025, 0.9) + "s");
        n++;
      });
    });
    var style = document.createElement("style");
    style.textContent =
      ".plot-ready .sheet .pl{stroke-dashoffset:0}" +
      ".plot-ready .sheet:not(.plotted) .pl{stroke-dashoffset:var(--len)}";
    document.head.appendChild(style);
    root.classList.add("plot-ready", "underlay");
  } else {
    sheets.forEach(function (s) { s.classList.add("plotted"); });
  }

  /* ---------- hoja actual ---------- */
  var railLinks = {};
  document.querySelectorAll('.rail a[href^="#h"]').forEach(function (a) {
    railLinks[a.getAttribute("href").slice(1)] = a;
  });
  function setCurrent(id) {
    sheets.forEach(function (s) { s.classList.toggle("is-current", s.id === id); });
    Object.keys(railLinks).forEach(function (k) {
      if (k === id) railLinks[k].setAttribute("aria-current", "true");
      else railLinks[k].removeAttribute("aria-current");
    });
  }

  var ticking = false;
  function onScroll() {
    ticking = false;
    var vh = window.innerHeight;
    var line = vh * 0.4;
    var current = sheets[0] ? sheets[0].id : null;
    sheets.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) current = s.id;
      if (r.top < vh * 0.85 && r.bottom > 0) s.classList.add("plotted");
    });
    if (current) setCurrent(current);
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ---------- enlace con #hoja: volver a ubicarla cuando cargan las fuentes ---------- */
  if (location.hash && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      var t = document.getElementById(location.hash.slice(1));
      if (t) t.scrollIntoView();
    });
  }

  /* ---------- globos ↔ lista de materiales ---------- */
  function link(el, on) {
    var sheet = el.closest(".sheet");
    var item = el.getAttribute("data-item");
    if (!sheet || !item) return;
    sheet.querySelectorAll('[data-item="' + item + '"]').forEach(function (x) {
      x.classList.toggle("is-hl", on);
    });
  }
  ["mouseover", "focusin"].forEach(function (t) {
    document.addEventListener(t, function (e) {
      var el = e.target.closest && e.target.closest("[data-item]");
      if (el) link(el, true);
    });
  });
  ["mouseout", "focusout"].forEach(function (t) {
    document.addEventListener(t, function (e) {
      var el = e.target.closest && e.target.closest("[data-item]");
      if (el) link(el, false);
    });
  });

  /* ---------- nubes de revisión (festón dibujado alrededor de la nota) ---------- */
  var NS = "http://www.w3.org/2000/svg";
  function cloudPath(w, h, m) {
    var iw = w - 2 * m, ih = h - 2 * m;
    var nx = Math.max(2, Math.round(iw / 24)), ny = Math.max(2, Math.round(ih / 24));
    var dx = iw / nx, dy = ih / ny, d = "M" + m + " " + m, i;
    var arc = function (len, x, y) { var r = (len * 0.62).toFixed(1); return " A" + r + " " + r + " 0 0 1 " + x.toFixed(1) + " " + y.toFixed(1); };
    for (i = 1; i <= nx; i++) d += arc(dx, m + i * dx, m);
    for (i = 1; i <= ny; i++) d += arc(dy, w - m, m + i * dy);
    for (i = 1; i <= nx; i++) d += arc(dx, w - m - i * dx, h - m);
    for (i = 1; i <= ny; i++) d += arc(dy, m, h - m - i * dy);
    return d + "Z";
  }
  function drawCloud(box) {
    var svg = box.querySelector("svg.cloud");
    if (!svg) {
      svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "cloud");
      svg.setAttribute("aria-hidden", "true");
      svg.appendChild(document.createElementNS(NS, "path"));
      box.appendChild(svg);
      box.classList.add("has-cloud");
    }
    var m = 9, w = box.offsetWidth + 2 * m, h = box.offsetHeight + 2 * m;
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.firstChild.setAttribute("d", cloudPath(w, h, m));
  }
  var clouds = document.querySelectorAll(".revcloud");
  clouds.forEach(drawCloud);
  if ("ResizeObserver" in window) {
    var ro = new ResizeObserver(function (entries) { entries.forEach(function (e) { drawCloud(e.target); }); });
    clouds.forEach(function (c) { ro.observe(c); });
  }

  /* ---------- copiar correo ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var idle = btn.querySelector(".copy-idle");
    var done = btn.querySelector(".copy-done");
    var timer;
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var ok = function () {
        btn.setAttribute("data-state", "done");
        if (idle) idle.hidden = true;
        if (done) done.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(function () {
          btn.removeAttribute("data-state");
          if (idle) idle.hidden = false;
          if (done) done.hidden = true;
        }, 2200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok, function () { location.href = "mailto:" + text; });
      } else {
        location.href = "mailto:" + text;
      }
    });
  });
})();
