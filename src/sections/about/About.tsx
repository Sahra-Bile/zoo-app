import './about.scss'
import '../../style/container.scss'
export const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img
              src="https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              alt="About"
            />
          </div>
          <div className="about__portrait">
            <img
              src="https://images.unsplash.com/photo-1543260775-945c562403b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80"
              alt="About"
            />
          </div>
        </div>
        <div className="about__right">
          <h2> Om oss</h2>
          <p>
            I djurfabrikerna används djur för att människor vill ha deras kött,
            mjölk och ägg. Tyvärr behandlas de här djuren utan hänsyn till att
            de är kännande individer med egna behov. Därför jobbar Zaharas Zoo
            tillsammans med Djurens Rätt för att förbättra livet för djuren i
            djurfabrikerna, men vi nöjer oss inte med det: vi anser också att
            djur har rätt till sina egna liv.
          </p>
          <p>
            Zaharas Zoo vision är att varje djur får tillräckligt med mat och
            att varje djur har matrutin. Därför kommer du in i bilden. när du
            besöker djuren kolla vem som inte har fått mat och mata dem. Varje
            djur bör få mat var tredje timme.
          </p>
        </div>
      </div>
    </section>
  )
}
