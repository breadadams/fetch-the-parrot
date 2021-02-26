const DEFAULT_URL =
  "//raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots.yaml";

export const getParrotsYAML = async (
  url: string = DEFAULT_URL
): Promise<string> => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return response.text();
    }

    throw new Error(
      `Failed to retrieve parrots. Status code ${response.status} - ${response.statusText}`
    );
  } catch (error) {
    console.log(error);
    return "";
  }
};
