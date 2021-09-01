import { ReactElement } from "react";

// components
import Section from "../../../components/elements/Section";
import CourseCardGrid from "../../molecules/CourseCardGrid";
import Layout from "../../organisms/Layout";
import { CourseModel } from "../../types/course";

// styles
import styles from "./Subjects.module.scss";

interface Props {
  courses: CourseModel[];
}

export default function SubjectsTemplate({ courses }: Props): ReactElement {
  const { subject_wrapper, title } = styles;

  return (
    <Layout title="Nome do aluno">
      <div className={subject_wrapper}>
        <Section>
          <>
            <h1 className={title}>Minhas disciplinas</h1>
            <CourseCardGrid courses={courses} />
          </>
        </Section>
      </div>
    </Layout>
  );
}
