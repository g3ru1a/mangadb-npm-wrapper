import { LocalStorage } from "node-localstorage";
export function getLocalStorage() {
    if (typeof localStorage === "undefined" || localStorage === null) {
        return new LocalStorage("./scratch");
    }
    else
        return localStorage;
}
//# sourceMappingURL=localstorage.js.map