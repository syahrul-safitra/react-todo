export default function ListButton(props) {
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item) => item.id == id);

  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  let btnPrev = false;

  // jika task sebelumnya ada : tampilkan
  if (props.tasks[prevIndex] != undefined) {
    btnPrev = true;
  }

  // jika task setelahnya ada : tampilkan
  let btnNext = false;
  if (props.tasks[nextIndex] != undefined) {
    btnNext = true;
  }

  return (
    <>
      {/* Button atas : */}

      {btnPrev ? (
        <button
          className="btn btn-square btn-outline"
          onClick={() => props.move(currentIndex, prevIndex)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
            />
          </svg>
        </button>
      ) : (
        ""
      )}

      {/* Button bawah : */}

      {btnNext ? (
        <button
          className="btn btn-square btn-outline"
          onClick={() => props.move(currentIndex, nextIndex)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
            />
          </svg>
        </button>
      ) : (
        ""
      )}

      {/* Button hapus : */}
      <button className="btn join-item" onClick={() => props.remove(id)}>
        Hapus
      </button>
    </>
  );
}
