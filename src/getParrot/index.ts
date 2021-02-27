import { getParrotsJSON } from "../getParrotsJSON";
import { ParrotRecord } from "../types";

export const getParrot = async (
  name?: string,
  url?: string
): Promise<ParrotRecord | null> => {
  if (name) {
    const nameLc = name.toLowerCase();

    const parrots = await getParrotsJSON(url);
    const parrot = parrots.find((p) => p.name.toLowerCase() === nameLc);

    return parrot || null;
  }

  return null;
};
