/* ═══════════════════════════════════════════════════════════════════════════
   PROJECT DATA
   Each project has: title, subtitle, tech[], description (HTML), github,
   images[] → { src, caption }, and md (raw markdown string with code blocks).

   TO ADD IMAGES: replace the placeholder src URLs in images[] with your own.
   TO ADD/UPDATE README: edit the md string for each project.
   ═══════════════════════════════════════════════════════════════════════════ */

const PROJECT_DATA = {

  runlytic: {
    title: 'Runlytic — Running Analytics Platform',
    subtitle: 'Running Analytics Platform',
    tech: ['Next.js', 'FastAPI', 'Supabase', 'Gemini Flash', 'Vercel', 'Mapbox', 'Leaflet', 'Strava API', 'Suunto API'],
    github: 'https://github.com/apArve08',
    // ── Replace src values with your actual screenshots ──────────────────────
    images: [
      {
        src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'Dashboard Overview'
      },
      {
        src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'Run Detail & Map View'
      },
      {
        src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'AI Training Analytics'
      },
    ],
    description: `
      A running analytics platform born from a simple frustration: Garmin and Strava give you plenty
      of data, but not always the insights you actually need to train smarter.<br><br>
      <strong>Features:</strong><br>
      • Interactive dashboards — daily, weekly, monthly, yearly<br>
      • Detailed run pages with maps powered by Mapbox + Leaflet<br>
      • AI-powered run analysis with actionable insights beyond generic feedback<br>
      • Activity management with filtering and Excel export<br>
      • AI-generated progress reports for custom date ranges<br>
      • Automatic personal record detection<br>
      • Training zone analysis and breakdowns<br>
      • Live weather integration for historical runs and 24/7 monitoring<br>
      • AI-generated training schedules tailored to your running history<br>
      • Monthly performance summaries<br>
      • Strava and Suunto integrations
    `,
    // ── README Markdown ───────────────────────────────────────────────────────
    md: `# Runlytic — Running Analytics Platform

> A personal running analytics platform built to turn raw activity data into actionable training insights.

---

## Overview

Garmin and Strava give you plenty of data — but not always the insights you need to train smarter.
Runlytic was built to fill that gap: a platform that connects your activity history, applies AI analysis,
and surfaces the patterns that actually matter to your training.

---

## Tech Stack

| Layer       | Technology                                |
|-------------|-------------------------------------------|
| Frontend    | Next.js 14, Tailwind CSS                  |
| Backend     | FastAPI (Python)                          |
| Database    | Supabase (PostgreSQL)                     |
| AI          | Gemini Flash via Gemini API               |
| Maps        | Mapbox GL JS + Leaflet                    |
| Hosting     | Vercel (Frontend), Cloud Run (Backend)    |
| Integrations| Strava API, Suunto API                    |

---

## Features

### Dashboards
Interactive views across daily, weekly, monthly, and yearly timeframes.
Includes distance, pace, elevation, heart rate trends, and training load.

### Run Detail Pages
\`\`\`
Each run renders:
  - GPX route map (Mapbox + Leaflet)
  - Lap breakdowns
  - Heart rate zone distribution
  - Pace chart
  - Weather conditions at time of run
\`\`\`

### AI Run Analysis
\`\`\`python
# AI prompt pipeline — simplified example
def analyse_run(run_data: RunData) -> str:
    prompt = build_run_prompt(run_data)
    response = gemini.generate_content(prompt)
    return response.text
\`\`\`

### Personal Record Detection
\`\`\`python
def detect_prs(activities: list[Activity], user_id: str):
    pr_categories = ["1km", "5km", "10km", "half_marathon", "marathon"]
    for category in pr_categories:
        best = get_best_effort(activities, category)
        update_pr_if_better(user_id, category, best)
\`\`\`

### Training Zones
Calculates and visualises time spent in each HR zone across any date range.

### AI Progress Reports
Generates structured reports for: monthly, 3-month, 6-month, and yearly windows —
summarising trends, PRs, training consistency, and recommendations.

### Weather Integration
Pulls historical weather for each run (temperature, humidity, wind) and
provides a live 24/7 weather widget for planning upcoming sessions.

---

## Project Structure

\`\`\`
runlytic/
├── frontend/          # Next.js app
│   ├── app/
│   │   ├── dashboard/
│   │   ├── runs/[id]/
│   │   └── reports/
│   └── components/
├── backend/           # FastAPI
│   ├── routes/
│   ├── services/
│   │   ├── strava.py
│   │   ├── ai_analysis.py
│   │   └── weather.py
│   └── models/
└── supabase/
    └── migrations/
\`\`\`

---

## Setup

\`\`\`bash
# Clone the repo
git clone https://github.com/apArve08/runlytic.git
cd runlytic

# Frontend
cd frontend
npm install
cp .env.example .env.local
npm run dev

# Backend
cd ../backend
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
\`\`\`

---

## Environment Variables

\`\`\`env
# Frontend (.env.local)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_API_URL=

# Backend (.env)
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
GEMINI_API_KEY=
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
OPENWEATHER_API_KEY=
\`\`\`

---

*Built mostly on weekends. Deployed from a Mac using Claude Code.*
`
  },

  rag: {
    title: 'Local RAG Evaluation Pipeline',
    subtitle: 'AI / RAG Engineering',
    tech: ['Python 3.11', 'LangChain', 'Ollama', 'PostgreSQL', 'pgvector', 'Docker', 'Docker Compose', 'Next.js 14', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/apArve08',
    // ── Replace src values with your actual screenshots ──────────────────────
    images: [
      {
        src: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'Benchmark Dashboard'
      },
      {
        src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'Vector Database Architecture'
      },
      {
        src: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        caption: 'Retrieval Quality Analysis'
      },
    ],
    description: `
      A fully local Retrieval-Augmented Generation (RAG) pipeline built over a 4-week sprint
      to understand how modern AI systems retrieve, process, and generate information —
      without relying on cloud APIs.<br><br>
      <strong>Components:</strong><br>
      • Document ingestion & chunking with LangChain RecursiveCharacterTextSplitter<br>
      • PostgreSQL + pgvector for 768-dim vector indexing (Ollama nomic-embed-text)<br>
      • Benchmarking harness measuring latency, retrieval quality & answer relevance<br>
      • Next.js dashboard with Recharts for visualising results across LLMs and chunk strategies
    `,
    md: `# P1 — Local AI Evaluator & RAG Pipeline

A fully local Retrieval Augmented Generation (RAG) system — document ingestion,
vector embeddings, semantic search, and a benchmarking dashboard comparing two
local LLMs. No cloud APIs, no external dependencies beyond Ollama and Docker.

## Architecture

\`\`\`
data/                  → source documents (PDF, txt)
scripts/
  ingest.py            → document loading + chunking experiments
  embed.py             → embedding + pgvector insertion
  benchmark.py         → 20-question benchmark across 2 models
  query_api.py         → live query endpoint for dashboard
results/
  chunk_log.json       → WK01 chunking experiment results
  benchmark.json       → WK03 benchmark results
dashboard/             → Next.js analytics dashboard
\`\`\`

## Stack
- **Python** — ingestion, embedding, benchmarking
- **LangChain** — document loading + recursive chunking
- **Ollama** — local LLM serving (\`llama3.2:latest\`, \`phi3:3.8b\`,
  \`nomic-embed-text\`)
- **PostgreSQL + pgvector** (Docker) — vector storage and cosine similarity search
- **Next.js + Recharts** — analytics dashboard

## Setup

### 1. Install Ollama and pull models
\`\`\`bash
ollama pull llama3.2
ollama pull phi3:3.8b
ollama pull nomic-embed-text
\`\`\`

### 2. Start pgvector
\`\`\`bash
docker run -d \\
  --name pgvector-db \\
  -e POSTGRES_PASSWORD=password \\
  -e POSTGRES_DB=ragdb \\
  -p 5432:5432 \\
  ankane/pgvector
\`\`\`

### 3. Create schema
\`\`\`sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    metadata JSONB,
    embedding VECTOR(768),
    chunk_size INT,
    source_file TEXT
);

CREATE INDEX ON documents
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
\`\`\`

### 4. Install Python deps
\`\`\`bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
\`\`\`

### 5. Run the pipeline
\`\`\`bash
python scripts/ingest.py     # chunking experiments
python scripts/embed.py      # embed + store vectors
python scripts/benchmark.py  # run 20-question benchmark
\`\`\`

### 6. Run the dashboard
\`\`\`bash
cd dashboard
npm install
npm run dev
\`\`\`
Visit \`http://localhost:3000\`

## Key Finding

> Retrieval pipeline quality matters more than model size. With identical
> retrieved context, \`phi3:3.8b\` (3.8B params) consistently outperformed
> \`llama3.2:latest\` on answer accuracy — the larger model frequently
> defaulted to "Not found in documents" even when the answer was present
> in the retrieved chunks.

## Chunking Experiment Results

| chunk_size | overlap | chunks (70-pg PDF) | chunks (6KB txt) |
|---|---|---|---|
| 256 | 32 | 802 | 40 |
| 512 | 64 | 400 | 17 |
| 1024 | 128 | 218 | 8 |

512/64 was used as the production config.

## Benchmark Results (summary)

| Metric | llama3.2:latest | phi3:3.8b |
|---|---|---|
| Avg TTFT | ~3s (excl. outlier) | ~2.7s |
| Avg accuracy (1–5) | ~1.3 | ~4.0 |
| Behaviour | Conservative — often "not found" | Synthesised context into full answers |

## Known Issues
- Q2 had a 178s retrieval stall (embedding call hung) — treated as outlier
- PDF (400 chunks) dominates retrieval over the smaller .txt file (17 chunks),
  causing imbalanced source representation

## Next Steps
- Add reranking to balance retrieval across document sources
- Test prompt engineering to fix llama3.2's "not found" bias
- Add agentic tool-use layer (LangChain ReAct) on top of this RAG base

## License
MIT
`
  }
};



/* ═══════════════════════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════════════════════ */

let currentProject = null;
let currentImageIndex = 0;


/* ═══════════════════════════════════════════════════════════════════════════
   OPEN / CLOSE PROJECT MODAL
   ═══════════════════════════════════════════════════════════════════════════ */

function openProjectPopup(key) {
  const project = PROJECT_DATA[key];
  if (!project) return;
  currentProject = project;
  currentImageIndex = 0;

  // Title & subtitle
  document.getElementById('proj-title').textContent = project.title;
  document.getElementById('proj-subtitle').textContent = project.subtitle;

  // Description
  document.getElementById('proj-desc').innerHTML = project.description;

  // Tech tags
  const tagsEl = document.getElementById('proj-tags');
  tagsEl.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

  // GitHub link
  document.getElementById('proj-github').href = project.github;

  // Gallery
  renderGallery(project.images, 0);

  // Show overlay
  document.getElementById('proj-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectPopup() {
  document.getElementById('proj-overlay').classList.remove('open');
  document.body.style.overflow = 'auto';
  currentProject = null;
}


/* ═══════════════════════════════════════════════════════════════════════════
   GALLERY
   ═══════════════════════════════════════════════════════════════════════════ */

function renderGallery(images, index) {
  const mainImg = document.getElementById('proj-gallery-img');
  const caption = document.getElementById('proj-gallery-caption');
  const dotsEl  = document.getElementById('proj-dots');

  // Main image (fade transition)
  mainImg.classList.add('fade');
  setTimeout(() => {
    mainImg.src = images[index].src;
    mainImg.alt = images[index].caption;
    caption.textContent = images[index].caption;
    mainImg.classList.remove('fade');
  }, 200);

  // Dots
  dotsEl.innerHTML = images.map((_, i) =>
    `<button class="gallery-dot ${i === index ? 'active' : ''}"
             onclick="goToImage(${i})" aria-label="Image ${i + 1}"></button>`
  ).join('');

  // Hide nav buttons if only 1 image
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const showNav = images.length > 1;
  prevBtn.style.display = showNav ? 'flex' : 'none';
  nextBtn.style.display = showNav ? 'flex' : 'none';
}

function goToImage(index) {
  if (!currentProject) return;
  currentImageIndex = index;
  renderGallery(currentProject.images, index);
}

function galleryPrev() {
  if (!currentProject) return;
  const len = currentProject.images.length;
  currentImageIndex = (currentImageIndex - 1 + len) % len;
  renderGallery(currentProject.images, currentImageIndex);
}

function galleryNext() {
  if (!currentProject) return;
  const len = currentProject.images.length;
  currentImageIndex = (currentImageIndex + 1) % len;
  renderGallery(currentProject.images, currentImageIndex);
}


/* ═══════════════════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════════════════ */

function openLightbox() {
  if (!currentProject || !currentProject.images || !currentProject.images[currentImageIndex]) return;

  const currentImg = currentProject.images[currentImageIndex];
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxImg.src = currentImg.src;
  lightboxImg.alt = currentImg.caption || '';
  lightboxCaption.textContent = currentImg.caption || '';

  document.getElementById('lightbox-overlay').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  // Clear src after transition to avoid flash on next open
  setTimeout(() => {
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) lightboxImg.src = '';
  }, 300);
}

function closeLightboxOnBg(e) {
  if (e.target === document.getElementById('lightbox-overlay')) {
    closeLightbox();
  }
}


/* ═══════════════════════════════════════════════════════════════════════════
   MARKDOWN VIEWER
   ═══════════════════════════════════════════════════════════════════════════ */

function openMdViewer() {
  if (!currentProject || !currentProject.md) return;

  // Render markdown → HTML
  const rendered = renderMarkdown(currentProject.md);
  document.getElementById('md-content').innerHTML = rendered;
  document.getElementById('md-viewer-title').textContent = currentProject.title + ' — README';

  document.getElementById('md-overlay').classList.add('open');
}

function closeMdViewer() {
  document.getElementById('md-overlay').classList.remove('open');
}

function backToProject() {
  closeMdViewer();
  // project modal stays open underneath
}


/* ═══════════════════════════════════════════════════════════════════════════
   SIMPLE MARKDOWN RENDERER
   Handles: headings, bold, italic, code blocks (with lang label), inline code,
            blockquotes, horizontal rules, unordered/ordered lists, tables,
            paragraphs, links.
   ═══════════════════════════════════════════════════════════════════════════ */

function renderMarkdown(md) {
  let html = md
    // Escape HTML special chars first (for security)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // ── Fenced code blocks (``` lang ... ```) ──
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const label = lang
      ? `<span class="code-lang-label">${escHtml(lang)}</span>`
      : '';
    return `<pre>${label}<code>${syntaxHighlight(code.trimEnd(), lang)}</code></pre>`;
  });

  // ── Tables ──
  html = html.replace(/(\|.+\|\n\|[-| :]+\|\n(?:\|.+\|\n?)+)/g, (table) => {
    const rows = table.trim().split('\n').filter(r => !/^\|[-| :]+\|$/.test(r));
    const [header, ...body] = rows;
    const thCells = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const tbRows = body.map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr>${thCells}</tr></thead><tbody>${tbRows}</tbody></table>`;
  });

  const lines = html.split('\n');
  const out = [];
  let inList = null; // 'ul' | 'ol' | null
  let inBlockquote = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Skip lines already wrapped in block tags (pre/table)
    if (/^<(pre|table|\/pre|\/table)/.test(line)) {
      closeList();
      out.push(line);
      continue;
    }

    // Headings
    const hMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (hMatch) {
      closeList();
      const level = hMatch[1].length;
      out.push(`<h${level}>${inlineFormat(hMatch[2])}</h${level}>`);
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      closeList();
      out.push('<hr>');
      continue;
    }

    // Blockquote
    if (/^&gt;\s?/.test(line)) {
      closeList();
      const bqContent = line.replace(/^&gt;\s?/, '');
      if (!inBlockquote) { out.push('<blockquote>'); inBlockquote = true; }
      out.push(`<p>${inlineFormat(bqContent)}</p>`);
      continue;
    } else if (inBlockquote) {
      out.push('</blockquote>');
      inBlockquote = false;
    }

    // Unordered list
    const ulMatch = line.match(/^[•\-\*]\s+(.*)/);
    if (ulMatch) {
      if (inList !== 'ul') { closeList(); out.push('<ul>'); inList = 'ul'; }
      out.push(`<li>${inlineFormat(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\d+\.\s+(.*)/);
    if (olMatch) {
      if (inList !== 'ol') { closeList(); out.push('<ol>'); inList = 'ol'; }
      out.push(`<li>${inlineFormat(olMatch[1])}</li>`);
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      closeList();
      continue;
    }

    // Default: paragraph
    closeList();
    out.push(`<p>${inlineFormat(line)}</p>`);
  }

  closeList();
  if (inBlockquote) out.push('</blockquote>');

  // Table styling wrapper
  let result = out.join('\n');
  result = result.replace(/<table>/g, '<div class="md-table-wrap"><table>').replace(/<\/table>/g, '</table></div>');

  return result;

  function closeList() {
    if (inList) { out.push(`</${inList}>`); inList = null; }
  }
}

function inlineFormat(text) {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function syntaxHighlight(code, lang) {
  // Very light token colouring for common patterns
  return code
    .replace(/(#.*$)/gm, '<span class="token-comment">$1</span>')          // comments
    .replace(/\b(def|class|import|from|return|if|else|elif|for|while|with|as|in|not|and|or|True|False|None|async|await|SELECT|CREATE|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|ON|TABLE|INDEX|EXTENSION|services|image|ports|volumes|environment)\b/g,
             '<span class="token-keyword">$1</span>')
    .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, '<span class="token-string">$1</span>')
    .replace(/\b(\d+(\.\d+)?)\b/g, '<span class="token-number">$1</span>');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


/* ═══════════════════════════════════════════════════════════════════════════
   CLOSE ON OVERLAY CLICK
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('proj-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('proj-overlay')) closeProjectPopup();
  });
  document.getElementById('md-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('md-overlay')) closeMdViewer();
  });
});

// Keyboard: Escape closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('lightbox-overlay').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('md-overlay').classList.contains('open')) {
      closeMdViewer();
    } else if (document.getElementById('proj-overlay').classList.contains('open')) {
      closeProjectPopup();
    }
  }
});
