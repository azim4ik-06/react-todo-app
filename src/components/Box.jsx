export default function Box({ children }) {
  return (
    <div>
      <div className="shadow-lg p-4 rounded-lg bg-slate-100">{children}</div>
    </div>
  );
}
