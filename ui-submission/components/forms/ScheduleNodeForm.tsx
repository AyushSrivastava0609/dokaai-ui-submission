"use client";

import React, { useState } from "react";
import { TextField } from "@/cuteui/components/textfield";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";
import { ScheduleNodeData } from "@/types";
import { FREQUENCIES } from "@/config/data";

interface ScheduleNodeFormProps {
    onSubmit: (data: ScheduleNodeData) => void;
}

export default function ScheduleNodeForm({ onSubmit }: ScheduleNodeFormProps) {
    const [form, setForm] = useState({
        scheduleName: "",
        date: "",
        time: "09:00",
        repeat: "none",
    });

    const handleSave = () => {
        if (!form.scheduleName.trim()) return;
        onSubmit(form);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4 overflow-y-auto p-2">
                <h2 className="text-lg font-semibold">Add Schedule</h2>

                <TextField
                    required
                    labelName="Schedule Name"
                    placeholder="e.g., Launch Reminder"
                    value={form.scheduleName}
                    onChange={(e) => setForm({ ...form, scheduleName: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <TextField
                    required
                    type="date"
                    labelName="Date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <TextField
                    required
                    type="time"
                    labelName="Time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full border rounded p-2"
                />

                <CustomSelect
                    labelName="Repeat"
                    value={form.repeat}
                    onChange={(e) => setForm({ ...form, repeat: e.target.value })}
                    options={FREQUENCIES}
                    placeholder="Select repeat"
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
