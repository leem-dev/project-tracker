import {useState, useEffect} from "react";
import ProjectSection from "./project-component/project-section-table-component";
import ProjectForm, { dataFromFormInitialState } from "./project-component/project-section-form-component";


const Main = () =>  {
    const contStyle = {
        
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      };
    
      const [projectData, setProjectData] = useState([]);
       
    
      useEffect(() => {
        const saveDataToStorage =
          JSON.parse(localStorage.getItem("projectData")) || [];
        setProjectData(saveDataToStorage);
      }, []);

      const { dataFromForm, setDataFromForm, getNewName, onDateChange, onDueDateChange, getPriority, getNiche, getPoint, handleProjectSubmission: submitHandler } = ProjectForm();
    
      const handleProjectSubmission = (dataFromForm) => {
       
        setProjectData((prevData) =>  {
          const newProjectData = [...prevData, dataFromForm];

          localStorage.setItem(
            "projectData",
            JSON.stringify(newProjectData)
          );
          return newProjectData
        })
        
      };
    
    
      const editHandler = (currentProject, updatedProject) => {
        // const index = projectData.findIndex((project) => project === currentProject ? updatedProject : project)

        // const newProjectData = [...projectData]
        // newProjectData[index] = updatedProject
        // setProjectData(newProjectData);

        const updateData = projectData.map((project) => project === currentProject ? updatedProject : project)
        setProjectData(updateData)
        
        localStorage.setItem("projectData", JSON.stringify(updateData))

      };
    
      const deleteHandler = (projectToDelete) => {
        const updateData = projectData.filter((project) => project !== projectToDelete);
        setProjectData(updateData);
        localStorage.setItem("projectData", JSON.stringify(updateData));
      };
    
      return (
        <div style={contStyle} className="project">
          <ProjectForm 
            dataFromForm={dataFromForm}
            setDataFromForm={setDataFromForm}
            getNewName={getNewName}
            onDateChange={onDateChange}
            onDueDateChange={onDueDateChange}
            getPriority={getPriority}
            getNiche={getNiche}
            getPoint={getPoint}
            onSubmit={handleProjectSubmission}/>
          <ProjectSection projectData={projectData} onEdit={editHandler} onDelete={deleteHandler} dataFromForm={dataFromForm} setDataFromForm={setDataFromForm}/>
        </div>
  );
}

export default Main