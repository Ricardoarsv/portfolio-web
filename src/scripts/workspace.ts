import { jobs, projects, skills, activity, usesTool } from '../data/portfolio';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector(s) as T;
const $$ = <T extends HTMLElement = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];
const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

type VT = { ready: Promise<void>; finished: Promise<void> };
const startVT = (document as Document & { startViewTransition?: (cb: () => void) => VT }).startViewTransition?.bind(document);

/* ---------- reloj de Cúcuta ---------- */
const clock = $('#clock');
const tick = () => {
  try { clock.textContent = 'Cúcuta ' + new Date().toLocaleTimeString('es-CO', { timeZone: 'America/Bogota', hour12: false }); } catch { /* sin Intl */ }
};
tick(); setInterval(tick, 1000);

/* ---------- tema diurno / nocturno ---------- */
const themeBtn = $<HTMLButtonElement>('#theme');
const syncTheme = () => {
  const dark = root.dataset.theme === 'dark';
  $('#themeLbl').textContent = dark ? 'nocturno' : 'diurno';
  themeBtn.setAttribute('aria-pressed', String(dark));
};
syncTheme();
themeBtn.addEventListener('click', (e) => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const apply = () => { root.dataset.theme = next; syncTheme(); try { localStorage.setItem('rv-theme', next); } catch { /* sin storage */ } };
  if (!startVT || reduce) { apply(); return; }
  const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.classList.add('no-vt');
  const vt = startVT(apply);
  vt.ready.then(() => {
    root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${rad}px at ${x}px ${y}px)`] },
      { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)', pseudoElement: '::view-transition-new(root)' });
  });
  vt.finished.finally(() => root.classList.remove('no-vt'));
});

/* ---------- contador ---------- */
function countUp(el: HTMLElement, to: number, dec: number, suffix: string, ms: number) {
  if (reduce) return;
  const t0 = performance.now();
  const f = (t: number) => {
    let p = Math.min(1, (t - t0) / ms); p = 1 - Math.pow(1 - p, 3);
    el.textContent = (to * p).toLocaleString('es-CO', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    if (p < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}
function countAll(scope: ParentNode) {
  scope.querySelectorAll<HTMLElement>('[data-count]').forEach((el) =>
    countUp(el, Number(el.dataset.count), Number(el.dataset.dec || 0), el.dataset.suffix || '', 900));
}
function stagger(el: HTMLElement) {
  Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--d', String(i)));
  el.classList.remove('stg'); void el.offsetWidth; el.classList.add('stg');
}

/* ---------- arranque ---------- */
const boot = $('#boot'), bootOut = $('#bootOut');
let done = false;
const seq: string[] = [
  '<span class="c">rv-os 4.1</span> <span class="m">· arranque del portfolio de Ricardo Villanueva</span>',
  'comprobando experiencia ........ <span class="ok">3 años en producción</span>',
  'montando empresas',
  ...jobs.slice().reverse().map((j) => `  ${j.start}  ${esc(j.company.padEnd(24, ' '))}${j.active ? '<span class="ok">[ activo ]</span>' : '<span class="m">[ cerrado ]</span>'}`),
  `montando proyectos ............ <span class="ok">${projects.length} ok</span>`,
  `cargando stack ................ <span class="ok">${skills.length} ramas</span>`,
  `actividad github .............. <span class="a">${activity.total.toLocaleString('es-CO')} contribuciones</span>`,
  '<span class="c">$</span> startx',
];
function finish() {
  if (done) return;
  done = true;
  boot.classList.add('gone');
  document.body.classList.add('ready');
  setTimeout(() => { boot.style.display = 'none'; }, 820);
  const c = $('#contrib'); countUp(c, activity.total, 0, '', 1400);
  countAll($('.case:not([hidden])'));
}
function typeLine(html: string, cb: () => void) {
  const d = document.createElement('div'); d.className = 'ln'; bootOut.appendChild(d);
  const tmp = document.createElement('div'); tmp.innerHTML = html;
  const text = tmp.textContent || ''; let i = 0;
  const step = () => {
    if (done) return;
    i = Math.min(text.length, i + 3); d.textContent = text.slice(0, i);
    if (i < text.length) setTimeout(step, 8); else { d.innerHTML = html; cb(); }
  };
  step();
}
/* Solo en la primera visita de la sesión; las siguientes entran directo. */
let seen = false;
try { seen = sessionStorage.getItem('rv-boot') === '1'; sessionStorage.setItem('rv-boot', '1'); } catch { /* sin storage */ }
if (reduce || seen) { boot.style.display = 'none'; done = true; document.body.classList.add('ready'); }
else {
  let n = 0;
  const next = () => {
    if (done) return;
    if (n >= seq.length) { setTimeout(finish, 350); return; }
    const p = Math.round(((n + 1) / seq.length) * 100);
    $('#bar').style.setProperty('--p', String(p / 100)); $('#pct').textContent = p + '%';
    typeLine(seq[n++], () => setTimeout(next, 70));
  };
  next();
}
$('#skip').addEventListener('click', finish);
boot.addEventListener('click', finish);
document.addEventListener('keydown', () => { if (!done) finish(); }, { once: true });

/* ---------- mosaico y enfoque ---------- */
const tiles = $('#tiles');
const order = ['perfil', 'exp', 'proj', 'stack', 'act'];
let focused: string | null = null;
function layout(id: string | null) {
  if (!id) {
    tiles.classList.remove('zoomed');
    tiles.style.gridTemplateColumns = tiles.style.gridTemplateRows = tiles.style.gridTemplateAreas = '';
  } else {
    const others = order.filter((x) => x !== id);
    tiles.classList.add('zoomed');
    tiles.style.gridTemplateColumns = 'minmax(0,2.6fr) minmax(0,1fr)';
    tiles.style.gridTemplateRows = 'repeat(4,minmax(0,1fr))';
    tiles.style.gridTemplateAreas = others.map((x) => `"${id} ${x}"`).join(' ');
  }
  $$('.pane').forEach((p) => {
    const on = p.id === 'p-' + id;
    p.classList.toggle('focused', on);
    const b = p.querySelector<HTMLButtonElement>('[data-zoom]')!;
    b.textContent = on ? 'mosaico' : 'enfocar';
    b.setAttribute('aria-pressed', String(on));
  });
  requestAnimationFrame(placeCursor);
}
function focusPane(id: string) {
  const next = focused === id ? null : id;
  focused = next;
  document.body.classList.remove('ready');
  const wide = window.innerWidth > 900;
  if (startVT && !reduce && wide) startVT(() => layout(next)); else layout(next);
  if (next && !wide) document.getElementById('p-' + next)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}
$$('[data-zoom]').forEach((b) => b.addEventListener('click', () => focusPane(b.dataset.zoom!)));

/* ---------- experiencia ---------- */
const log = $('#log'), cur = $('#cur');
function placeCursor() {
  const on = log.querySelector<HTMLElement>('button[aria-pressed="true"]');
  if (!on) return;
  const li = on.parentElement as HTMLElement;
  cur.style.setProperty('--y', li.offsetTop + 'px');
  cur.style.setProperty('--h', li.offsetHeight + 'px');
}
window.addEventListener('resize', placeCursor);
requestAnimationFrame(placeCursor);
function showJob(id: string) {
  $$('[data-job]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.job === id)));
  placeCursor();
  $$('[data-case]').forEach((c) => {
    const on = c.dataset.case === id;
    c.hidden = !on;
    if (on) { stagger(c); countAll(c); }
  });
}
$$('[data-job]').forEach((b) => b.addEventListener('click', () => {
  showJob(b.dataset.job!);
  if (focused && focused !== 'exp') focusPane('exp');
}));

/* ---------- proyectos ---------- */
function showProj(id: string) {
  $$('[data-proj]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.proj === id)));
  $$('[data-pdetail]').forEach((d) => { const on = d.dataset.pdetail === id; d.hidden = !on; if (on) stagger(d); });
}
$$('[data-proj]').forEach((b) => b.addEventListener('click', () => {
  showProj(b.dataset.proj!);
  if (focused !== 'proj') focusPane('proj');
}));

/* desde una empresa, abrir uno de sus proyectos */
$$('[data-goproj]').forEach((b) => b.addEventListener('click', () => {
  showProj(b.dataset.goproj!);
  if (focused !== 'proj') focusPane('proj');
}));

/* ---------- capturas ampliadas ---------- */
const lb = $<HTMLDialogElement>('#lightbox');
document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>('[data-shot]');
  if (!b) return;
  ($('#lbImg') as HTMLImageElement).src = b.dataset.shot!;
  ($('#lbImg') as HTMLImageElement).alt = b.dataset.caption || '';
  $('#lbCap').textContent = b.dataset.caption || '';
  lb.showModal();
});
$('#lbClose').addEventListener('click', () => lb.close());
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

/* ---------- stack con resaltado cruzado ---------- */
const stack = $('#stack');
function lightTool(tool: string | null) {
  $$('.chip').forEach((c) => c.classList.toggle('lit', !!tool && c.dataset.tool === tool));
  $$('[data-job]').forEach((b) => { const j = jobs.find((x) => x.id === b.dataset.job)!; b.classList.toggle('lit', !!tool && usesTool(j.stack, tool)); });
  $$('[data-proj]').forEach((b) => { const p = projects.find((x) => x.id === b.dataset.proj)!; b.classList.toggle('lit', !!tool && usesTool(p.stack, tool)); });
}
const toolOf = (e: Event) => (e.target as HTMLElement).closest<HTMLElement>('[data-tool]')?.dataset.tool ?? null;
stack.addEventListener('mouseover', (e) => lightTool(toolOf(e)));
stack.addEventListener('focusin', (e) => lightTool(toolOf(e)));
stack.addEventListener('mouseleave', () => lightTool(null));
stack.addEventListener('focusout', () => lightTool(null));

/* ---------- paleta de comandos ---------- */
type Item = { label: string; meta: string; run: () => void };
const pal = $('#pal'), q = $<HTMLInputElement>('#q'), res = $('#res');
const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');
const goJob = (id: string) => { showJob(id); if (focused !== 'exp') focusPane('exp'); };
const goProj = (id: string) => { showProj(id); if (focused !== 'proj') focusPane('proj'); };
const all: Item[] = [
  ...jobs.map((j) => ({ label: j.company, meta: `experiencia · ${j.dates}`, run: () => goJob(j.id) })),
  ...jobs.flatMap((j) => [j.client, j.product].filter(Boolean).map((x) => ({ label: x!.name, meta: `vía ${j.company}`, run: () => goJob(j.id) }))),
  ...projects.map((p) => ({ label: p.name, meta: `proyecto · ${p.kind}`, run: () => goProj(p.id) })),
  ...skills.flatMap((s) => s.tools.map((t) => ({ label: t, meta: `tecnología · ${s.name}`, run: () => { if (focused) focusPane(focused); lightTool(t); setTimeout(() => lightTool(null), 2600); } }))),
  { label: 'Contacto', meta: 'email, LinkedIn, GitHub', run: () => { if (focused !== 'perfil') focusPane('perfil'); } },
  { label: 'Cambiar tema', meta: 'diurno / nocturno', run: () => themeBtn.click() },
  { label: 'Descargar CV', meta: 'PDF en español', run: () => { location.href = '/cv/Ricardo_Villanueva_CV_ES.pdf'; } },
  { label: 'Vista mosaico', meta: 'todos los paneles', run: () => { if (focused) focusPane(focused); } },
];
let items: Item[] = [], sel = 0;
function render() {
  const v = norm(q.value);
  items = all.filter((it) => !v || norm(it.label + it.meta).includes(v)).slice(0, 9);
  sel = 0;
  res.innerHTML = items.length
    ? items.map((it, i) => `<li><button type="button" role="option" aria-selected="${i === sel}" data-i="${i}"><span>${esc(it.label)}</span><small>${esc(it.meta)}</small></button></li>`).join('')
    : '<li style="padding:12px;color:var(--muted);font-size:13px">Sin resultados. Prueba «vue» o «magnar».</li>';
}
function markSel() {
  res.querySelectorAll<HTMLElement>('[role=option]').forEach((b, i) => {
    b.setAttribute('aria-selected', String(i === sel));
    if (i === sel) b.scrollIntoView({ block: 'nearest' });
  });
}
const openPal = () => { pal.classList.add('open'); q.value = ''; render(); setTimeout(() => q.focus(), 20); };
const closePal = () => { pal.classList.remove('open'); $('#openPal').focus(); };
const run = (i: number) => { const it = items[i]; if (!it) return; pal.classList.remove('open'); it.run(); };
$('#openPal').addEventListener('click', openPal);
q.addEventListener('input', render);
q.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); markSel(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); markSel(); }
  else if (e.key === 'Enter') { e.preventDefault(); run(sel); }
});
res.addEventListener('click', (e) => { const b = (e.target as HTMLElement).closest<HTMLElement>('[data-i]'); if (b) run(Number(b.dataset.i)); });
pal.addEventListener('click', (e) => { if (e.target === pal) closePal(); });

document.addEventListener('keydown', (e) => {
  if (!done || lb.open) return;
  const typing = /INPUT|TEXTAREA/.test((document.activeElement as HTMLElement)?.tagName || '');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.classList.contains('open') ? closePal() : openPal(); return; }
  if (e.key === 'Escape') { if (pal.classList.contains('open')) closePal(); else if (focused) focusPane(focused); return; }
  if (!typing && /^[1-5]$/.test(e.key)) focusPane(order[Number(e.key) - 1]);
});
