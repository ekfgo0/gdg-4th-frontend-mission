function Button({ value, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`px-6 py-2 rounded-full font-semibold text-white transition duration-200
        ${isActive ? 'bg-black ring-4 ring-blue-400' : 'bg-black hover:bg-gray-800'}
      `}
    >
      {value}
    </button>
  );
}

export default Button;
