"use client";

export default function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="logoMark" aria-hidden="true" />
            <span className="brandName">Sky to Soil Systems</span>
          </div>

          <nav className="nav">
            <a href="#Projects" className="navLink">Projects</a>
            <a href="#Recent Clients" className="navLink">Recent Clients</a>
            <a href="#Partners" className="navLink">Partners</a>
            <a href="#about" className="navLink">About</a>
          </nav>

          <div className="headerCtas">
            <a className="btn btnGhost" href="https://projects.skytosoil.life" target="_blank" rel="noreferrer">
              Explore Recent Projects
            </a>
            <a className="btn btnPrimary" href="https://www.skytosoil.life/principles" target="_blank" rel="noreferrer">
              Pillars of Water Restoration
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
                <span className="accent">Water and Soil</span>
              </h1>

              <p className="heroSubtitle">
                Explore how **precision earthworks** work with natural systems to create water security in any landscape, protecting against flood and wildfire.
wherever you live.
              </p>

              <div className="ctaRow">
                <a className="btn btnPrimary" href="https://partners.skytosoil.life/" target="_blank" rel="noreferrer">
                  Check Out Our Partners
                </a>
                <a className="btn btnGhost" href="https://projects.skytosoil.life" target="_blank" rel="noreferrer">
                  Visit Recent Projects
                </a>
              </div>

              <div className="heroMeta">
                <div className="pill">Water Security</div>
                <div className="pill">Assessment • Guidance • Action</div>
                <div className="pill">Client-Centered</div>
              </div>
            </div>

            <div className="heroVisual" aria-hidden="true">
              <div className="visualCard">
                <div className="visualTitle">Dryland Contexts</div>
                <div className="visualSub">Fire • Flood • Drought → Retention • Security • Resilience</div>
                <div className="visualGrid">
                  <div className="visualTile">Catchments</div>
                  <div className="visualTile">Slow</div>
                  <div className="visualTile">Spread</div>
                  <div className="visualTile">Sink</div>
                </div>
              </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="kicker">Why Sky to Soil?n</div>
            <h2 className="h2">Putting Every Drop of Rain to Work for You </h2>
            <p className="lead">
              Design interventions that work with gravity, soil, and biology, not against them.
            </p>
            <p className="text">
              Sky to Soil provides private landowners with a nature-based approach to protecting homes and land from drought, flood, and wildfire by using 
              thoughtful design and earthworks to retain water in living soil—while increasing food production, restoring landscape function, and enhancing wildlife habitat.
            </p>
          </div>
        </section>

        <section className="finalCta">
          <div className="container finalInner">
            <h2 className="h2">Want a Free Rapid Assessment?</h2>
            <p className="lead">
              Join a community of satisfied clients that have protected their investments and their natural assets.
            </p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href="https://skytosoil.com/projects" target="_blank" rel="noreferrer">
               Call or Email Today
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
          backg
