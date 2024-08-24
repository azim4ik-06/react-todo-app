import Box from "./Box"

export default function ToDo() {
  return (
    <div>
      <Box>
        <h1 className="text-3xl text-center">ToDo App</h1>
        <form action="" className="mt-4">
          <input
            type="text"
            className="p-2 border border-slate-300 rounded-xl me-3"
          />
          <button className="bg-indigo-200 px-4 py-2 rounded-xl hover:bg-indigo-400 active:bg-indigo-500">
            Добавить
          </button>
        </form>
      </Box>
    </div>
  );
}
