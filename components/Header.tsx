import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
   <>
  <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 fixed top-0 right-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
    <section className="text-2xl font-bold text-gray-800 dark:text-white">logo</section>
    <section className="flex gap-8">
      <li className="list-none">
        <a 
          href="#" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </li>
      <li className="list-none">
        <a 
          href="#" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </li>
      <li className="list-none">
        <a 
          href="#" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </li>
      <li className="list-none">
        <a 
          href="#" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      </li>
      <ThemeToggle />

    </section>
    {/* <ThemeToggle /> */}

  </header>
</>
  )
}
