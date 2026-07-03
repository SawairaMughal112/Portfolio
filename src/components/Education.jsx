export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IBA University, Sukkur',
      year: '2019',
      details: 'Completed with distinction. Fully funded scholarship by Sindh government.'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Technical Institute',
      year: '2019',
      details: 'A-1 Grade. Completed alongside Intermediate Education.'
    }
  ]

  const courses = [
    { name: 'Web Development', date: 'April 2022', description: 'Refined skills in modern web technologies' },
    { name: 'Introduction to Java', date: 'August 2021', description: 'Strong foundation in Java programming' },
    { name: 'Data Structures', date: 'September 2021', description: 'Key concepts in data structures and algorithm design' },
    { name: 'Problem Solving', date: 'January 2021', description: 'Coding challenges on HackerRank and LeetCode' }
  ]

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Education & Courses</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Degrees</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-700">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Courses</h3>
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition">
                  <h4 className="font-bold text-gray-900 mb-1">{course.name}</h4>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{course.date}</p>
                  <p className="text-sm text-gray-700">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
