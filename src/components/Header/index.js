import React from "react";
import { Navigation } from "./styles";
import { Link } from "./styles";
import { LinkIcon } from "./styles";
import netflix from "../../img/netflix.svg";
import magnifyingGlass from "../../img/magnifyingGlass.svg";
import bell from "../../img/bell.svg";

export default function Header() {
  return (
    <Navigation>
      <ul>
        <img src={netflix} alt="netflix" />
        <Link selected={true}  width="35">Start</Link>
        <Link selected={false} width="43">Shows</Link>
        <Link selected={false} width="47">Movies</Link>
        <Link selected={false} width="30">News</Link>
        <Link selected={false} width="46">My List</Link>
      </ul>
      <ul>
        <LinkIcon><img src={magnifyingGlass} alt="magnifying-glass"/></LinkIcon>
        <LinkIcon><img src={bell} alt="magnifying-glass"/></LinkIcon>
      </ul>
    </Navigation>
  );
}