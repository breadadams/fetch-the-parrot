import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";

import {
  getParrot,
  getParrotGif,
  getParrotsJSON,
  getParrotsYAML,
} from "../src";

const printCodeResult = ({
  format = "json",
  id,
  language = Prism.languages.json,
  response,
}) => {
  const el = document.getElementById(id);

  const formattedResponse = Prism.highlight(
    typeof response === "object" ? JSON.stringify(response, null, 2) : response,
    language,
    format
  );

  el.innerHTML = formattedResponse;
};

class FetchTheParrotDemo {
  async runGetParrot() {
    const response = await getParrot("Party Parrot");

    printCodeResult({ id: "getParrotResult", response });
  }

  async runGetParrotGif() {
    const response = await getParrotGif("Party Parrot");

    printCodeResult({ id: "getParrotGifResult", response });
  }

  async runGetParrotsJSON() {
    const response = await getParrotsJSON();

    printCodeResult({ id: "getParrotsJSONResult", response });
  }

  async runGetParrotsYAML() {
    const response = await getParrotsYAML();

    printCodeResult({
      id: "getParrotsYAMLResult",
      response,
      format: "yaml",
      language: Prism.languages.yaml,
    });
  }

  init() {
    this.runGetParrot();
    this.runGetParrotGif();
    this.runGetParrotsJSON();
    this.runGetParrotsYAML();
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const app = new FetchTheParrotDemo();

    app.init();
    Prism.highlightAll();
  },
  {}
);
