import { Fragment } from "react";
import Link from "next/link";
const Home = () => {
  return (
    <Fragment>
      <h1>Hello From Next.js Try again</h1>
      <Link href="/about">ABOUT</Link>
      <h2 style={{ color: "red" }}>Second Title</h2>
    </Fragment>
  );
};

export default Home;
