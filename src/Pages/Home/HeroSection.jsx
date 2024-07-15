export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Aditya</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title-color">Full Stack</span>{" "}
                        <br />
                    Developer
                    </h1>
                    <p className="hero--section--description">
                    Hello! I’m [Your Name], a passionate web developer specializing in ReactJS.<br></br> With a strong foundation in data structures and algorithms, I excel in solving complex problems efficiently. My journey in web development has equipped me with the skills to build dynamic and responsive applications.
                        <br />
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/aditya-Herosection.jpg" alt="" />
            </div>
        </section>
    );
}
