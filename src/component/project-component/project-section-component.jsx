import { useState } from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";
import "./project.styles.css";
import AddNewProject from "../add-project/add-project.component";
const ProjectSection = () => {
  const [newMessage, setNewMessage] = useState();

  const projectRows = newMessage.map((val) => {
    return (
      <tr>
        <td>{val.id}</td>
        <td>{val.newName}</td>
        <td>{val.date}</td>
        <td>{val.dueDate}</td>
        <td>{val.newPriority}</td>
        <td>{val.newNiche}</td>
        <td>{val.newPoint}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  const addProject = (data) => {
    console.log(data);
    const receivedData = newMessage.length;
    data.id = receivedData + 1;
    const updateProject = [...newMessage];
    updateProject.push(data);
    console.log(updateProject);
    setNewMessage(updateProject);
  };

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
          <AddNewProject func={addProject} />
          <p>{newMessage}</p>
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
              <tbody>{projectRows}</tbody>
            </table>
          </div>
        </Box>
      </VStack>
    </div>
  );
};

export default ProjectSection;
