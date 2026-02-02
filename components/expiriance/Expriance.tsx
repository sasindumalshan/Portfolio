function Expriance() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 mt-20 text-white">
      {/* Title */}
      <div className="mb-12">
        <div className="border-t-2 border-white w-20 mb-3"></div>
        <h1 className="font-semibold text-3xl md:text-4xl">
          Experience
        </h1>
        <p className="text-gray-400 mt-2">
          Things I’ve built, contributed & learned along the way 🚀
        </p>
      </div>

      {/* Experience Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:bg-white/15 transition">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Associate Software Engineer
          </h2>
          <span className="text-sm text-gray-300">
            2024 – 2025
          </span>
        </div>

        <p className="text-lg font-medium text-gray-200 mb-2">
          INTELLEON
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Worked as a <span className="text-white font-medium">Software Engineer Intern</span>, contributing to real-world production systems.
          </li>
          <li>
            Involved in a long-term <span className="text-white font-medium">Australian Loan Application</span> project to streamline loan processing and client management.
          </li>
          <li>
            Handled <span className="text-white font-medium">full stack development</span> – frontend UI development and backend API implementation.
          </li>
          <li>
            Collaborated with cross-functional teams to introduce new features and improve overall system performance.
          </li>
          <li>
            Assisted in designing and developing software applications following industry best practices.
          </li>
          <li>
            Contributed to a <span className="text-white font-medium">Task Management System</span> for a Sri Lankan equipment maintenance company.
          </li>
          <li>
            Helped streamline motor repair tracking, daily task assignments, and progress monitoring.
          </li>
          <li>
            Later transitioned fully into the Australian loan system, enhancing system functionality and stability.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Expriance;
