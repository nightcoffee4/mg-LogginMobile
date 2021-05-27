import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function Gonder() {
    const [value, setValue] = useState("");
    const handleChange = e => {
        console.log(`Typed => ${e.target.value}`)
        setValue(e.target.value);
    }
    return (
        <div>
            <h1>Hello from Antalya</h1>
            <TextField value={value} variant="outlined" onChange={handleChange} />
        </div>
    );
}