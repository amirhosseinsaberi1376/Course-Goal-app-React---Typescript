import { type ReactNode } from "react";

import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet, start adding some!
      </InfoBox>
    );
  }

  let warning: ReactNode;

  if (goals.length >= 4) {
    warning = (
      <InfoBox mode="warning" severity="high">
        You're setting a lot of goals, don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warning}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={() => onDelete(goal.id)}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
