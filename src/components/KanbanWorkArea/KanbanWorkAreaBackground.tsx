import React, { ReactNode } from "react";
import useThemeProvider from "../../hooks/useThemeProvider";
import classNames from "classnames";

type Props = {
  children?: ReactNode;
  className?: string;
};

const KanbanWorkAreaBackground: React.FC<Props> = ({ children, className }) => {
  const { darkTheme } = useThemeProvider();
  return (
    <div
      className={classNames(
        "w-full h-full kanban-work-area-background",
        {
          "kanban-work-area-background-dark": darkTheme,
          "kanban-work-area-background-light": !darkTheme,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default KanbanWorkAreaBackground;
