export default function Achievements() {
  const achievements = [
    {
      icon: "🎓",
      title: "Fully Funded Scholarship",
      description:
        "Secured a 4-year fully funded BS in Computer Science from Sindh government for IBA University.",
    },
    {
      icon: "🎓",
      title: "A-1 Grade in DIT",
      description:
        "Completed the Diploma in Information Technology (DIT) with an A-1 grade.",
    },
    {
      icon: "🥈",
      title: "8th Place - Techfest",
      description:
        "Secured 8th position out of 72 teams in the university Techfest coding competition.",
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description:
        "Active contributor to coding challenges on HackerRank and LeetCode platforms.",
    },
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
