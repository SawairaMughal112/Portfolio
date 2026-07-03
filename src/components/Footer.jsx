export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">Sawaira Mughal</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © {currentYear} Sawaira Mughal. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
