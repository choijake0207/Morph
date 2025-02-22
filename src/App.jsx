import React, {useState, useEffect} from 'react'
import "./App.css"
import Neumorphic from './Components/Neumorphic'
import {Moon, Sun, GithubLogo} from "phosphor-react"

export default function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    setTheme(storedTheme)
  }, [])
  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      localStorage.setItem("theme", "light")
    } else {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    }
  }

   return (
    <div className={`app ${theme === "light" ? "light" : ""}`}>
      <header className="app-header">
        <p>JC</p>
        <div className="btn-container">
          <button className="theme-btn" onClick={handleSetTheme}>
            {theme === "dark" ? <Sun/> : <Moon/>}
          </button>
          <a><GithubLogo/></a>

        </div>
      </header>
      <div className="title">
        <h1>Morph</h1>
        <p>A collection of interactive components</p>
      </div>
      <main className="main-content">

        <section className="style_section" id="neumorphic">
          <p className="section_title">Neumorphic</p>
          <div className="style_card_container">
            <Neumorphic/>
          </div>
        </section>

        <section className="style_section" id="skeumorphic">
          <p className="section_title">Skeumorphic</p>
          <div className="style_card_container"></div>
        </section>

        <section className="style_section" id="glassmorphic">
          <p className="section_title">Glassmorphic</p>
          <div className="style_card_container"></div>
        </section>

        <section className="style_section" id="neobrutal">
          <p className="section_title">Neobrutalistic</p>
          <div className="style_card_container"></div>
        </section>

        <section className="style_section" id="flat">
          <p className="section_title">Flat</p>
          <div className="style_card_container"></div>
        </section>

        <section className="style_section" id="holographic">
          <p className="section_title">Holographic</p>
          <div className="style_card_container"></div>
        </section>

      </main>
    </div>
  )
}
