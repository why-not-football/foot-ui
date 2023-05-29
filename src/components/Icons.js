import * as React from "react";
const Football = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2rem"
    height="2rem"
    viewBox="0 -0.33 20.754 20.754"
    {...props}
    className="hover:animate-spin "
  >
    <path
      fill="#2ca9bc"
      d="m12.707 1.397-2.33 1.69-2.33-1.69a8.91 8.91 0 0 1 4.66 0Zm-9.87 3.79a9 9 0 0 0-1.46 4.43l2.34-1.69Zm3.54 10.79-.07-.23h-2.93a8.92 8.92 0 0 0 3.78 2.74Zm4-9.89-3.5 2.67 1.34 4.33h4.32l1.34-4.33Zm4.11 9.66-.07.23-.82 2.51a8.92 8.92 0 0 0 3.78-2.74Zm3.43-10.55-.88 2.73 2.34 1.69a8.93 8.93 0 0 0-1.46-4.42Z"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.047 1.397 2.33 1.69 2.33-1.69"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.397 9.617 2.32-1.69-.88-2.74M16.377 16.087l-1.92-.04-.73 2.38M4.377 16.087l1.92-.04.73 2.38M17.927 5.187l-.89 2.74 2.32 1.69"
      data-name="primary"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.377 6.087v-3m-3.59 5.65-3.07-.81m4.5 5.16-1.95 3m6.27-3 1.95 3m-.61-7.33 3.16-.83m-6.66-1.84-3.5 2.67 1.34 4.33h4.32l1.34-4.33Zm0-5a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z"
      data-name="primary"
    />
  </svg>
);
export default Football;
