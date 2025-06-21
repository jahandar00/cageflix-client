import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h2 className="footerTitle">Cageflix</h2>
        <p className="footerText">
          In an age where streaming platforms dominate and choices are infinite, Cageflix takes a focused, fun approach to rediscovering the movie experience — through the unique lens of one of cinema’s most iconic and unpredictable stars: Nicolas Cage.
        </p>
        <p className="footerText">
          Long before algorithms curated our content, movies were social events. From neighborhood summer screenings to DVD collections passed between friends, watching films was a shared ritual. Cageflix channels that nostalgia by offering a curated, interactive digital experience built with modern tools — blending the simplicity of old-school movie nights with the personalization of today’s tech.
        </p>
        <p className="footerText">
          With just one click, viewers can explore Nicolas Cage’s wide-ranging filmography — from action thrillers and cult classics to emotional dramas and eccentric comedies. Every film listed on Cageflix is sourced from the official IMDb dataset, cleaned, categorized, and presented in an intuitive interface that puts the joy of browsing front and center.
        </p>
        <p className="footerText">
          Thanks to today’s technology, viewers can explore:
        </p>
        <ul className="footerList">
          <li>High-quality movie descriptions</li>
          <li>Genre-based discovery</li>
          <li>Fuzzy search for co-stars and plots</li>
          <li>A responsive design that works beautifully across devices</li>
        </ul>
        <p className="footerText">
          Whether you’re in the mood for <em>Face/Off</em>, <em>National Treasure</em>, or one of Cage’s many hidden gems, Cageflix gives you the tools to explore his career like never before.
        </p>
        <p className="footerText">
          More than just a movie list — Cageflix is a tribute to cinematic discovery, a tech-powered celebration of storytelling, and a lovingly crafted student project that merges nostalgia with modern development practices.
        </p>
      </div>
    </footer>
  );
}
