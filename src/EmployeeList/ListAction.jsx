export function ListAction({ handleUpdate, handleDelete, index }) {
  return (
    <div>
      <button onClick={() => handleUpdate(index)}>Edit</button>
      <button onClick={() => handleUpdate(index)}>Update</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}
