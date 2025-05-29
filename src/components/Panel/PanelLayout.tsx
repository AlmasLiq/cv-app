import { useState } from "react";
import Panel from "./Panel";

export default function Layout() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <div className="flex">
      <Panel isOpen={isPanelOpen} onToggle={() => setIsPanelOpen(!isPanelOpen)} />
    </div>
  );
}
