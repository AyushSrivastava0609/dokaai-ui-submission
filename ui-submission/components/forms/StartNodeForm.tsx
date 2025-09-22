"use client";
import { useState } from "react";
import { useWorkflow } from "@/context/workflowContext";
import { TextField } from "@/cuteui/components/textfield";
import { TextArea } from "@/cuteui/components/textarea";
import CustomSelect from "@/cuteui/components/custom-select";

export default function StartNodeForm({ onSubmit }: { onSubmit: (data: any) => void }) {
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
                    options={[
                        { value: 'Marketing', label: 'Marketing' },
                        { value: 'Sales', label: 'Sales' },
                        { value: 'Design', label: 'Design' },
                    ]}
                    placeholder="Tag"
                    showPlaceholderInMenu
                    size="md"
                />

                <CustomSelect
                labelName="Notification Type"
                    value={form.notificationType}
                    onChange={(e) => setForm({ ...form, notificationType: e.target.value })}
                    options={[
                        { value: 'Email', label: 'Email' },
                        { value: 'SMS', label: 'SMS' },
                        { value: 'Push', label: 'Push Notification' },
                    ]}
                    placeholder="Notification Type"
                    showPlaceholderInMenu
                    size="md"
                />

            </div>
            <div className="p-4 border-t flex justify-end">
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
                >
                    Save
                </button>
            </div>
        </div>
    );
}
