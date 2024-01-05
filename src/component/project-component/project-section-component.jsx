import { useState, useEffect } from "react";
import { Box, VStack, Heading, HStack } from "@chakra-ui/react";
import "./project.styles.css";

const ProjectSection = () => {
  const contStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const dateStyle = {
    width: "12.2rem",
    height: "1.8rem",
    backgroundColor: "rgb(84, 83, 83)",
    borderRadius: "5px",
    marginLeft: "10px",
    fontSize: "14px",
    outline: "none",
    padding: "6px",
  };

  const btnProject = {
    backgroundColor: "black",
    borderRadius: "5px",
    color: "white",
    fontWeight: "500",
    fontSize: "14px",
    textTransform: "uppercase",
    padding: "4px 10px",
  };

  const [dataFromForm, setDataFromForm] = useState({
    projectName: "",
    date: "",
    dueDate: "",
    priority: "",
    niche: "",
    point: "",
  });

  const [projectData, setProjectData] = useState([]);
  const [editSection, setEditSection] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getNewName = (e) => {
    setDataFromForm({ ...dataFromForm, projectName: e.target.value });
  };

  const onDateChange = (e) => {
    setDataFromForm({ ...dataFromForm, date: e.target.value });
  };

  const onDueDateChange = (e) => {
    setDataFromForm({ ...dataFromForm, dueDate: e.target.value });
  };

  const getPriority = (e) => {
    setDataFromForm({ ...dataFromForm, priority: e.target.value });
  };

  const getNiche = (e) => {
    setDataFromForm({ ...dataFromForm, niche: e.target.value });
  };

  const getPoint = (e) => {
    setDataFromForm({ ...dataFromForm, point: e.target.value });
  };

  useEffect(() => {
    const saveDataToStorage =
      JSON.parse(localStorage.getItem("projectData")) || [];
    setProjectData(saveDataToStorage);
  }, []);

  const addRows = (data) => {
    const totalProjectAdded = projectData.length;
    data.id = totalProjectAdded + 1;
    const projectAdded = [...projectData];
    projectAdded.push(data);
    setProjectData(projectAdded);
  };

  const handleProjectSubmission = (e) => {
    e.preventDefault();

    if (editSection !== null) {
      const newProjectData = [...projectData];
      newProjectData[editSection] = dataFromForm;
      setProjectData(newProjectData);
      setEditSection(null);
    } else {
      setDataFromForm([...projectData, dataFromForm]);
    }

    localStorage.setItem(
      "projectData",
      JSON.stringify([...projectData, dataFromForm])
    );

    setDataFromForm({
      projectName: "",
      date: "",
      dueDate: "",
      priority: "",
      niche: "",
      point: "",
    });
  };

  // const tableRows = ;

  const editHandler = (index) => {
    setDataFromForm(projectData[index]);
    setEditSection(index);
    setShowModal(true);
  };

  const deleteHandler = (index) => {
    const updateData = projectData.filter((_, i) => i !== index);
    setProjectData(updateData);
    localStorage.setItem("projectData", JSON.stringify(updateData));
  };

  return (
    <div style={contStyle}>
      <VStack
        backgroundColor="gray"
        border="2px dashed red"
        w="350px"
        p={3}
        alignItems="center"
        fontWeight="500"
      >
        <Heading as="h1" fontSize="23px" textTransform="uppercase" padding="5">
          Project Tracker
        </Heading>
        <Box>
          <form onSubmit={handleProjectSubmission}>
            <VStack alignItems="start" spacing={4}>
              <label className="projectLabel">
                Project Name:
                <input
                  type="text"
                  placeholder="project"
                  className="projectInput"
                  onChange={getNewName}
                  value={dataFromForm.projectName}
                />
              </label>

              <label>
                Date Added:
                <input
                  type="date"
                  style={dateStyle}
                  value={dataFromForm.date}
                  onChange={onDateChange}
                  className="dateInput"
                />
              </label>
              <label>
                Due Date:
                <input
                  type="date"
                  style={dateStyle}
                  value={dataFromForm.dueDate}
                  onChange={onDueDateChange}
                  className="dateInput"
                />
              </label>
              <label>
                Priority:
                <input
                  type="text"
                  placeholder="priority"
                  className="projectInput"
                  value={dataFromForm.priority}
                  onChange={getPriority}
                />
              </label>
              <label>
                Niche:
                <input
                  type="text"
                  placeholder="niche"
                  className="projectInput"
                  value={dataFromForm.niche}
                  onChange={getNiche}
                />
              </label>
              <label>
                Story Point:
                <input
                  type="text"
                  placeholder="point"
                  className="projectInput"
                  value={dataFromForm.point}
                  onChange={getPoint}
                />
              </label>
              <div className="divButton">
                <button type="submit" style={btnProject}>
                  {editSection !== null ? "Update" : "Submit"}
                </button>
              </div>
            </VStack>
          </form>
          <div className="tableFolder">
            <table className="tableContent">
              <thead>
                <tr className="rowContent">
                  <th>S/N</th>
                  <th>Project Name</th>
                  <th>Date Added</th>
                  <th>Due Date</th>
                  <th>Priority</th>
                  <th>Niche</th>
                  <th>Story</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((val, index) => (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.projectName}</td>
                    <td>{val.date}</td>
                    <td>{val.dueDate}</td>
                    <td>{val.priority}</td>
                    <td>{val.niche}</td>
                    <td>{val.point}</td>
                    <td>
                      <button onClick={() => editHandler(index)}>Edit</button>
                      <button onClick={() => deleteHandler(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {addRows}
              </tbody>
            </table>

            {showModal && (
              <div className="show--modal">
                <form onSubmit={handleProjectSubmission}>
                  <VStack alignItems="start" spacing={4}>
                    <label className="projectLabel1">
                      Project Name:
                      <input
                        type="text"
                        placeholder="project"
                        className="projectInput"
                        onChange={getNewName}
                        value={dataFromForm.projectName}
                      />
                    </label>

                    <label>
                      Date Added:
                      <input
                        type="date"
                        value={dataFromForm.date}
                        onChange={onDateChange}
                        className="dateInput"
                        style={dateStyle}
                      />
                    </label>
                    <label>
                      Due Date:
                      <input
                        type="date"
                        value={dataFromForm.dueDate}
                        onChange={onDueDateChange}
                        className="dateInput"
                        style={dateStyle}
                      />
                    </label>
                    <label>
                      Priority:
                      <input
                        type="text"
                        placeholder="priority"
                        className="projectInput"
                        value={dataFromForm.priority}
                        onChange={getPriority}
                      />
                    </label>
                    <label>
                      Niche:
                      <input
                        type="text"
                        placeholder="niche"
                        value={dataFromForm.niche}
                        onChange={getNiche}
                        className="projectInput"
                      />
                    </label>
                    <label>
                      Story Point:
                      <input
                        type="text"
                        placeholder="point"
                        value={dataFromForm.point}
                        onChange={getPoint}
                        className="projectInput"
                      />
                    </label>
                    <div className="divButton">
                      <HStack>
                        <button style={btnProject}>Update</button>
                        <button
                          type="button"
                          style={btnProject}
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </HStack>
                    </div>
                  </VStack>
                </form>
              </div>
            )}
          </div>
        </Box>
      </VStack>
    </div>
  );
};

export default ProjectSection;
