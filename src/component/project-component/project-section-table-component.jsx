import { useState } from "react";
import { VStack, HStack } from "@chakra-ui/react";
import {ProjectForm, dataFromFormInitialState} from "./project-section-form-component";


// import {getNewName, onDateChange, onDueDateChange, getPriority, getNiche, getPoint, handleProjectSubmission} from "./project-section-form-component"

import "./project.styles.css";


const ProjectSection = ({projectData, onEdit, onDelete, dataFromForm, setDataFromForm}) => {

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

  const { getNewName, onDateChange, onDueDateChange, getPriority, getNiche, getPoint } = ProjectForm();

  const [onShowModal, setOnShowModal] = useState(false)
  // const [selectProject, setSelectProject] = useState(null)

  // const handleEdit = (project) => {
  //   setSelectProject(project);
  //   setOnShowModal(true);
  // }

  // const updateHandler = (updatedProject) => {
  //   onEdit(selectProject, updatedProject)
  //   setOnShowModal(false);
  // }

  // const closeHandler = () =>  {
  //   setOnShowModal(false)
  //   setSelectProject(null)
  // }

  const handleEdit = (project) => {
    onEdit(project);
    setOnShowModal(true);
  };

  const updateHandler = () => {
    onEdit(null);
    setOnShowModal(false);
  };

  const closeHandler = () => {
    onEdit(null);
    setOnShowModal(false);
  };

  return (
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
                {projectData.map((project, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{project.projectName}</td>
                    <td>{project.date}</td>
                    <td>{project.dueDate}</td>
                    <td>{project.priority}</td>
                    <td>{project.niche}</td>
                    <td>{project.point}</td>
                    <td>
                      <button onClick={() => handleEdit(project)}>Edit</button>
                      <button onClick={() => onDelete(project)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {onShowModal && (
              <div className="show--modal">
                <form onSubmit={updateHandler}>
                  <VStack alignItems="start" spacing={4}>
                    <label className="projectLabel1">
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
                        value={dataFromForm.date}
                        onChange={(e) => onDateChange(e)}
                        className="dateInput"
                        style={dateStyle}
                      />
                    </label>
                    <label>
                      Due Date:
                      <input
                        type="date"
                        value={dataFromForm.dueDate}
                        onChange={(e) => onDueDateChange(e)}
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
                        onChange={(e) => getPriority(e)}
                      />
                    </label>
                    <label>
                      Niche:
                      <input
                        type="text"
                        placeholder="niche"
                        value={dataFromForm.niche}
                        onChange={(e) => getNiche(e)}
                        className="projectInput"
                      />
                    </label>
                    <label>
                      Story Point:
                      <input
                        type="text"
                        placeholder="point"
                        value={dataFromForm.point}
                        onChange={(e) => getPoint(e)}
                        className="projectInput"
                      />
                    </label>
                    <div className="divButton">
                      <HStack>
                        <button 
                          style={btnProject} 
                          type="submit"
                          // onClick={() => updateHandler(dataFromForm)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          style={btnProject}
                          onClick={closeHandler}
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
  )
};

export default ProjectSection;
