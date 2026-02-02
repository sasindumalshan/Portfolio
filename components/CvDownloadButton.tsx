export default function CvDownloadButton() {
    return (
        <button className="relative inline-flex items-center justify-center px-6 py-2 font-semibold rounded-lg overflow-hidden group shadow-lg shadow-blue-500/50 w-[200px]">
            {/* Gradient background on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            {/* Solid background (can be white/black based on theme) */}
            <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 rounded-lg"></span>

            {/* Gradient border - මෙය වැදගත්! */}
            <span className="absolute inset-[-2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            {/* Text */}
            <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white dark:group-hover:text-white transition-colors duration-500">
                Download CV
            </span>
        </button>
    )
}
