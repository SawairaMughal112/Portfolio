export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gray-700 text-lg space-y-4">
              <p>
                I’m a Full Stack Developer with a BSCS degree from IBA
                University and a Diploma in Information Technology (DIT), where
                I graduated with an A-1 grade.
              </p>

              <p>
                I’ve worked in different roles, including teaching software
                development at Aptech, contributing to AI model training at
                Remotasks, and building web applications as a freelancer.
              </p>

              <p>
                I enjoy building simple, user-friendly applications that solve
                real problems. I like learning new technologies and improving my
                skills by working on practical projects.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  📍 Location
                </h3>
                <p className="text-gray-700">G-10, Islamabad, Pakistan</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                <p className="text-gray-700">sawairamughal112@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📱 Phone</h3>
                <p className="text-gray-700">+92 317 3471496</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  🎓 Education
                </h3>
                <p className="text-gray-700">BSCS, IBA University (2019)</p>
                <p className="text-gray-700">DIT - A-1 Grade (2019)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
