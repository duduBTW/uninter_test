import type { NextPage } from "next";
import SubjectsTemplate from "../../components/templates/Subjects";

const Subjects: NextPage = () => {
  return (
    <SubjectsTemplate
      courses={[
        {
          title: "Title 1",
          id: 1,
          porcentage: 0.1,
        },
        {
          title: "Title 2",
          id: 2,
          porcentage: 0.5,
        },
        {
          title: "Title 3",
          id: 3,
          porcentage: 1,
        },
      ]}
    />
  );
};

export default Subjects;
