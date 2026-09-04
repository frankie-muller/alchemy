/**
 * The Alchemy demo — the real library, running in your browser.
 *
 * Nothing here is a mock-up. This file imports the same `src/` modules the
 * package publishes; the whole dictionary is bundled into the page. That is
 * only possible because the library is offline by design: no server, no API
 * key, no network call. What you click is what ships.
 */
import {
  ALCHEMY_DICTIONARY,
  DiscoveryEngine,
  classifyTrack,
  getDictionaryStats,
  isStudioPerfectionArtist,
  type Recommendation,
} from '../src/index.js';

// ── Boot ─────────────────────────────────────────────────────────────────────

const $ = <T extends HTMLElement>(id: string): T => {
  const el = document.getElementById(id);
  if (!el) { throw new Error(`missing #${id}`); }
  return el as T;
};

const stats = getDictionaryStats();
$('stat-artists').textContent = stats.artists.toLocaleString();
$('stat-pillars').textContent = String(stats.pillars);
$('stat-subs').textContent = String(stats.subCategories);
$('stat-names').textContent = stats.indexedNames.toLocaleString();

// ── Discovery ────────────────────────────────────────────────────────────────

const pillarSelect = $<HTMLSelectElement>('pillar');
const subSelect = $<HTMLSelectElement>('sub');
const results = $('results');
const seenNote = $('seen-note');
const againBtn = $<HTMLButtonElement>('again');

const engine = new DiscoveryEngine();

for (const pillar of ALCHEMY_DICTIONARY) {
  pillarSelect.append(new Option(pillar.name, pillar.name));
}

function fillSubCategories(): void {
  const pillar = ALCHEMY_DICTIONARY.find((p) => p.name === pillarSelect.value);
  subSelect.replaceChildren();
  if (!pillar) { return; }
  // Biggest sub-categories first: a first-time visitor picking blind should
  // land somewhere well-populated, not on Acid House with its seven entries.
  const subs = Object.entries(pillar.subCategories)
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);
  for (const [name, artists] of subs) {
    subSelect.append(new Option(`${name}  (${Object.keys(artists).length})`, name));
  }
}

function card(r: Recommendation): string {
  const tier = r.isConnector
    ? '<span class="pill bridge">bridge</span>'
    : `<span class="pill">${esc(r.subCategory)}</span>`;
  const meta = [
    r.energy !== 'unknown' ? `${esc(r.energy)} energy` : '',
    r.mood.length ? r.mood.map(esc).join(' · ') : '',
  ].filter(Boolean).join(' — ');
  const studio = isStudioPerfectionArtist(r.name)
    ? '<span class="pill studio" title="Cross-genre production-quality overlay">studio perfection</span>'
    : '';
  return `<article class="card">
      <h3>${esc(r.name)}</h3>
      <div class="pills">${tier}${studio}</div>
      ${meta ? `<p class="meta">${meta}</p>` : ''}
      <p class="bio">${esc(r.description)}</p>
    </article>`;
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ));
}

function recommend(): void {
  const pillar = pillarSelect.value;
  const sub = subSelect.value;
  const { recommendations, exhausted } = engine.discover(pillar, sub);

  results.innerHTML = recommendations.map(card).join('');
  results.setAttribute('aria-busy', 'false');

  const bridges = recommendations.filter((r) => r.isConnector).length;
  const parts = [`${recommendations.length} shown`];
  if (bridges) { parts.push(`${bridges} cross-pillar ${bridges === 1 ? 'bridge' : 'bridges'}`); }
  parts.push(`${engine.seenCount} seen this session`);
  seenNote.textContent = exhausted
    ? `Neighbourhood exhausted — memory wiped, walking again. ${parts.join(' · ')}`
    : parts.join(' · ');
  againBtn.disabled = false;
}

pillarSelect.addEventListener('change', () => { fillSubCategories(); recommend(); });
subSelect.addEventListener('change', recommend);
againBtn.addEventListener('click', recommend);
$('reset').addEventListener('click', () => {
  engine.reset();
  seenNote.textContent = 'Memory cleared — the whole neighbourhood is available again.';
});

// ── Classify ─────────────────────────────────────────────────────────────────

const tagInput = $<HTMLInputElement>('tag');
const verdict = $('verdict');

function classify(): void {
  const artist = tagInput.value.trim();
  if (!artist) { verdict.innerHTML = ''; return; }

  const r = classifyTrack({ id: 'demo', title: '—', artist });
  const unmatched = r.pillar === 'Unmatched';

  const VIA: Record<string, string> = {
    alchemy: 'artist found in the dictionary',
    alias: 'genre tag washed to a canonical sub-category',
    'alias+alchemy': 'genre tag and artist agree',
    unmatched: 'no confident match — quarantined rather than guessed',
  };

  verdict.innerHTML = `
    <div class="verdict-row ${unmatched ? 'miss' : 'hit'}">
      <div>
        <span class="label">Pillar</span>
        <strong>${unmatched ? '—' : esc(r.pillar)}</strong>
      </div>
      <div>
        <span class="label">Sub-category</span>
        <strong>${unmatched ? '—' : esc(r.subCategory)}</strong>
      </div>
      <div>
        <span class="label">Studio perfection</span>
        <strong>${isStudioPerfectionArtist(artist) ? 'yes' : 'no'}</strong>
      </div>
    </div>
    <p class="via"><code>classifiedBy: ${esc(r.classifiedBy)}</code> — ${VIA[r.classifiedBy] ?? ''}</p>`;
}

tagInput.addEventListener('input', classify);

// Every chip is a real tag shape that breaks a naive matcher. The label says
// what would go wrong; clicking runs the real classifier on it.
const SAMPLES: Array<[string, string]> = [
  ['Daft Punk', 'contains "ft" — the classic false split'],
  ['Kraftwerk', '"ft" mid-word'],
  ['Earth, Wind & Fire', 'commas and & inside the name'],
  ['Rihanna feat.Calvin Harris', 'glued feat. marker, no space'],
  ['Calvin Harris feat. Rihanna', 'unknown primary, known guest'],
  ['(1998) Lisa Gerrard', 'year-prefixed rip'],
  ['AC/DC', 'slash inside the name'],
  ['Some Local Band', 'genuinely unknown'],
];

const chips = $('chips');
for (const [tag, why] of SAMPLES) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'chip';
  b.textContent = tag;
  b.title = why;
  b.addEventListener('click', () => { tagInput.value = tag; classify(); });
  chips.append(b);
}

// ── Open on something worth looking at, not an empty shell ───────────────────

pillarSelect.value = 'Electronic';
fillSubCategories();
subSelect.value = 'Ambient / Downtempo';   // option VALUE — the label carries the count
recommend();

tagInput.value = 'Earth, Wind & Fire';
classify();
