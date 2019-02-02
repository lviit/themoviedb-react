import * as React from "react";
import * as Styles from "./Page.pcss";

interface IpageProps {
  children: React.ReactNode;
}

const Page: React.SFC<IpageProps> = ({ children }) => (
  <div className={Styles.page}>{children}</div>
);
export default Page;
