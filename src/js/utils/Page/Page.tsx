import * as React from "react";
import * as Styles from "./Page.pcss";
const Page = ({ children }) => <div className={Styles.page}>{children}</div>;
export default Page;
