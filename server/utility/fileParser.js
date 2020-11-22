import appParser from "adbkit-apkreader";

export const parseApk = (file) => {
  return appParser
    .open(file.path)
    .then((reader) => reader.readManifest())
    .then((result) => {
      return { manifest: result, version: result.versionName };
    });
};
