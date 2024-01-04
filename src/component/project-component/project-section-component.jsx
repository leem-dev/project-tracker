import { useState, useEffect } from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";
import "./project.styles.css";

const ProjectSection = () => {
  const [newName, setNewName] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [newNiche, setNewNiche] = useState("");
  const [newPoint, setNewPoint] = useState("");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

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

  // const clickHandler = (event) => {
  //   event.preventDefault();
  //   setCount(count + 1);
  // };

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
    setCount(count + 1);
    console.log(count);

    console.log("I am here!!");
    setData(
      data.push({
        id: count,
        name: newName,
        olddate: date,
        duedate: dueDate,
        priority: newPriority,
        niche: newNiche,
        point: newPoint,
      })
    );

    console.log(data);
    resetProject();
  };

  useEffect(() => {
    const receivedUserData = JSON.stringify(data);
    localStorage.setItem("data", receivedUserData);
  }, [data]);

  useEffect(() => {
    const receivedUserData = localStorage.getItem("data");
    const savedUserData = JSON.parse(receivedUserData);

    if (savedUserData) {
      setData(savedUserData);
    }
  }, []);
  // const [newMessage, setNewMessage] = useState();

  // const projectRows = newMessage.map((val) => {
  //   return (
  //     <tr>
  //       <td>{val.id}</td>
  //       <td>{val.newName}</td>
  //       <td>{val.date}</td>
  //       <td>{val.dueDate}</td>
  //       <td>{val.newPriority}</td>
  //       <td>{val.newNiche}</td>
  //       <td>{val.newPoint}</td>
  //       <td>
  //         <button>Edit</button>
  //         <button>Delete</button>
  //       </td>
  //     </tr>
  //   );
  // });

  const contStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
              <tbody></tbody>
            </table>
          </div>
        </Box>
      </VStack>
    </div>
  );
};

export default ProjectSection;
