import type { ResultProps } from "./types";
import { getResult, isNull } from "./helper";

export function Result(props: ResultProps) {
  const { success, successContent, failContent } = props;
  const resultState = getResult(success);
  const successView = isNull(successContent)
    ? null
    : successContent || "Success!";
  const failView = isNull(failContent) ? null : failContent || "Fail!";
  return <div>{resultState ? successView : failView}</div>;
}
