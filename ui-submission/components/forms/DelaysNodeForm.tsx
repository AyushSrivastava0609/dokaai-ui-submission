"use client";

import React, { useState } from "react";
import { TextField } from "@/cuteui/components/textfield";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";
import { DelayNodeData } from "@/types";
import { TIME_UNITS } from "@/config/data";

interface DelaysNodeFormProps {
    onSubmit: (data: DelayNodeData) => void;
}

export default function DelaysNodeForm({ onSubmit }: DelaysNodeFormProps) {
    const [form, setForm] = useState({
        delayName: "",
        duration: "",
        unit: "minutes",
    });

    const handleSave = () => {
        if (!form.delayName.trim() || !form.duration.trim()) return;
        onSubmit(form);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4 overflow-y-auto p-2">
                <h2 className="text-lg font-semibold">Add Delay</h2>

                <TextField
                    required
                    labelName="Delay Name"
                    placeholder="e.g., Wait before sending email"
                    value={form.delayName}
                    onChange={(e) => setForm({ ...form, delayName: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <TextField
                    required
                    type="number"
                    labelName="Duration"
                    placeholder="e.g., 2"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <CustomSelect
                    labelName="Unit"
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    options={TIME_UNITS}
                    placeholder="Select unit"
                    showPlaceholderInMenu
                    size="md"
                />
            </div>

            <div className="p-4 border-t flex justify-end">
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </div>
        </div>
    );
}
