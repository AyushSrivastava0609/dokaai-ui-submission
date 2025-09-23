"use client";
import { useState } from "react";
import { useWorkflow } from "@/context/workflowContext";
import { TextField } from "@/cuteui/components/textfield";
import { TextArea } from "@/cuteui/components/textarea";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";
import { StartNodeData } from "@/types";
import { NOTIFICATION_TYPE, TAGS } from "@/config/data";

interface StartNodeFormProps {
    onSubmit: (data: StartNodeData) => void;
  }

export default function StartNodeForm({ onSubmit }: StartNodeFormProps) {
    const [form, setForm] = useState({
        name: "",
        description: "",
        tag: "",
        notificationType: "",
    });

    const { setWorkflowName } = useWorkflow();

    const handleSave = () => {
        if (!form.name.trim()) return; // simple validation
        setWorkflowName(form.name);
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
                <CustomSelect
                    labelName="Tag"
                    value={form.tag}
                    onChange={(e) => setForm({ ...form, tag: e.target.value })}
                    options={TAGS}
                    placeholder="Tag"
                    showPlaceholderInMenu
                    size="md"
                />

                <CustomSelect
                    labelName="Notification Type"
                    value={form.notificationType}
                    onChange={(e) => setForm({ ...form, notificationType: e.target.value })}
                    options={NOTIFICATION_TYPE}
                    placeholder="Notification Type"
                    showPlaceholderInMenu
                    size="md"
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
