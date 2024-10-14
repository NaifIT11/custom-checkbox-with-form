"use client"

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
    ></button>
  );
}
