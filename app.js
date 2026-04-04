const siteData = {
  "site_overview": {
    "mission": "To document and preserve the intricate stone joinery techniques of Ancient India, inspiring modern craft and informing archaeological conservation.",
    "target_audience": "Historians, architects, conservators, craftspersons, and the curious public."
  },
  "navigation_menu": [
      { id: "home", label: "Home" },
      { id: "techniques", label: "Techniques" },
      { id: "case-studies", label: "Case Studies" },
      { id: "timeline", label: "Timeline" },
      { id: "gallery", label: "Gallery" },
      { id: "glossary", label: "Glossary" },
      { id: "resources", label: "Resources" }
  ],
  "pages": {
    "home": {
      "hero": {
        "headline": "Monuments Without Mortar: The Mastery of Ancient Indian Stonecraft",
        "subhead": "Uncover the precision of traditional Indian masons, whose sophisticated interlocking stone joinery built temples and stepwells that have defied time, gravity, and earthquakes for millennia."
      },
      "intro": "What is stone joinery? Long before modern cements and rebar, ancient Indian architects constructed staggering monumental superstructures using purely physical connections between stone blocks. This is the art and science of stone joinery: using gravity, friction, and meticulously carved interlocking shapes—such as tenons, dovetails, and mortises—to bind individual blocks into unyielding monolithic entities. \n\nAncient Indian techniques are recognized globally for their exceptional seismic resilience and extraordinary precision. On this platform, we illuminate the profound ingenuity of the subcontinental master masons (shilpis). Here, you will find comprehensive technique pages categorizing historical joint forms, in-depth architectural case studies, a dedicated glossary, and downloadable diagrams for conservationists and students.",
      "quick_links": [
        { "id": "techniques", "label": "Techniques", "description": "Explore detailed breakdowns of historical interlocking joints and dowel implementations." },
        { "id": "case-studies", "label": "Case Studies", "description": "Analyze the structural ingenuity of iconic temples and monumental stepwells." },
        { "id": "resources", "label": "Downloadable Diagrams", "description": "Access our repository of annotated blueprints and structural schematics." }
      ]
    },
    "techniques_overview": {
      "title": "Categorization of Joinery Techniques",
      "body": "The monumental stone architecture of Ancient India relies on a sophisticated vocabulary of lithic connections. Rather than depending on mortar, traditional masons (shilpis) engineered stability through mass, geometry, and friction. Techniques can be broadly classified into interlocking joints, dowels and plugs (often employing iron or alloys), mortise-and-tenon analogues, dovetail-like forms, and highly refined dry-stacking. \n\nInterlocking joints ensure lateral stability, crucial in seismic zones, while heavy dry-stacking leverages the immense downward force of superstructures (shikharas) to lock foundational layers in place. Regional variations are prominent: while the softer sandstones of the North allowed for complex dovetailing and iron clamping, the unyielding granites of the South saw incredible mastery in tight mortise-and-tenon integrations. Materials like basalt and laterite also demanded distinct joinery adaptations.",
      "sidebar": "Traditional Tools & Materials: Master masons worked primarily with sandstone, granite, basalt, and laterite. Their toolkit included iron chisels (tanka), heavy mallets, traditional plumb lines (avalamba), and precise measuring rods. Modern equivalents for study include laser scanners, diamond-tipped masonry tools, and ground-penetrating radar."
    },
    "techniques": [
      {
        "name": "Interlocking Tenons",
        "historical_examples": "Kandariya Mahadeva Temple plinth; numerous Vijayanagara foundational courses.",
        "materials_and_tools": "Hard sandstones, granites. Iron chisels, mallets, leveling water-troughs.",
        "step_by_step": [
          "Quarry and transport massive stone blocks to the site.",
          "Rough-dress the bottom face of the stone.",
          "Carve a protruding tenon into the top face of the foundational block.",
          "Measure the exact dimensions of the tenon.",
          "Cut a corresponding mortise (recess) into the bottom of the superior block.",
          "Hoist the superior block into position using wooden ramps and scaffolding.",
          "Lower the block so the mortise perfectly houses the tenon.",
          "Perform fine-dressing in situ to ensure zero-gap abutment.",
          "Seal edge with a micro-layer of lime paste (optional) for water deterrence."
        ],
        "structural_advantages": "Provides extreme resistance to lateral shear forces, particularly useful during seismic events.",
        "conservation_notes": "Invisible from the exterior; requires GPR or ultrasonic testing to verify joint integrity before any intervention."
      },
      {
        "name": "Iron Clamps and Dowels",
        "historical_examples": "Konark Sun Temple; Khajuraho complex.",
        "materials_and_tools": "Sandstone, Khondalite, forged iron clamps, molten lead.",
        "step_by_step": [
          "Align two adjacent horizontal stone blocks.",
          "Carve a double-dovetail or I-shaped channel across the seam of the two blocks.",
          "Forge an iron cramp matching the channel dimensions.",
          "Heat lead in a crucible.",
          "Place the iron cramp into the carved channel.",
          "Pour molten lead over the cramp to fill any gaps.",
          "Allow the lead to cool and expand, locking the cramp firmly in the stone.",
          "Dress the top surface to conceal the joint under the next ashlar course."
        ],
        "structural_advantages": "Ties massive blocks together horizontally, preventing shifting or spreading under the immense weight of the tower.",
        "conservation_notes": "Iron oxidation causes expansion (rust jacking), which cracks the stone."
      },
      {
        "name": "Butterfly Joints",
        "historical_examples": "Hoysaleswara Temple at Halebidu; ancient stepwells in Gujarat.",
        "materials_and_tools": "Chloritic schist, soapstone, precise small chisels.",
        "step_by_step": [
          "Dress two blocks to fit cleanly edge-to-edge.",
          "Carve half of a butterfly-shaped slot onto the edge of the first block.",
          "Carve the corresponding half slot on the adjacent block.",
          "Push the two blocks tightly together.",
          "Carve a separate, distinct 'butterfly' key from a harder stone.",
          "Drive the butterfly key into the combined slot.",
          "Grind the surface flush so the joint is smooth and continuous."
        ],
        "structural_advantages": "Prevents blocks from pulling apart (tension); commonly used in retaining walls for stepwells holding back tons of earth.",
        "conservation_notes": "Easily replaced if the key breaks, but surrounding stone edges must be carefully monitored for micro-fractures."
      },
      {
        "name": "Dry-Stack Corbelled Domes",
        "historical_examples": "Dilwara Temples; Modhera Sun Temple.",
        "materials_and_tools": "Marble, sandstone. Heavy lifting tackles.",
        "step_by_step": [
          "Lay a massive, perfectly leveled foundational stone ring.",
          "Lay the next course of stone slightly cantilevering (projecting) inward.",
          "Balance the overhanging weight by piling counterweight stones on the exterior.",
          "Dress the interior face to create a smooth, continuous curve.",
          "Lay successive cantilevered courses until the opening is narrow.",
          "Cap the peak with a heavy, single 'padmashila' (capstone) locking the rings via gravity.",
          "Ensure overall structural balance purely through load distribution."
        ],
        "structural_advantages": "Eliminates the need for mortar and centering frames typical in true Roman arches; excellent compressive strength."
      },
      {
        "name": "Hydraulic Setting and Pozzolanic Mortar",
        "historical_examples": "Nalanda University (Site 3 & Site 12), Bihar.",
        "materials_and_tools": "Carbonated Lime (Hydraulic Lime), Silt-based mud, Surkhi (finely ground brick powder), Organic fibers.",
        "step_by_step": [
          "Create ultra-thin (2 mm to 4 mm) bed joints of silt-based mud mortar for brick-to-brick joinery.",
          "Prepare a high lime-content binder (ratio yielding 1:0.4 to 1:0.8 binder-to-aggregate).",
          "Add Surkhi (brick powder) and organic fibers for tensile reinforcement.",
          "Apply an inner plaster layer (4-6 mm) for leveling and adhesion to the substrate.",
          "Apply a coarse outer plaster layer (9-12 mm) over the base for weather resistance."
        ],
        "structural_advantages": "Extremely high density (1.91 g/cc) and tensile strength. Water-resistant hydraulic setting, crucial for preserving structures across 1,600 years.",
        "conservation_notes": "Prone to salt crystallization (sodium chloride) and gypsum formation. Requires matching breathable lime-based conservation mortars."
      }
    ],
    "case_studies": [
      {
        "title": "Kailasa Temple, Ellora",
        "historical_context": "Excavated top-down in the 8th century by Rashtrakuta kings, this represents the ultimate subversion of stone 'joinery'. Instead of adding blocks together, the entire structure was carved from a single living rock outcropping.",
        "specific_joinery": "While technically a monolithic structure lacking traditional masonry joints, the 'joinery' exists conceptually in its rock-cut architectural analogues. Sculptors meticulously replicated wooden joinery forms—joists, beams, and tenons—purely as aesthetic skeuomorphs.",
        "structural_analysis": "The structural integrity relies wholly on the natural basalt flow. The genius lies in negative-space architectural planning.",
        "conservation_challenges": "Weathering of the porous basalt and micro-fissures in the natural rock bed."
      },
      {
        "title": "Sun Temple, Konark",
        "historical_context": "Built in the 13th century in Odisha, this monumental chariot-shaped temple pushed the limits of Khondalite stone masonry and iron-tool engineering.",
        "specific_joinery": "Renowned for its massive iron beams, Konark used forged iron to supplement stone joinery. The massive corbelled sanctuaries were held together with extensive networks of double-dovetail iron cramps sealed in lead, keeping the huge ashlar blocks from buckling radially.",
        "structural_analysis": "The temple achieved massive interior space via an elaborate corbelled dome framework supported laterally by iron bindings.",
        "conservation_challenges": "Rust jacking from thousands of iron cramps splitting the salt-laden coastal stone."
      },
      {
        "title": "Rani Ki Vav, Patan",
        "historical_context": "An 11th-century monumental stepwell in Gujarat, descending seven levels underground.",
        "specific_joinery": "Features complex interlocking stone brackets, butterfly joints, and lap joints to manage the immense inward pressure of the surrounding earth. Every stone acts laterally against its neighbor to form an inward-pressing, self-stabilizing box.",
        "structural_analysis": "Its subterranean nature means it experiences immense lateral soil thrust rather than wind load.",
        "conservation_challenges": "Water table fluctuations and soil pressure shifts require careful monitoring of joint alignment to prevent wall bowing."
      },
      {
        "title": "Nalanda University, Bihar",
        "historical_context": "A 1600-year-old renowned Buddhist University and UNESCO World Heritage site, built primarily of burnt brick masonry.",
        "specific_joinery": "Features highly advanced thin bed jointing (2-4 mm) and sophisticated multilayered plastering using a unique hydraulic lime and surkhi matrix.",
        "structural_analysis": "The binder-to-aggregate ratio is remarkably rich at 1:0.4 to 1:0.8, with mineralogy consisting largely of Calcite (63-84%). Using organic fibers, the masons structurally reinforced the plaster layers to prevent shrinkage cracking.",
        "conservation_challenges": "Surface flaking induced by salt crystallization and gypsum accumulation from weathering, requiring precise chemical replication of the original lime mortar for restoration."
      }
    ],
    "timeline": [
      "c. 2600 BCE: Indus Valley Civilization; precise mud-brick masonry, but minimal large-scale stone joinery.",
      "c. 3rd Century BCE: Mauryan Empire; introduction of highly polished, monolithic sandstone pillars without joints.",
      "2nd Century BCE: Early rock-cut architecture (e.g., Lomas Rishi Cave); wood joinery techniques translated into decorative stone skeuomorphs.",
      "5th Century CE: Gupta Period; first widespread use of structural dry-stone temples using simple, massive ashlar masonry.",
      "7th Century CE: Pallava rock-cut rathas at Mahabalipuram; refined simulation of complex joinery.",
      "8th Century CE: Kailasa Temple at Ellora; monolithic architectural achievement defining structural load paths.",
      "10th–11th Century CE: Chandela (Khajuraho) and Solanki (Gujarat); mastery of interlocking sandstones, iron cramping.",
      "11th Century CE: Chola Empire (Thanjavur); mastery of monumental granite mortise and tenon integration without mortar.",
      "13th Century CE: Eastern Ganga (Konark); massive scale structural iron beams supplementing heavy masonry.",
      "16th Century CE: Vijayanagara Empire; highly intricate compound pillars with internal pin-locking systems.",
      "19th Century CE: Colonial-era documentation by the ASI; first modern drafting of these joints.",
      "20th–21st Century CE: Modern conservation era; structural diagnostics, iron-clamp removal, and anastylosis."
    ],
    "glossary": [
        { "term": "Abutment", "definition": "A zero-gap contact point where two large structural stone blocks meet." },
        { "term": "Anastylosis", "definition": "The archaeological reconstruction using original architectural elements." },
        { "term": "Ashlar", "definition": "Finely dressed (cut, worked) stone, either an individual block or the masonry built with such blocks." },
        { "term": "Boss", "definition": "A protruding uncarved block of stone, often used for lifting or as a joinery peg." },
        { "term": "Butterfly Joint", "definition": "A double dovetail joint used to connect two adjacent stone blocks in the same plane." },
        { "term": "Corbelling", "definition": "An architectural technique of stepping parallel courses of stone further inward to create an arch or roof." },
        { "term": "Coursing", "definition": "A continuous horizontal layer of stone units in a given wall or structure." },
        { "term": "Cramp", "definition": "A metal rod or bar, sometimes U-shaped, used to hold stone blocks together horizontally." },
        { "term": "Dowel", "definition": "A cylindrical peg used to join two adjacent sections of material." },
        { "term": "Dressing", "definition": "The process of preparing a raw stone rough block into a dimensioned form with precise flat surfaces." },
        { "term": "Dry-stone", "definition": "A building method where structures are constructed without any mortar to bind them together." },
        { "term": "Interlock", "definition": "To connect or engage stones together such that the geometries prevent movement." },
        { "term": "Mortise", "definition": "A hole or recess cut into a part, designed to receive a corresponding projection (a tenon)." }
    ],
    "gallery": [
        "Close-up of a perfectly abutted dry-stack granite joint in Thanjavur.",
        "Erosion revealing the structural mortise indentations on a fallen pillar.",
        "An intricately carved butterfly stone key locking two retaining blocks.",
        "Deep iron chisel tooling marks visible on an unpolished plinth block.",
        "Cross-section of a damaged block showing a rusted iron cramp.",
        "Modern conservation: replacing oxidized iron clamps with titanium dowels.",
        "A monumental lintel suspended via massive squared tenons.",
        "The continuous interior curve of a dry-stacked corbelled roof."
    ]
  }

// ========================================
// DOM ELEMENTS
// ========================================
const appRoot = document.getElementById('app-root');
const navLinksContainer = document.getElementById('nav-links');
const loader = document.getElementById('loader');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mouseGlow = document.getElementById('mouse-glow');
const particleCanvas = document.getElementById('particle-canvas');
const navbar = document.getElementById('navbar');

// ========================================
// 3D PARTICLE FIELD
// ========================================
const ctx = particleCanvas.getContext('2d');
let particles = [];
let mouseX = 0, mouseY = 0;
const PARTICLE_COUNT = 60;

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -Math.random() * 0.3 - 0.1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.z -= 0.5;

        // Parallax with mouse
        const dx = (mouseX - particleCanvas.width / 2) * 0.00005 * this.z;
        const dy = (mouseY - particleCanvas.height / 2) * 0.00005 * this.z;
        this.x += dx;
        this.y += dy;

        if (this.y < -10 || this.z < 0) this.reset();
        if (this.y > particleCanvas.height + 10) { this.y = -10; }
    }
    draw() {
        const scale = (1000 - this.z) / 1000;
        const r = this.size * scale;
        const a = this.opacity * scale;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(r, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 160, 92, ${a})`;
        ctx.fill();
    }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    // Draw connections between close particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const opacity = (1 - dist / 120) * 0.08;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(216, 160, 92, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }

    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ========================================
// MOUSE GLOW FOLLOWER
// ========================================
let glowActive = false;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!glowActive) {
        mouseGlow.classList.add('visible');
        glowActive = true;
    }
    mouseGlow.style.left = e.clientX + 'px';
    mouseGlow.style.top = e.clientY + 'px';
});
document.addEventListener('mouseleave', () => {
    mouseGlow.classList.remove('visible');
    glowActive = false;
});

// ========================================
// NAVBAR SCROLL DEPTH EFFECT
// ========================================
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================================
// INITIALIZE
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    buildNavigation();

    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1200);

    handleRoute();
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
});

function buildNavigation() {
    siteData.navigation_menu.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${item.id}" class="nav-link" data-id="${item.id}">${item.label}</a>`;
        navLinksContainer.appendChild(li);
    });
}

