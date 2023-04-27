import "../footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h1>About</h1>
        <p>How it works</p>
        <p>Development</p>
      </div>
      <div className="footer-technology">
        <h1>Technology</h1>
        <p>Google Nearby API</p>
        <p>ChatGPT API</p>
        <p>News API</p>
      </div>

      <div className="footer-team">
        <h1>Team</h1>
        <p>Andy Zhen</p>
        <p>Jiale (Jerry) Chen</p>
        <p>Da Yuan Zhao</p>
      </div>
    </div>
  );
}

export default Footer;
