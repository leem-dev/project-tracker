import { useState } from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";


export const dataFromFormInitialState = {
  projectName: "",
  date: "",
  dueDate: "",
  priority: "",
  niche: "",
  point: "",
};

export const ProjectForm = (onSubmit) =>  {

  const [dataFromForm, setDataFromForm] = useState(dataFromFormInitialState);  

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

  const handleProjectSubmission = (e) => {
    e.preventDefault()
    onSubmit(dataFromForm)
    setDataFromForm(dataFromFormInitialState);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleProjectSubmission(dataFromForm);
  //   setDataFromForm(dataFromFormInitialState);
  // };

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


  return (
    <div>
        <VStack
          backgroundColor="gray"
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
                      onChange={(e) => getNewName(e)}
                      value={dataFromForm.projectName}
                    />
                  </label>
    
                  <label>
                    Date Added:
                    <input
                      type="date"
                      style={dateStyle}
                      value={dataFromForm.date}
                      onChange={(e) => onDateChange(e)}
                      className="dateInput"
                    />
                  </label>
                  <label>
                    Due Date:
                    <input
                      type="date"
                      style={dateStyle}
                      value={dataFromForm.dueDate}
                      onChange={(e) => onDueDateChange(e)}
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
                      onChange={(e) => getPriority(e)}
                    />
                  </label>
                  <label>
                    Niche:
                    <input
                      type="text"
                      placeholder="niche"
                      className="projectInput"
                      value={dataFromForm.niche}
                      onChange={(e) => getNiche(e)}
                    />
                  </label>
                  <label>
                    Story Point:
                    <input
                      type="text"
                      placeholder="point"
                      className="projectInput"
                      value={dataFromForm.point}
                      onChange={(e) => getPoint(e)}
                    />
                  </label>
                  <div className="divButton">
                    <button type="submit" style={btnProject}>
                      Submit
                    </button>
                  </div>
                </VStack>
              </form>
            </Box>
        </VStack>
    </div>
  )
}

export default ProjectForm;