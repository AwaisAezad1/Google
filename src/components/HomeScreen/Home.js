import Header from './Header';
import React, { createContext, useState, useEffect } from 'react';
import './Home.css';

export const ThemeContext = createContext(null);

function Home() {
  const [theme, setTheme] = useState("dark");


  // store last selected theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  //toggel between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className='app' id={theme}>

          <Header />

          <div className='switch'>
            <label onClick={toggleTheme} checked={theme === "dark"}>{theme === 'light' ? <img width="35" height="35" src="https://img.icons8.com/color/48/light-on--v1.png" alt="light-on--v1"/> : <img width="35" height="35" src="https://img.icons8.com/FFFFFF/ios/50/light-off.png" alt="light-off"/>}</label>
          </div>


          <div className="container">
            <div className="row">
              <div className="col-md-12 home-screen align-items-center justify-content-center">
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  alt="Google Logo"
                />

                <div className="search-box  border d-flex py-2 justify-content-between align-items-center">
                  <i className="fa fa-search"></i>
                  <form className="form-search">
                    <input
                      type="text"
                      placeholder='Search Google or type a URL'
                      name="term"
                      id="term"
                    />
                  </form>
                  <i
                    className="fa fa-microphone"
                  ></i>
                </div>

                <div className="buttons mt-4 align-items-center justify-content-center">
                  <input
                    type="button"
                    className="btn  mx-1"
                    value="Google Search"
                  />
                  <input
                    type="button"
                    className="btn "
                    value="I'm Feeling Lucky"
                  />
                </div>

              </div>

            </div>

          </div>

      </div>

    </ThemeContext.Provider>
  );
}

export default Home;
