
const avatar = '/assets/images/me-min.jpg'
const AboutMe = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React JS includes React Routing',
    'Redux for state management and Redux Thunk for middleware',
    'Scss',
    'Bootstrap'
  ]

  return (
    <section className="about">
      <div className="container">
        <div className="about__contain--title">
          <span className="about__line"></span>
          <div className="about__title">About Me</div>
        </div>
        <div className="about__contain--avatar">
          <img className="about__avatar" src={avatar} alt="avatar" />
        </div>
        <div className="about__contain--intro">
          <p className="about__text">Hello! My name is Riwandi. I’m a Software Developer focus on Front End  with React JS 
who have experience more  one year. Also My hobby is reading anything i see and writing what i feel.  
You know what? I’m so interested with Comedy’s Book and You!</p>
        </div>
        <div className="about__contain--works">
          <h3 className="about__title--works">Works</h3>
          <p className="about__info--works">I’m now working in startup which working in the field online booking air tickets, hotels, and all things related to the service business.</p>
          <p className="about__info--works">Previously i have work as Frontend End Developer in Semarang build a  web platform for order truck to logistic purpose. And as Freelancer Web Design at Metro TV</p>
        </div>
        <div className="about__contain--specialties">
          <h3 className="about__title--specialties">Specialties</h3>
          <p className="about__info--specialties">
          I have Specialties in field Front end developer more one year and also have ability to doing creative writing like poem, story and jokes (some fail and success). and  below my skill i learned in technology:
          </p>
          <ul>
            {
              skills.map((skill, index) => (
                <li className="about__skills" key={index}>- {skill}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
