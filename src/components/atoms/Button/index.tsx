import React from "react";
import styles from "./index.module.scss";

export type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export interface ButtonProps {
  element: "button" | "a";
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { element, type, children, onClick, disabled, className } = props;

  // const styles: any = { btn: "btn", btnPrimary: "btn-primary" };

  const classes = [styles.btn];
  if (type) {
    console.log(`btn${capitalizeFirstLetter(type)}`);
    console.log(styles[`btn${capitalizeFirstLetter(type)}`]);
    classes.push(styles[`btn${capitalizeFirstLetter(type)}`]);
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
    >
      {children}
    </Component>
  );
};

const capitalizeFirstLetter = (a: string) => {
  return a.charAt(0).toUpperCase() + a.slice(1);
};
