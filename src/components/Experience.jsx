export default function Experience() {
  const experiences = [
    {
      role: 'Faculty Member',
      company: 'Aptech (MSG)',
      period: '2023 - Present',
      description: 'Teaching software development courses and mentoring students on modern web technologies.',
      achievements: ['Developed curriculum', 'Mentored 50+ students', 'Led workshops']
    },
    {
      role: 'AI Training Contributor',
      company: 'Remotasks',
      period: '2022 (3 months)',
      description: 'Worked on coding tasks, annotation, and result labeling to enhance AI model accuracy.',
      achievements: ['Completed 100+ tasks', 'High accuracy rate', 'Model improvement']
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2021 - Present',
      description: 'Developed frontend and AI-driven applications with focus on user-friendly interfaces.',
      achievements: ['5+ projects completed', 'Client satisfaction', 'Full-stack solutions']
    },
    {
      role: 'IT Intern',
      company: 'Soorty Pvt Ltd',
      period: '2019 - 2020',
      description: 'Gained practical experience in IT department and system administration.',
      achievements: ['System support', 'Technical documentation', 'Hardware maintenance']
    }
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-semibold text-blue-600">{exp.period}</span>
              </div>
              <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, i) => (
                  <span key={i} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
