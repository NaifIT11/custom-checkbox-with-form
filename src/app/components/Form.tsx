"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Form() {
    const [checked , setChecked] = useState<boolean>(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return <div className="center p-4 rounded space-y-4">
    <form className="flex gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <p className="text-sm">I accept organization terms and conditions</p>
        </div>
    </form>
  </div>;
}
