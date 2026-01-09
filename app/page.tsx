export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="logoMark" aria-hidden="true" />
            <span className="brandName">Sky To Soil</span>
          </div>

          <nav className="nav">
            <a href="#solutions" className="navLink">Solutions</a>
            <a href="#expertise" className="navLink">Expertise</a>
            <a href="#projects" className="navLink">Projects</a>
            <a href="#about" className="navLink">About</a>
          </nav>

          <div className="headerCtas">
            <a className="btn btnGhost" href="https://solutions.skytosoil.life/" target="_blank" rel="noreferrer">
              Explore Solutions
            </a>
            <a className="btn btnPrimary" href="https://services.skytosoil.life" target="_blank" rel="noreferrer">
              Our Work On The Ground
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <h1 className="heroTitle">
                Restoring Our <br />
                <span className="accent">Living Soil</span>
                 </p>

              <div className="heroMeta">
                <div className="pill">Keep More Water Where It Lands</div>
                <div className="pill">Soil - Water - Security</div>
                <div className="pill">Nature's Patterns</div>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <div className="visualCard">
                <div className="visualTitle">Landscape Change</div>
                <div className="visualSub">Fire • Drought • Flood Mitigation • Infiltration • Future-Proof</div>
                <div className="visualGrid">
                  <div className="visualTile">Catch</div>
                  <div className="visualTile">Slow</div>
                  <div className="visualTile">Spread</div>
                  <div className="visualTile">Sink</div>
                </div>
              </div>
              <div className="visualCard secondary">
                <div className="visualTitle">After Years of Drought</div>
                <div className="visualSub">Designs and Installations that Prove Themselves Immediately.</div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section id="about" className="section">
          <div className="container">
            <div className="kicker">The Water Stories Mission</div>
            <h2 className="h2">Bringing Back Water</h2>
            <p className="lead">
            Sky to Soil Systems LLC deploys skilled design and earthworks to slow, spread, and store water in living soil, healing land while reducing the impacts of fire, flood, and drought.
            </p>
            <p className="text">
            Sky to Soil provides landowners, farmers and ranchers with a nature-based approach to protecting homes and land from drought, flood, and fire by retaining water in living soil, while increasing food production and enhancing wildlife habitat.
            </p>

            <div className="mediaRow">
              <div className="mediaBlock">
                <div className="mediaLabel">Homestead Security</div>
                <div className="mediaCaption">Design with Nature • Create for the Future • Client Collaboration</div>
              </div>
              <div className="mediaBlock split">
                <div>
                  <div className="mediaLabel">Before</div>
                  <div className="mediaCaption">Soil Loss • Bare Ground • Slow Infiltration</div>
                </div>
                <div className="divider" />
                <div>
                  <div className="mediaLabel">After</div>
                  <div className="mediaCaption">Spongy Soils • Productive Pastures • Drought and Fire Resistant</div>
                </div>
              </div>
            </div>

            <div className="sectionCtas">
              <a className="btn btnGhost" href="https://skytosoil.life/about" target="_blank" rel="noreferrer">
                About Sky to Soil Systems
              </a>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="stories" className="section alt">
          <div className="container twoCol">
            <div>
              <div className="kicker">Landform Patterns</div>
              <h2 className="h2">Water Calling in Water</h2>
              <p className="text">
                When pastures dry out, heavy rains carry topsoil away, and your land investment runs out to sea.
              </p>
              <div className="sectionCtas">
                <a className="btn btnPrimary" href="https://skytosoil.life/projects" target="_blank" rel="noreferrer">
                  Explore Past Projects
                </a>
              </div>
            </div>

            <div className="imageMock" aria-hidden="true">
              <div className="imageMockInner">
                <div className="imageMockTitle">Cinematic story frame</div>
                <div className="imageMockSub">Clouds • pasture grass • foothills hydrology</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE SKY TO SOIL LAND RENEWAL PATHWAY */}
        <section id="assessmente" className="section">
          <div className="container">
            <div className="kicker">Your Step By Step Pathway to </div>
            <h2 className="h2 jumbo">
              Soil Restoration and <br /> Property Protection
            </h2>
            <p className="lead">
              Your Journey to Resource Enhancement and Asset Preservation
            </p>
            <p className="text">
              The Core Course is designed to help students take effective action and achieve results—skills, strategy, and execution.
            </p>

            <div className="sectionCtas">
              <a className="btn btnPrimary" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
                Join the Course
              </a>
            </div>

            <div className="quoteCard">
              <div className="quoteKicker">THE WATER STORIES CORE COURSE</div>
              <p className="quote">
                “Whether you want to earn a great living creating water systems across the world, create beautiful and water rich habitats on your land,
                or restore ecosystems in your community — we can help you achieve it.”
              </p>
              <div className="quoteBy">— Zach Weiss (Founder)</div>
            </div>

            <div className="bandMock" aria-hidden="true">
              <div className="bandTitle">Overhead landscape band</div>
              <div className="bandSub">Contours • flow paths • retention nodes • design intent</div>
            </div>
          </div>
        </section>

        {/* FORMATS */}
        <section className="section alt">
          <div className="container">
            <div className="kicker">One Course</div>
            <h2 className="h2">Offered In Two Different Formats</h2>
            <p className="text">
              Same core content, two delivery modes: self-paced for flexibility, or live cohort for accountability and community momentum.
            </p>

            <div className="cards">
              <a className="card" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
                <div className="cardTitle">Self-paced</div>
                <div className="cardText">Move at your own speed. Rewatch, revisit, and practice on your timeline.</div>
                <div className="cardArrow">→</div>
              </a>

              <a className="card" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
                <div className="cardTitle">Live</div>
                <div className="cardText">Join a cohort. Structure, feedback, and shared progress with other students.</div>
                <div className="cardArrow">→</div>
              </a>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="section">
          <div className="container twoCol">
            <div>
              <div className="kicker">A World of Possibilities</div>
              <h2 className="h2">Connection. Inspiration. Action.</h2>
              <p className="text">
                Real change requires community action. A strong landing page here sells belonging + access to tools: films, webinars, events, and peer learning.
              </p>
              <p className="text">
                This is the “big conversion engine” section: clarity, credibility, and a direct CTA.
              </p>

              <div className="sectionCtas">
                <a className="btn btnPrimary" href="https://community.waterstories.com/" target="_blank" rel="noreferrer">
                  Discover Our Community
                </a>
              </div>
            </div>

            <div className="stackedMedia" aria-hidden="true">
              <div className="stackedCard">
                <div className="stackedTitle">Community moment</div>
                <div className="stackedSub">Field conversation • learning on the ground</div>
              </div>
              <div className="stackedCard bottom">
                <div className="stackedTitle">Watershed vista</div>
                <div className="stackedSub">River corridor • floodplain • restoration potential</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="finalCta">
          <div className="container finalInner">
            <h2 className="h2">Ready to be part of the movement?</h2>
            <p className="lead">
              Join a learning- and community-centered approach to solving our most pressing environmental crises.
            </p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href="https://community.waterstories.com/" target="_blank" rel="noreferrer">
                Join the Community
              </a>
              <a className="btn btnGhost" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
                Join the Course
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div className="footerBrand">
            <div className="brand">
              <div className="logoMark" aria-hidden="true" />
              <span className="brandName">Water Stories</span>
            </div>
            <p className="footerText">
              A landing page facsimile for practice and deployment. Replace copy/assets with your own if you’re building your brand.
            </p>
          </div>

          <div>
            <div className="footerTitle">Stories</div>
            <a className="footerLink" href="https://www.waterstories.com/stories" target="_blank" rel="noreferrer">All Stories</a>
          </div>

          <div>
            <div className="footerTitle">Courses</div>
            <a className="footerLink" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">Core Course</a>
            <a className="footerLink" href="https://www.waterstories.com/workshops" target="_blank" rel="noreferrer">Workshops</a>
          </div>

          <div>
            <div className="footerTitle">Community</div>
            <a className="footerLink" href="https://community.waterstories.com/" target="_blank" rel="noreferrer">Our Community</a>
            <a className="footerLink" href="https://www.waterstories.com/wcr-practitioners" target="_blank" rel="noreferrer">Practitioners</a>
          </div>
        </div>

        <div className="container footerBottom">
          <span>© {new Date().getFullYear()} Your Site. Built as a facsimile demo.</span>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #070b0f;
          --panel: rgba(255, 255, 255, 0.06);
          --panel2: rgba(255, 255, 255, 0.08);
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.72);
          --faint: rgba(255, 255, 255, 0.56);
          --stroke: rgba(255, 255, 255, 0.14);
          --accent: #7ce3ff;
          --accent2: #8cffc1;
          --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
        }

        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
          background:
            radial-gradient(1200px 800px at 20% -10%, rgba(124, 227, 255, 0.18), transparent 55%),
            radial-gradient(1000px 700px at 85% 10%, rgba(140, 255, 193, 0.14), transparent 60%),
            var(--bg);
          color: var(--text);
        }
        a { color: inherit; text-decoration: none; }
        .page { min-height: 100%; }

        .container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(7, 11, 15, 0.65);
          border-bottom: 1px solid var(--stroke);
        }
        .headerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          gap: 18px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 650;
          letter-spacing: 0.2px;
        }
        .logoMark {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          box-shadow: 0 0 0 4px rgba(124, 227, 255, 0.12);
        }
        .brandName { opacity: 0.95; }

        .nav {
          display: none;
          gap: 18px;
          align-items: center;
        }
        .navLink {
          opacity: 0.78;
          font-size: 14px;
          transition: opacity 150ms ease;
        }
        .navLink:hover { opacity: 1; }

        .headerCtas { display: flex; gap: 10px; align-items: center; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
          white-space: nowrap;
        }
        .btn:hover { transform: translateY(-1px); border-color: rgba(255,255,255,0.22); }
        .btnPrimary {
          background: linear-gradient(135deg, rgba(124,227,255,0.22), rgba(140,255,193,0.16));
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }
        .btnGhost { background: rgba(255,255,255,0.03); }

        .hero { padding: 56px 0 10px; }
        .heroInner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }
        .heroTitle {
          font-size: clamp(44px, 6vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          margin: 0 0 14px;
        }
        .accent {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .heroSubtitle {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 16px;
          max-width: 60ch;
        }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 8px 0 18px; }
        .heroMeta { display: flex; gap: 10px; flex-wrap: wrap; }
        .pill {
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          color: var(--faint);
        }

        .heroVisual {
          display: grid;
          gap: 12px;
        }
        .visualCard {
          border: 1px solid var(--stroke);
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border-radius: 18px;
          padding: 16px;
          box-shadow: var(--shadow);
        }
        .visualCard.secondary {
          background: linear-gradient(180deg, rgba(124,227,255,0.10), rgba(255,255,255,0.03));
        }
        .visualTitle { font-weight: 700; margin-bottom: 6px; }
        .visualSub { color: var(--muted); font-size: 13px; line-height: 1.4; }
        .visualGrid {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .visualTile {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.18);
          border-radius: 14px;
          padding: 12px;
          font-weight: 650;
          text-align: center;
          color: rgba(255,255,255,0.85);
        }

        .section { padding: 56px 0; }
        .section.alt {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.00));
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .kicker {
          color: var(--faint);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .h2 {
          font-size: clamp(28px, 3.4vw, 40px);
          letter-spacing: -0.03em;
          margin: 0 0 12px;
        }
        .h2.jumbo { font-size: clamp(34px, 4.2vw, 52px); line-height: 1.02; }
        .lead {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 10px;
          max-width: 70ch;
        }
        .text {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.75;
          margin: 0 0 12px;
          max-width: 78ch;
        }
        .sectionCtas { margin-top: 14px; }

        .mediaRow {
          margin-top: 18px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .mediaBlock {
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          border-radius: 18px;
          padding: 16px;
          min-height: 120px;
          box-shadow: 0 14px 40px rgba(0,0,0,0.35);
          position: relative;
          overflow: hidden;
        }
        .mediaBlock:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px 200px at 20% 10%, rgba(124,227,255,0.18), transparent 55%),
            radial-gradient(500px 220px at 90% 40%, rgba(140,255,193,0.12), transparent 60%);
          opacity: 0.9;
          pointer-events: none;
        }
        .mediaBlock > * { position: relative; }
        .mediaLabel { font-weight: 750; margin-bottom: 6px; }
        .mediaCaption { color: var(--faint); font-size: 13px; line-height: 1.5; }
        .mediaBlock.split {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 14px;
          align-items: center;
        }
        .divider {
          width: 1px;
          height: 70px;
          background: rgba(255,255,255,0.14);
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          align-items: center;
        }
        .imageMock {
          border: 1px solid var(--stroke);
          border-radius: 22px;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(124,227,255,0.12), rgba(140,255,193,0.08)),
            rgba(255,255,255,0.03);
          box-shadow: var(--shadow);
          min-height: 240px;
          position: relative;
        }
        .imageMockInner {
          position: absolute;
          inset: 0;
          display: grid;
          place-content: end start;
          padding: 18px;
          background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55));
        }
        .imageMockTitle { font-weight: 750; margin-bottom: 6px; }
        .imageMockSub { color: rgba(255,255,255,0.78); font-size: 13px; }

        .quoteCard {
          margin-top: 22px;
          border: 1px solid rgba(124,227,255,0.22);
          background: linear-gradient(180deg, rgba(124,227,255,0.10), rgba(255,255,255,0.03));
          border-radius: 18px;
          padding: 16px;
          box-shadow: var(--shadow);
        }
        .quoteKicker {
          color: var(--faint);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .quote { margin: 0 0 8px; color: rgba(255,255,255,0.86); line-height: 1.7; }
        .quoteBy { color: var(--faint); font-size: 13px; }

        .bandMock {
          margin-top: 16px;
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.03);
          border-radius: 18px;
          padding: 16px;
          min-height: 120px;
          position: relative;
          overflow: hidden;
        }
        .bandMock:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.05) 10px,
              rgba(255,255,255,0.02) 10px,
              rgba(255,255,255,0.02) 20px
            );
          opacity: 0.55;
        }
        .bandMock > * { position: relative; }
        .bandTitle { font-weight: 750; margin-bottom: 6px; }
        .bandSub { color: var(--faint); font-size: 13px; }

        .cards {
          margin-top: 18px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .card {
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 12px 34px rgba(0,0,0,0.35);
          transition: transform 140ms ease, border-color 140ms ease;
          display: grid;
          gap: 8px;
        }
        .card:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.22); }
        .cardTitle { font-weight: 800; font-size: 18px; }
        .cardText { color: var(--muted); line-height: 1.7; }
        .cardArrow { color: var(--faint); font-weight: 800; }

        .stackedMedia { display: grid; gap: 12px; }
        .stackedCard {
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          border-radius: 22px;
          padding: 16px;
          min-height: 190px;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }
        .stackedCard:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(500px 220px at 20% 20%, rgba(124,227,255,0.14), transparent 55%),
            radial-gradient(500px 220px at 80% 60%, rgba(140,255,193,0.12), transparent 60%);
          opacity: 0.95;
        }
        .stackedCard > * { position: relative; }
        .stackedCard.bottom { transform: translateY(-10px); }
        .stackedTitle { font-weight: 800; margin-bottom: 6px; }
        .stackedSub { color: var(--faint); font-size: 13px; }

        .finalCta {
          padding: 56px 0;
          background:
            radial-gradient(900px 500px at 20% 20%, rgba(124,227,255,0.22), transparent 60%),
            radial-gradient(900px 500px at 80% 60%, rgba(140,255,193,0.18), transparent 60%),
            rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.10);
        }
        .finalInner { text-align: center; }
        .finalInner .lead { margin: 10px auto 0; }

        .footer {
          border-top: 1px solid rgba(255,255,255,0.10);
          padding: 40px 0 22px;
          background: rgba(0,0,0,0.25);
        }
        .footerGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        .footerTitle { font-weight: 800; margin-bottom: 10px; }
        .footerLink {
          display: block;
          color: var(--muted);
          margin-bottom: 8px;
          font-size: 14px;
        }
        .footerLink:hover { color: rgba(255,255,255,0.92); }
        .footerBrand .brand { margin-bottom: 10px; }
        .footerText { color: var(--muted); line-height: 1.7; margin: 0; max-width: 55ch; }
        .footerBottom {
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: var(--faint);
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (min-width: 820px) {
          .nav { display: flex; }
          .heroInner { grid-template-columns: 1.15fr 0.85fr; gap: 32px; }
          .twoCol { grid-template-columns: 1.1fr 0.9fr; gap: 32px; }
          .mediaRow { grid-template-columns: 1fr 1fr; }
          .cards { grid-template-columns: 1fr 1fr; }
          .footerGrid { grid-template-columns: 1.4fr 0.6fr 0.6fr 0.6fr; }
        }
      `}</style>
    </div>
  );
}
