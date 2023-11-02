import Link from "next/link";
import React from "react";

import SiteNav, { ContentGroup } from "react-site-nav";

const Navbar = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/solutions">Solutions</Link>
      {/* 2. Add SiteNav with ContentGroup as children */}
      <SiteNav align="right">
        <ContentGroup title="Solutions" height="200">
          Digital Transformation
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>
        <ContentGroup title="Services" height="200">
          Free text followed by some links.
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>

        <ContentGroup title="Industry Focus" height="200">
          Free text followed by some links.
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>

        <ContentGroup title="About us" height="200">
          Free text followed by some links.
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>

        <ContentGroup title="Careers" height="200">
          Free text followed by some links.
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>

        <ContentGroup title="Insights" height="200">
          Free text followed by some links.
          <br />
          <a href="#">Email</a>
          <br />
          <a href="#">Github</a>
        </ContentGroup>

        <ContentGroup className="linkTitle" title="Contact us" rootUrl="#" />
      </SiteNav>
    </>
  );
};

export default Navbar;
