export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
