import { TerminalInput } from "@/components/TerminalInput";

export default function TerminalPage() {
  return (
    <div className="font-mono max-w-4xl mx-auto flex flex-col gap-6 pb-20">
      <div className="mt-8">
        <TerminalInput />
      </div>
    </div>
  );
}
