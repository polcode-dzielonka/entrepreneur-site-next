import { Fragment } from "react";
import Link from "next/link";
const Home = () => {
  return (
    <Fragment>
      <h1>Checking Next integration</h1>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <h2 style={{ color: "red" }}>Second Title</h2>
    </Fragment>
  );
};

export default Home;
