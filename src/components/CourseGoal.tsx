import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  children: ReactNode;
  onDelete: () => void;
};

export default function CourseGoal({
  title,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
}
