function Footer({ logo }) {
  return (
    <footer className="py-6 lg:py-12">
      <div>
        <a
          href="https://eazithenga.com"
          title="Visit Eazithenga website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-faded-black hover:text-black transition-colors"
        >
          <span>Powered by Eazithenga</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
