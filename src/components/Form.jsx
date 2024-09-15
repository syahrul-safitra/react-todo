export default function Form(props) {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                ref={props.newTask}
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button
              className="btn join-item"
              type="submit"
              onClick={props.addTask}
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
