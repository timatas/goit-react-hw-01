import css from "./TaskTitle.module.css";

export const TaskTitle = ({ children }) => {
  return <h1 className={css.h1}>{children}</h1>;
};
