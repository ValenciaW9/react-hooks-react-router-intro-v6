function App() {
    let currentPage;
    if(window.location.pathname=== "/movies") {
        currentPage = <Movies /> ;
    } else if (window.location.pathname === "/about") {
        currentPage = <About />;
    } else {
          currentPage = <h2>404 not found</h2>;
    }
    
    return (
        <div> 
            <h1>Movie Maker 3000</h1>
            {currentPage}
        </div>
    );
}