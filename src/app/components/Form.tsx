"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Form() {
    const [checked , setChecked] = useState<boolean>(false);
  return <div className="center p-4 rounded space-y-4">
    <form className="flex gap-4">
        <div className="flex gap-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <p className="text-sm">I accept organization terms and conditions</p>
        </div>
    </form>
  </div>;
}
