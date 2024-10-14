"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Form() {
    const [checked , setChecked] = useState<boolean>(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({
            acceptTerms: checked
        })
    }
  return <div className="center p-4 rounded space-y-4 border">
    <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <p className="text-sm">I accept organization terms and conditions</p>
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-green-300 text-white">submit</button>
    </form>
  </div>;
}