// ========================================
// ROUTER
// ========================================
window.addEventListener('hashchange', () => {
    loader.classList.remove('hidden');
    appRoot.style.opacity = 0;

    setTimeout(() => {
        handleRoute();
        loader.classList.add('hidden');
        navLinksContainer.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }, 500);
});

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || 'home';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.id === hash);
    });

    let htmlBody = '';

    switch(hash) {
        case 'home': htmlBody = renderHome(); break;
        case 'techniques': htmlBody = renderTechniques(); break;
        case 'case-studies': htmlBody = renderCaseStudies(); break;
        case 'timeline': htmlBody = renderTimeline(); break;
        case 'gallery': htmlBody = renderGallery(); break;
        case 'glossary': htmlBody = renderGlossary(); break;
        default: htmlBody = `<div class="page-container page-header"><h1>Section Not Found</h1></div>`;
    }

    appRoot.innerHTML = htmlBody;

    setTimeout(() => {
        appRoot.style.opacity = 1;
        window.scrollTo(0,0);
        initScrollReveal();
        init3DTilt();
    }, 60);
}

// ========================================
// SCROLL REVEAL — 3D ENTRANCE FROM DEPTH
// ========================================
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

// ========================================
// 3D TILT EFFECT ON CARDS
// ========================================
function init3DTilt() {
    const tiltCards = document.querySelectorAll('.tilt-3d');
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateY = ((x - centerX) / centerX) * 8;
            const rotateX = ((centerY - y) / centerY) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// ========================================
// RENDER FUNCTIONS
// ========================================
function renderHome() {
    const data = siteData.pages.home;
    const cardsHtml = data.quick_links.map((q, i) => `
        <div class="glass-card tilt-3d reveal" style="transition-delay: ${i * 0.15}s">
            <h3>${q.label}</h3>
            <p>${q.description}</p>
            <br/>
            <a href="#${q.id}" class="btn">Explore</a>
        </div>
    `).join('');

    return `
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">${data.hero.headline}</h1>
                <p class="hero-subtitle">${data.hero.subhead}</p>
            </div>
        </section>
        <section class="page-container" style="padding-top: 0;">
            <div class="article-content reveal" style="text-align: center; margin-bottom: 4rem;">
                <p>${data.intro}</p>
            </div>
            <div class="grid-3 quick-links">
                ${cardsHtml}
            </div>
        </section>
    `;
}

function renderTechniques() {
    const data = siteData.pages.techniques;
    const overview = siteData.pages.techniques_overview;

    const techHtml = data.map((t, i) => {
        const stepsHtml = t.step_by_step.map(step => `<li>${step}</li>`).join('');
        return `
            <div class="glass-card tilt-3d reveal" style="margin-bottom: 3rem; transition-delay: ${i*0.1}s">
                <h2 style="color:var(--accent); font-size: 2rem; margin-bottom: 1rem;">${t.name}</h2>
                <div class="grid-2">
                    <div>
                        <p><strong>Historical Examples:</strong> ${t.historical_examples}</p>
                        <p><strong>Materials & Tools:</strong> ${t.materials_and_tools}</p>
                        <br/>
                        <p><strong>Structural Advantages:</strong> ${t.structural_advantages}</p>
                        ${t.conservation_notes ? `<br/><p style="color:#f0bc78"><strong>Conservation Notes:</strong> ${t.conservation_notes}</p>` : ''}
                    </div>
                    <div>
                        <h4 style="margin-bottom:1rem; color:var(--text-light)">Construction Method:</h4>
                        <ol class="step-list">
                            ${stepsHtml}
                        </ol>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>${overview.title}</h1>
                <p>${overview.body}</p>
                <div class="reveal" style="margin-top:2rem; padding: 1.5rem; border: 1px solid var(--accent); border-radius: 8px; background: rgba(216,160,92,0.05)">
                    <em>${overview.sidebar}</em>
                </div>
            </div>
            <div class="techniques-list">
                ${techHtml}
            </div>
        </div>
    `;
}

function renderCaseStudies() {
    const data = siteData.pages.case_studies;
    const cardsHtml = data.map((c, i) => `
        <div class="glass-card tilt-3d reveal" style="transition-delay: ${i * 0.12}s">
            <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${c.title}</h2>
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color:#fff; margin-top:1rem;">Historical Context</h4>
                <p>${c.historical_context}</p>

                <h4 style="color:#fff; margin-top:1rem;">Specific Joinery</h4>
                <p>${c.specific_joinery}</p>

                <h4 style="color:#fff; margin-top:1rem;">Structural Analysis</h4>
                <p>${c.structural_analysis}</p>

                <h4 style="color:var(--accent); margin-top:1rem;">Conservation Challenges</h4>
                <p>${c.conservation_challenges}</p>
            </div>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Monument Case Studies</h1>
                <p>In-depth architectural analysis of the subcontinent's most iconic structural achievements.</p>
            </div>
            <div class="grid-2">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function renderTimeline() {
    const data = siteData.pages.timeline;
    const timelineHtml = data.map((item, i) => {
        const [year, ...descParts] = item.split(': ');
        const desc = descParts.join(': ');
        return `
            <div class="timeline-item reveal" style="transition-delay: ${i * 0.08}s">
                <div class="timeline-card">
                    <h3 style="color:var(--accent); font-family:var(--font-heading);">${year}</h3>
                    <p style="color:var(--text-light); font-size:1.05rem; margin-top:0.5rem;">${desc}</p>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Chronology of Joinery</h1>
                <p>The progression of lithic engineering across the subcontinent over millennia.</p>
            </div>
            <div class="timeline">
                ${timelineHtml}
            </div>
        </div>
    `;
}

function renderGallery() {
    const data = siteData.pages.gallery;
    const html = data.map((item, i) => `
        <div class="gallery-item tilt-3d reveal" title="${item}" style="transition-delay: ${i * 0.08}s">
            <p>${item}</p>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Visual Archive</h1>
                <p>A collection of structural joints, tooling marks, and conservation efforts.</p>
            </div>
            <div class="gallery-grid">
                ${html}
            </div>
        </div>
    `;
}

function renderGlossary() {
    const data = siteData.pages.glossary;
    const html = data.map((g, i) => `
        <div class="glossary-term reveal" style="transition-delay: ${i * 0.05}s">
            <span class="term-name">${g.term}</span>
            <p>${g.definition}</p>
        </div>
    `).join('');

    return `
        <div class="page-container">
            <div class="page-header reveal">
                <h1>Technical Glossary</h1>
                <p>Essential terminology for historic masonry and stone conservation.</p>
            </div>
            <div class="glossary-grid">
                ${html}
            </div>
        </div>
    `;
}
