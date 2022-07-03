import React from "react";

export type HeadingTypes = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  type: HeadingTypes;
}

export const Heading = (props: HeadingProps) => {
  const { children, className, type } = props;

  const classes = [];
  if (className) {
    classes.push(className);
  }

  const Component = typeToElement(type);

  return <Component className={classes.join(" ")}>{children}</Component>;
};

const typeToElement = (type: HeadingTypes): HeadingElements => {
  return `h${type}`;
};
