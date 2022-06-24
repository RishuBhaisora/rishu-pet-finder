import { State } from "./store";
import { values } from "lodash";

export const petTypeSelector = (s: State) => values(s);
