export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

  return (
    <section className="min-h-screen px-10 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white p-4 rounded shadow text-center font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
