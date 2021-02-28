import { load } from "js-yaml";

import { getParrotsYAML } from "../getParrotsYAML";
import { ParrotRecords } from "../types";

export const getParrotsJSON = async (url?: string): Promise<ParrotRecords> => {
  const text = await getParrotsYAML(url);

  if (!text) {
    return [];
  }

  return load(text, {}) as ParrotRecords;
};
