import { readFileSync } from "fs";

export const getJson = (filePath: string) => {
  let json;

  try {
    json = JSON.parse(readFileSync(filePath, { encoding: "utf8" }));
  } catch (error) {
    console.error(error.message);
  }

  return json;
};
