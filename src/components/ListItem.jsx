import "./ListButton";
import ListButton from "./ListButton";

export default function ListItem(props) {
  // Sort Tasks :
  props.tasks.sort((a, b) => b.id - a.id);
  const data = [
    {
      id: 1,
      task: "memasak",
    },
    {
      id: 2,
      task: "mencuci",
    },
    {
      id: 3,
      task: "ngoding",
    },
    {
      id: 4,
      task: "memecahkan masalah matematika",
    },
  ];
  return (
    <div className="join mt-5 flex justify-center">
      <div>
        {props.tasks.map((item) => {
          console.log(item);
          return (
            <div className="flex flex-row" key={item.id}>
              <div>
                <div>
                  {!item.completed || (
                    <input
                      type="checkbox"
                      checked
                      onChange={() => props.setCompleted(item.id)}
                      className="input input-bordered checkbox join-item"
                    />
                  )}

                  {item.completed || (
                    <input
                      type="checkbox"
                      onClick={() => props.setCompleted(item.id)}
                      className="input input-bordered checkbox join-item"
                    />
                  )}
                </div>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={item.task}
                className={`input input-borderedinput w-full max-w-xs ${
                  item.completed ? "line-through" : ""
                }`}
                readOnly
              />
              <div className="indicator">
                <ListButton
                  id={item.id}
                  tasks={props.tasks}
                  move={props.move}
                  remove={props.remove}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
