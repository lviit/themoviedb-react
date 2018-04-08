import React from "react";
import Styles from "./Page.pcss";

const Page = ({ children }) => <div className={Styles.page}>{children}</div>;

export default Page;
