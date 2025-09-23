"use client";
import { useState } from "react";
import { useWorkflow } from "@/context/workflowContext";
import { TextField } from "@/cuteui/components/textfield";
import { TextArea } from "@/cuteui/components/textarea";
import { Button } from "@/cuteui/components/button/button";
import { EndNodeData } from "@/types";

interface EndNodeFormProps {
    onSubmit: (data: EndNodeData) => void;
  }

export default function EndNodeForm({ onSubmit }: EndNodeFormProps) {
    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const handleSave = () => {
        if (!form.name.trim()) return;
        onSubmit(form);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-2 overflow-y-auto p-2">
                <TextField
                    required
                    labelName="Name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border rounded p-2"
                />
                <TextArea
                    labelName="Description"
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full border rounded p-2"
                />
            </div>
            <div className="p-4 border-t flex justify-end">
                <Button
                    onClick={handleSave}
                    color="primary"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
