import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer & AI/ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a B.Tech Computer Science student at VIT with a passion for
              building impactful digital solutions. I enjoy working on{" "}
              <strong>AI/ML models</strong> and <strong>full-stack projects</strong>, 
              combining problem-solving with creativity.
            </p>

            <p className="text-muted-foreground">
              My focus lies in <strong>scalable applications</strong>, 
              <strong>data-driven insights</strong>, and exploring 
              cutting-edge technologies. I’m eager to contribute my skills
              and grow through opportunities in{" "}
              <strong>SDE</strong> and <strong>AI/ML roles</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="./public/Kumari-Vaishnavi-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Section - Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web apps using modern frameworks like React & Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & ML Projects</h4>
                  <p className="text-muted-foreground">
                    Applying machine learning models to solve real-world challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaborative Projects</h4>
                  <p className="text-muted-foreground">
                    Working in teams to design and implement software solutions with agile methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
