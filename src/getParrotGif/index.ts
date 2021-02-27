import { getParrot } from "../getParrot";

export const getParrotGif = async (
  name?: string,
  path?: string,
  url?: string
): Promise<string | null> => {
  const parrot = await getParrot(name, url);

  if (parrot) {
    const gif = parrot?.hd ?? parrot.gif;

    return `${path || ""}${gif}`;
  }

  return null;
};
