"use client";

import { useState } from "react";
import { TextField } from "@/cuteui/components/textfield";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";

interface MultipleConditionFormProps {
    onSubmit: (data: {
        conditionName: string;
        rules: { id: string; property: string; operator: string; value: string }[];
    }) => void;
}

export default function MultipleConditionForm({ onSubmit }: MultipleConditionFormProps) {
    const [conditionName, setConditionName] = useState("");
    const [rules, setRules] = useState([
        { id: Date.now().toString(), property: "", operator: "", value: "" },
    ]);

    const updateRule = (id: string, field: string, value: string) => {
        setRules((prev) =>
            prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
        );
    };

    const addRule = () => {
        setRules((prev) => [
            ...prev,
            { id: Date.now().toString(), property: "", operator: "", value: "" },
        ]);
    };

    const handleSave = () => {
        if (!conditionName.trim() || rules.some(r => !r.property || !r.operator || !r.value)) return;
        onSubmit({ conditionName, rules });
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4 overflow-y-auto p-2">
                <TextField
                    required
                    labelName="Condition Name"
                    placeholder="Platform check"
                    value={conditionName}
                    onChange={(e) => setConditionName(e.target.value)}
                    className="w-full border rounded p-2"
                />

                {rules.map((rule, index) => (
                    <div
                        key={rule.id}
                        className="p-3 rounded-lg border bg-gray-50 dark:bg-slate-800 space-y-2"
                    >
                        <p className="text-sm font-medium">Rule {index + 1}</p>

                        <CustomSelect
                            labelName="Property"
                            value={rule.property}
                            onChange={(e) => updateRule(rule.id, "property", e.target.value)}
                            options={[
                                { value: "Region", label: "Region" },
                                { value: "Usertype", label: "Usertype" },
                            ]}
                            placeholder="Select property"
                            showPlaceholderInMenu
                            size="md"
                        />

                        <CustomSelect
                            labelName="Operator"
                            value={rule.operator}
                            onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
                            options={[
                                { value: "==", label: "Is equal to" },
                                { value: "!=", label: "Is not equal to" },
                            ]}
                            placeholder="Select operator"
                            showPlaceholderInMenu
                            size="md"
                        />

                        <TextField
                            required
                            labelName="Value"
                            placeholder="Enter value"
                            value={rule.value}
                            onChange={(e) => updateRule(rule.id, "value", e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addRule}
                    className="text-sm text-emerald-600 hover:underline"
                >
                    + Add another rule
                </button>
            </div>

            <div className="p-4 border-t flex justify-end">
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </div>
        </div>
    );
}
