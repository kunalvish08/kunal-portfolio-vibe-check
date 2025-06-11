
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
      id: 1,
      title: "Smart Indoor Energy Optimization",
      description:
        "A smart IoT system that detects human presence and monitors ambient light to automatically control indoor appliances, optimizing energy usage and promoting sustainable living.",
      tags: ["ESP32", "IoT", "Arduino", "MQTT", "ThingsBoard"],
      image: "/lovable-uploads/2852dd30-22bc-4354-96f6-9208d2d0a87c.png",
      liveLink: "https://www.linkedin.com/posts/kunal-vishwakarma-975b26326_iiot-iotproject-smartenergy-activity-7328438785535336448-ZRfu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJkc-kBsLqn8JdjN6LO2fLL42vcoy-kByA",
      githubLink: "https://github.com/kunalvish08",
    },
    {
      id: 2,
      title: "Tourism Website",
      description:
        "A responsive tourism website showcasing various destinations and travel packages with interactive features.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      liveLink: "https://tourismwebkunal.ccbp.tech/",
      githubLink: "https://github.com/kunalvish08",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, projects, and experience. Built with modern web technologies.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
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
      liveLink: "https://kunalfoodweb.ccbp.tech/",
      githubLink: "https://github.com/kunalvish08",
    },
  ];

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

          {/* All Projects in Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
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
