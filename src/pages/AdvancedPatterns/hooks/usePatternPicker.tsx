import React from "react";
import { HOC, IOC, RenderProps } from "../components/patterns";
import _ from "lodash";

const patterns: { [name: string]: React.ReactNode } = {
    hoc: <HOC />,
    ioc: <IOC />,
    render_props: <RenderProps />,
  };

export const usePatternPicker = () => {
  return (name: string) => {
    if (_.isEmpty(name)) return <></>;
    const targetCom = patterns[name];
    if (!targetCom) return <></>;
    return targetCom;
  };
};