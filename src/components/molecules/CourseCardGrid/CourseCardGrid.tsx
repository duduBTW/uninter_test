import React, { ReactElement } from "react";
import CourseCard from "../../elements/CourseCard";
import { CourseModel } from "../../types/course";
import styles from "./CourseCardGrid.module.scss";

interface Props {
  courses: CourseModel[];
}

export default function CourseCardGrid({ courses }: Props): ReactElement {
  const { courses_wrapper } = styles;

  return (
    <div className={courses_wrapper}>
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
