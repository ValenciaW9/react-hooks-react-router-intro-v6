function NavBar() {
    function navigate(e) {
      // don't make a GET request
      e.preventDefault();
      // use pushState to navigate using the href attribute of the <a> tag
      window.history.pushState(null, "", e.target.href);
    }
  
    return (
      <nav>
        <a href="/movies" onClick={navigate}>
          Movies
        </a>
        <a href="/about" onClick={navigate}>
          About
        </a>
        <a href="/login" onClick={navigate}>
          Login
        </a>
      </nav>
    );
  }