import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const pages = [
    {
      pageName: "About",
      pageRoute: "/",
    },
    {
      pageName: "Contact",
      pageRoute: "/contact",
    },
    {
      pageName: "Portfolio",
      pageRoute: "/portfolio",
    },
    {
      pageName: "Resume",
      pageRoute: "/resume",
    },
  ];

  return (
    <div>
      <Router>
        <Nav>
          {pages.map((page) => {
            return (
              <li>
                <NavLink
                  activeclassname="active route-active"
                  className="nav-over mx-2"
                  to={page.pageRoute}
                >
                  {page.pageName}
                </NavLink>
              </li>
            );
          })}
        </Nav>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
