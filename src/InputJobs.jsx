export default function InputJobs({ addJobs, error }) {
  return (
    <form onSubmit={addJobs}>
      <input type="text" placeholder="Nhập tên công việc" autoFocus />
      <span>{error}</span>
      <button type="submit" id="btnAdd">
        Thêm
      </button>
    </form>
  );
}
