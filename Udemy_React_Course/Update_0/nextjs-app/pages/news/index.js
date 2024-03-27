import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href="news/something-else">I like Next js</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
