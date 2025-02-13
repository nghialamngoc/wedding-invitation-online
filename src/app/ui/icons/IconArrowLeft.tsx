import { FC, SVGProps } from "react";

export const IconArrowLeft: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5518 14.7795H9.10509L17.4944 6.39021L17.0238 5.91887C16.2424 5.13821 14.9758 5.13821 14.1951 5.91887L3.99976 16.1135L14.1951 26.3089C14.9758 27.0895 16.2424 27.0895 17.0238 26.3089L17.4944 25.8375L9.10309 17.4462H28.5518V14.7795Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconArrowLeft;
