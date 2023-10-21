import { LinkInfo, SideBarLinkInfo } from "types";

export const linksDetails: Array<LinkInfo> = [
    { label: "Home", path: "/" },
    { label: "Advanced Patterns", path: "/react-advanced-patterns" }
  ];

  export const sideBarLinksDetails: Array<SideBarLinkInfo> = [
    { label: "Render props", path: "render_props", component:"RenderProps" },
    { label: "HOC", path: "hoc", component:"HOC" },
    { label: "Proxy", path: "proxy", component:"Proxy" },
  ];