export type LinkInfo = {
  label: string;
  path: string;
  component?: string;
};

export type SideBarLinkInfo = LinkInfo & {
  component?: string;
};