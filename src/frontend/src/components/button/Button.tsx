import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
interface Child {
  children: string
}

export default function Content(props: Child): React.JSX.Element {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  function handler(): void {
    (buttonRef.current)?.focus();
  }

  return (/* ref="#" */
    <button onClick={handler} className="btn btn-primary">{props.children}</button>
  );
}
