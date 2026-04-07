function Errors({ items }) {
  return (
    <>
      {items.length === 0 && (
        <div className="text-center mt-4">
          <div className="card shadow-sm border-0 d-inline-block px-4 py-2">
            <h5 className="mb-0 text-muted" style={{ fontWeight: "bold", fontSize: "30px" }}>
              🍽️ No food items found
            </h5>
          </div>
        </div>
      )}
    </>
  );
}

export default Errors;