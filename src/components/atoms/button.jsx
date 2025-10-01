export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={children}
      className="bg-[#08A1A7] text-white py-2 px-4 rounded-full"
    >
      {children}
    </button>
  );
}
