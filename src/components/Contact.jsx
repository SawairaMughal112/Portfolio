export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:sawairamughal112@gmail.com'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+923173471496'
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="break-words">sawairamughal112@gmail.com</p>
          </a>

          <a 
            onClick={handlePhoneClick}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>+92 317 3471496</p>
          </a>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>G-10, Islamabad, Pakistan</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
          </p>
          <button 
            onClick={handleEmailClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Send Me an Email
          </button>
        </div>
      </div>
    </section>
  )
}
