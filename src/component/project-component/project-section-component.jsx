import { Box, VStack, Heading } from "@chakra-ui/react";
import DateInput from "../date-picker/date-picker-component";

import "./project.styles.css";

const ProjectSection = () => {
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
        w="350px"
        // p={3}
        alignItems="center"
        border="2px dashed red"
        fontWeight="500"
      >
        <Heading
          as="h1"
          fontSize="20px"
          textTransform="uppercase"
          paddingBottom="2"
        >
          Project Tracker
        </Heading>
        <Box>
          <form>
            <VStack>
              <label className="projectLabel">
                Project Name:
                <input
                  type="text"
                  placeholder="project"
                  className="projectInput"
                />
              </label>
              <DateInput />
            </VStack>
          </form>
        </Box>
      </VStack>
    </div>
  );
};

export default ProjectSection;
