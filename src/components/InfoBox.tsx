import { type ReactNode } from "react";

type InfoBoxProps = WarningBoxProps | HintBoxProps;

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;

  if (mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning!</h2>
        <p>{children}</p>
      </aside>
    );
  }
}
