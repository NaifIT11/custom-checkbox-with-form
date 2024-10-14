"use client"

import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export default function Checkbox({ checked, onCheckedChange }: CheckboxProps) {
  return (
    <button
      aria-label="Checkbox Control"
      onClick={() => onCheckedChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      data-checked={checked}
      className="w-5 h-5 rounded border data-[checked=true]:bg-green-300"
    >
        {checked ? <Check className="w-4 h-4 text-white" /> : ""}
    </button>
  );
}
