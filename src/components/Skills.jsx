export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Java', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'REST APIs', 'Express.js']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase']
    },
    {
      title: 'Core Competencies',
      skills: ['Problem Solving', 'Data Structures', 'Algorithm Design', 'Git', 'Agile']
    }
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
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
