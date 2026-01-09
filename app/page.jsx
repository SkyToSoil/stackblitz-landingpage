"use client";

export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="logoMark" aria-hidden="true" />
            <span className="brandName">Water Stories</span>
          </div>

          <nav className="nav">
            <a href="#stories" className="navLink">Stories</a>
            <a href="#trainings" className="navLink">Trainings</a>
            <a href="#community" className="navLink">Community</a>
            <a href="#about" className="navLink">About</a>
          </nav>

          <div className="headerCtas">
            <a className="btn btnGhost" href="https://community.waterstories.com/" target="_blank" rel="noreferrer">
              Join the Community
            </a>
            <a className="btn btnPrimary" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
              Join the Course
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <h1 className="heroTitle">
                Reviving Our <br />
                <span className="accent">Water and Land</span>
              </h1>

              <p className="heroSubtitle">
                Discover how you can restore the health of watersheds and ecosystems, and create water security and abundance wherever you live.
              </p>

              <div className="ctaRow">
                <a className="btn btnPrimary" href="https://community.waterstories.com/" target="_blank" rel="noreferrer">
                  Join the Community
                </a>
                <a className="btn btnGhost" href="https://www.waterstories.com/core-course" target="_blank" rel="noreferrer">
                  Join the Course
                </a>
              </div>

              <div className="heroMeta">
                <div className="pill">Water Cycle Restoration</div>
                <div className="pill">Learning • Training • Action</div>
                <div className="pill">Community-centered</div>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <div className="visualCard">
                <div className="visualTitle">Landscape Change</div>
                <div className="visualSub">Flood • Drought • Fire → Retention • Infiltration • Resilience</div>
                <div className="visualGrid">
                  <div className="visualTile">Catch</div>
                  <div className="visualTile">Slow</div>
                  <div className="visualTile">Spread</div>
                  <div className="visualTile">Sink</div>
                </div>
              </div>

              <div className="visualCard secondary">
                <div className="visualTitle">After the first rainy season</div>
                <div className="visualSub">Design actions that show measurable results quickly.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="kicker">The Water Stories Mission</div>
            <h2 className="h2">Bringing Back Water</h2>
            <p className="lead">
              Water Stories is a learning, training, and action platform focused entirely on Water Cycle Restoration.
            </p>
            <p className="text">
              Water Stories offers a community-centered approach to solving our most pressing environmental crises. Drought, flood, fire, polluted water—no matter what issue you face,
              the goal is the same: rebuild healthy landscapes and water abundance by transforming watersheds into water-catchments.
            </p>
          </div>
        </section>

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
        <div className="container footerBottom">
          <span>© {new Date().getFullYear()} Your Site. Built as a facsimile demo.</span>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #070b0f;
          --text: rgba(255, 255, 255, 0.92);
          --muted: rgba(255, 255, 255, 0.72);
          --faint: rgba(255, 255, 255, 0.56);
          --stroke: rgba(255, 255, 255, 0.14);
          --accent: #7ce3ff;
          --accent2: #8cffc1;
        }

        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          background:
            radial-gradient(1200px 800px at 20% -10%, rgba(124, 227, 255, 0.18), transparent 55%),
            radial-gradient(1000px 700px at 85% 10%, rgba(140, 255, 193, 0.14), transparent 60%),
            var(--bg);
          color: var(--text);
        }

        .container { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }

        .header {
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(7, 11, 15, 0.65);
          border-bottom: 1px solid var(--stroke);
        }
        .headerInner { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; gap: 18px; }
        .brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 650; }
        .logoMark { width: 14px; height: 14px; border-radius: 999px; background: linear-gradient(135deg, var(--accent), var(--accent2)); }
        .nav { display: none; gap: 18px; }
        .navLink { opacity: 0.78; font-size: 14px; }
        .headerCtas { display: flex; gap: 10px; }

        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 10px 14px; border-radius: 12px; font-size: 14px; font-weight: 600;
          border: 1px solid var(--stroke);
          background: rgba(255,255,255,0.04);
          white-space: nowrap;
        }
        .btnPrimary { background: linear-gradient(135deg, rgba(124,227,255,0.22), rgba(140,255,193,0.16)); }
        .btnGhost { background: rgba(255,255,255,0.03); }

        .hero { padding: 56px 0 10px; }
        .heroInner { display: grid; grid-template-columns: 1fr; gap: 24px; }
        .heroTitle { font-size: clamp(44px, 6vw, 68px); line-height: 0.98; margin: 0 0 14px; }
        .accent { background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; color: transparent; }
        .heroSubtitle { margin: 0 0 18px; color: var(--muted); font-size: 16px; max-width: 60ch; }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 8px 0 18px; }
        .pill { font-size: 12px; padding: 7px 10px; border-radius: 999px; border: 1px solid var(--stroke); color: var(--faint); }

        .heroVisual { display: grid; gap: 12px; }
        .visualCard { border: 1px solid var(--stroke); background: rgba(255,255,255,0.06); border-radius: 18px; padding: 16px; }
        .visualTitle { font-weight: 700; margin-bottom: 6px; }
        .visualSub { color: var(--muted); font-size: 13px; }
        .visualGrid { margin-top: 12px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .visualTile { border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 12px; font-weight: 650; text-align: center; }

        .section { padding: 56px 0; }
        .kicker { color: var(--faint); font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; }
        .h2 { font-size: clamp(28px, 3.4vw, 40px); margin: 0 0 12px; }
        .lead { color: var(--muted); font-size: 16px; line-height: 1.6; margin: 0 0 10px; }
        .text { color: var(--muted); font-size: 15px; line-height: 1.75; margin: 0; }

        .finalCta { padding: 56px 0; border-top: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.02); }
        .finalInner { text-align: center; }

        .footer { border-top: 1px solid rgba(255,255,255,0.10); padding: 28px 0; background: rgba(0,0,0,0.25); }
        .footerBottom { color: var(--faint); font-size: 13px; }

        @media (min-width: 820px) {
          .nav { display: flex; }
          .heroInner { grid-template-columns: 1.15fr 0.85fr; gap: 32px; }
        }
      `}</style>
    </div>
  );
}
