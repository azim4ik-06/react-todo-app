export default function ListItem({ id, name, completed }) {
  return (
    <div className="flex justify-between mt-4">
      {name}
      <div className="space-x-2">
        <button className="rounded-lg p-2 bg-red-300">Del</button>
        <button className="rounded-lg p-2 bg-green-300">Com</button>
      </div>
    </div>
  );
}
