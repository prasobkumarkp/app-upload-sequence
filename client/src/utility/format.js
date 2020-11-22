import {
  FILE_HAS_BEEN_SAVED,
  NAME,
  SIZE,
  VERSION,
} from "../constants/Messages";
import { formatBytes } from "./file";

export const formatFileDetails = (file) => (
  <div>
    <div>{FILE_HAS_BEEN_SAVED}</div>
    <hr className="m-1" />
    <div>
      <small>
        {NAME} :{file.name}
      </small>
    </div>
    <div>
      <small>
        {VERSION} :{file.version}
      </small>
    </div>
    <div>
      <small>
        {SIZE}: {formatBytes(file.size)}{" "}
      </small>
    </div>
  </div>
);
