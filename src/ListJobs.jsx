import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ListJobs({
  listJob,
  handleCheck,
  handleDelete,
  handleEdit,
  count,
}) {
  console.log(listJob);
  return (
    <>
      <ul>
        {listJob?.map((job) => (
          <li className="LiToDoList" key={job.id}>
            <div>
              <input
                type="Checkbox"
                onChange={() => handleCheck(job.id)}
                checked={job.isChecked}
              />
              <span
                style={{
                  textDecoration: job.isChecked ? "line-through" : "none",
                }}
              >
                {job.jobName}
              </span>
            </div>

            <div>
              <button onClick={() => handleEdit(job.id)}>
                <EditIcon color="error" />
              </button>
              <button onClick={() => handleDelete(job.id)}>
                <DeleteIcon color="error" />
              </button>
            </div>
          </li>
        )) ?? "No job found"}
      </ul>
      <p>
        Công việc đã hoàn thành : {count}/{listJob.length}
      </p>
    </>
  );
}
