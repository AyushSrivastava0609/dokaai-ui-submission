"use client";

import React, { useState } from "react";
import { TextField } from "@/cuteui/components/textfield";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";
import { DigestNodeData } from "@/types";
import { FREQUENCIES } from "@/config/data";

interface DigestNodeFormProps {
    onSubmit: (data: DigestNodeData) => void;
}

export default function DigestNodeForm({ onSubmit }: DigestNodeFormProps) {
    const [form, setForm] = useState({
        digestName: "",
        frequency: "daily",
        time: "09:00",
    });

    const handleSave = () => {
        if (!form.digestName.trim()) return;
        onSubmit(form);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4 overflow-y-auto p-2">
                <h2 className="text-lg font-semibold">Add Digest</h2>

                <TextField
                    required
                    labelName="Digest Name"
                    placeholder="e.g., Weekly Digest"
                    value={form.digestName}
                    onChange={(e) => setForm({ ...form, digestName: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <CustomSelect
                    labelName="Frequency"
                    value={form.frequency}
                    onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                    options={FREQUENCIES}
                    placeholder="Select frequency"
                    showPlaceholderInMenu
                    size="md"
                />

                <TextField
                    required
                    type="time"
                    labelName="Time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full border rounded p-2"
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
