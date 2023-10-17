import { usePatternPicker } from "../hooks";
import { PatternContainer } from "./PatternContainer";

export const PatternPicker = () => {
  const patternPicker = usePatternPicker();
  return <PatternContainer render={(p) => patternPicker(p)}></PatternContainer>;
};
