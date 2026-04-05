function Item({ item }) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center mb-3 rounded shadow border-0 text-white"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <span className="fw-semibold">{item}</span>

       <button className="btn btn-sm btn-light text-danger fw-bold">
        Delete
       </button>
    </li>
  );
}

export default Item;
