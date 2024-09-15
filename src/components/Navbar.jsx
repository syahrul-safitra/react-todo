export default function Navbar(props) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">My Todolist</a>
          <p>
            {props.taskCompleted || "0"} / {props.tasks.length}
          </p>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
