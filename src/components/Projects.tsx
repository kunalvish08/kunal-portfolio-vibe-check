import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 3,
      title: "Smart Indoor Energy Optimization",
      description:
        "A smart IoT system that detects human presence and monitors ambient light to automatically control indoor appliances, optimizing energy usage and promoting sustainable living.",
      tags: ["ESP32", "IoT", "Arduino", "MQTT", "ThingsBoard"],
      images: [
        "/lovable-uploads/2852dd30-22bc-4354-96f6-9208d2d0a87c.png",
        "/lovable-uploads/693f1be4-bc3e-4603-a55c-f668ea85c5e4.png",
        "/lovable-uploads/969f0c63-7b81-463f-a603-0dcc3ea0de04.png",
        "/lovable-uploads/c9be8110-d395-4528-a6fb-e6d6ad723fe1.png",
      ],
      liveLink: "https://www.linkedin.com/posts/kunal-vishwakarma-975b26326_iiot-iotproject-smartenergy-activity-7328438785535336448-ZRfu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJkc-kBsLqn8JdjN6LO2fLL42vcoy-kByA",
      githubLink: "https://github.com/kunalvish08",
      features: [
        "Motion-based automation (PIR)",
        "Light-sensitive switching (LDR)",
        "Appliance control via relay",
        "RGB LED for status indication",
        "Real-time data monitoring on ThingsBoard",
      ],
      technologies: [
        "ESP32 Microcontroller",
        "PIR Sensor + LDR (Light Sensor)",
        "Relay Module + RGB LED",
        "Arduino IDE + MQTT Protocol",
        "ThingsBoard for real-time IoT dashboard",
      ],
    },
    {
      id: 1,
      title: "Tourism Website",
      description:
        "A responsive tourism website showcasing various destinations and travel packages with interactive features.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
      liveLink: "https://tourismwebkunal.ccbp.tech/",
      githubLink: "https://github.com/kunalvish08",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, projects, and experience. Built with modern web technologies.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      liveLink: "#",
      githubLink: "https://github.com/kunalvish08",
    },
    {
      id: 4,
      title: "FoodMuch Responsive Website",
      description:
        "After hours of learning and hands-on practice, I've finally built a responsive food website using HTML, CSS, and Bootstrap. This project helped me understand the power of responsive design and sharpened my frontend skills on my journey to becoming a MERN stack developer.",
      tags: ["HTML", "CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      liveLink: "https://github.com/kunalvish08",
      githubLink: "https://github.com/kunalvish08",
      features: [
        "HTML + CSS structure",
        "Bootstrap Grid System",
        "Color Gradients",
        "Fully Responsive Layout",
        "Modern food website design",
      ],
    },
  ];

  const FeatureList = ({ items, title }: { items: string[], title: string }) => (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">{title}:</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <span className="text-kunalpink mr-2">•</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-900 to-kunalblack"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My <span className="gradient-heading">Projects</span>
          </h2>

          {/* IoT Project - Featured with Carousel */}
          <div 
            className={`transition-all duration-700 mb-16 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group overflow-hidden rounded-xl card-hover border border-gray-800 bg-gray-900/80 p-5">
              <h3 className="text-2xl font-semibold mb-3 gradient-heading">
                {projects[0].title}
              </h3>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {projects[0].description}
              </p>
              
              <div className="flex flex-col md:flex-row md:gap-6">
                <div className="md:w-1/2 mb-6">
                  <Carousel className="w-full max-h-72">
                    <CarouselContent>
                      {projects[0].images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="p-1">
                            <motion.div 
                              whileHover={{ scale: 1.02 }}
                              className="aspect-video flex items-center justify-center overflow-hidden rounded-lg"
                            >
                              <img 
                                src={image} 
                                alt={`Project image ${i+1}`}
                                className="object-contain h-full w-full rounded-lg"
                              />
                            </motion.div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects[0].tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="grid grid-cols-1 gap-4">
                    <FeatureList items={projects[0].features} title="Key Features" />
                    <FeatureList items={projects[0].technologies} title="Built With" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href={projects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-kunalpink hover:text-white transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span>View Project</span>
                </a>
                <a
                  href={projects[0].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-kunalblue hover:text-white transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Other Projects in Row Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative group overflow-hidden rounded-xl card-hover border border-gray-800 bg-gray-900/80 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-kunalpink hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-kunalblue hover:text-white transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
