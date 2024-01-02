import { useState } from "react";

import { VStack } from "@chakra-ui/react";

const AddNewProject = (props) => {
  const [newName, setNewName] = useState("");
  const [date, setDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [newPriority, setNewPriority] = useState("");
  const [newNiche, setNewNiche] = useState("");
  const [newPoint, setNewPoint] = useState("");

  const getNewName = (e) => {
    setNewName(e.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const onDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const getPriority = (event) => {
    setNewPriority(event.target.value);
  };

  const getNiche = (event) => {
    setNewNiche(event.target.value);
  };

  const getPoint = (event) => {
    setNewPoint(event.target.value);
  };

  const resetProject = () => {
    setNewName("");
    setDate("");
    setDueDate("");
    setNewPriority("");
    setNewNiche("");
    setNewPoint("");
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

  const handleProjectSubmission = (event) => {
    event.preventDefault();
    const getValue = {
      newName,
      date,
      dueDate,
      newPriority,
      newNiche,
      newPoint,
    };
    const jsonFile = localStorage.setItem("values", JSON.stringify(getValue));

    props.func(jsonFile);

    resetProject();
  };

  return (
    <form onSubmit={handleProjectSubmission}>
      <VStack alignItems="start" spacing={4}>
        <label className="projectLabel">
          Project Name:
          <input
            type="text"
            placeholder="project"
            className="projectInput"
            onChange={getNewName}
            value={newName}
          />
        </label>

        <label>
          Date Added:
          <input
            type="date"
            style={dateStyle}
            value={date}
            onChange={onDateChange}
            className="dateInput"
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            style={dateStyle}
            value={dueDate}
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
            value={newPriority}
            onChange={getPriority}
          />
        </label>
        <label>
          Niche:
          <input
            type="text"
            placeholder="niche"
            className="projectInput"
            value={newNiche}
            onChange={getNiche}
          />
        </label>
        <label>
          Story Point:
          <input
            type="text"
            placeholder="point"
            className="projectInput"
            value={newPoint}
            onChange={getPoint}
          />
        </label>
        <div className="divButton">
          <button type="submit" style={btnProject}>
            Add Project
          </button>
        </div>
      </VStack>
    </form>
  );
};

export default AddNewProject;
