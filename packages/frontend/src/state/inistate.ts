import { store } from ".";
import { defaultCode, defaultCodeSalah } from "./initstate";

function initState() {
  store.send({
    type: "addFile",
    basePath: "explorer.items.src",
    name: "main.sol",
    content: defaultCodeSalah,
  });

  store.send({ type: "setCurrentPath", path: "explorer.items.src.items['main.sol']" });
  store.send({ type: "setCurrentPath", path: "home" });
}

export default initState;
