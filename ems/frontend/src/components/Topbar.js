export default function Topbar({ onLogout }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold text-gray-800">
        EMS Dashboard
      </h1>

      <button
        onClick={onLogout}
        className="bg-primary text-white px-4 py-2 rounded-full shadow-soft"
      >
        Logout
      </button>
    </div>
  );
}
