export default function Hero({ setActiveSection }) {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Sawaira Mughal</h1>
        <p className="text-xl sm:text-2xl mb-6 opacity-90">Full-Stack Developer | Problem Solver | AI Enthusiast</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-85">
          BSCS graduate from IBA University specializing in full-stack development with expertise in React, Node.js, and modern web technologies.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => setActiveSection('projects')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            View My Work
          </button>
          <a 
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
