export default function Projects() {
  const projects = [
    {
      title: "Quiz Website",
      description:
        "An engaging quiz platform with interactive features and real-time scoring.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Interactive UI",
        "Real-time scoring",
        "Responsive design",
      ],
      github: "https://github.com/SawairaMughal112/Quiz_Website.git",
    },
    {
      title: "Question Paper Generator",
      description:
        "Automated question paper creation system for educational institutions.",
      technologies: ["Java", "MySQL"],
      highlights: [
        "Automated generation",
        "Database management",
        "Custom templates",
      ],
      github: null,
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive system for managing hospital operations and patient records.",
      technologies: ["Java", "MySQL"],
      highlights: [
        "Patient management",
        "Appointment scheduling",
        "Record tracking",
      ],
      github: null,
    },
    {
      title: "XReportify",
      description:
        "Picture to Report Generator - transforms images into formatted reports.",
      technologies: ["Flutter", "Firebase"],
      highlights: [
        "Image processing",
        "Report generation",
        "Cloud storage",
      ],
      github: "https://github.com/SawairaMughal112/FinalProject",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    Technologies:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    Highlights:
                  </p>

                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 flex items-center"
                      >
                        <span className="text-blue-600 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    View Project on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}