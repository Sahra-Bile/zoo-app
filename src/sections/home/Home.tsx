import React from 'react'
import './home.scss'
export const Home = () => {
  return (
    <section className="home-container">
      <div className="home-container__hero">
        <p className="welcome">
          Välkomen till min zoo! Här hittar du fina djur! afrikans djur i
          oslagbar natur Lär känna de afrikanska djuren i den zaharas
          vildmarken! Här bor vargar, lodjur och andra afrikanska djurarter i
          sin naturliga miljö. Vi lever efter ledorden "inga djur i bur" och
          djuren bor i stora, fina hägn där djuren har möjlighet att få utlopp
          för sina naturliga beteenden.
        </p>
        <div className="home-container__hero__img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8em9vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="hero-img"
          />
        </div>
      </div>
    </section>
  )
}
