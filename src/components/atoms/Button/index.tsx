import React from "react";
import styles from "./index.module.scss";

export enum ButtonType {
  primary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
}

export interface ButtonProps {
  element: "button" | "a";
  type?: ButtonType;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { element, type, href, children, onClick, disabled, className } = props;

  const classes = [styles.btn];
  const typeClass = getClassForType(type);
  if (typeClass) {
    classes.push(typeClass);
  }

  if (className) {
    classes.push(className);
  }

  const Component = element;

  return (
    <Component
      className={classes.join(" ")}
      onClick={onClick}
      disabled={disabled}
      href={href}
    >
      {children}
    </Component>
  );
};

const capitalizeFirstLetter = (a: string) => {
  return a.charAt(0).toUpperCase() + a.slice(1);
};

const getClassForType = (type: ButtonType | undefined) => {
  switch (type) {
    case ButtonType.primary:
      return styles["btn-primary"];
    case ButtonType.success:
      return styles["btn-success"];
    case ButtonType.danger:
      return styles["btn-danger"];
    case ButtonType.warning:
      return styles["btn-warning"];
    case ButtonType.info:
      return styles["btn-info"];
    case ButtonType.light:
      return styles["btn-light"];
    case ButtonType.dark:
      return styles["btn-dark"];
    default:
      return null;
  }
};
