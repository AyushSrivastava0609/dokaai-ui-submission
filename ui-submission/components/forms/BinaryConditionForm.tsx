"use client";

import { useState } from "react";
import { Button } from "@/cuteui/components/button/button";
import { TextField } from "@/cuteui/components/textfield";
import CustomSelect from "@/cuteui/components/custom-select";
import { BinaryConditionNodeData } from "@/types";
import { DATA_PROPERTIES, OPERATORS } from "@/config/data";

interface BinaryConditionFormProps {
  onSubmit: (data: BinaryConditionNodeData) => void;
}

export default function BinaryConditionForm({ onSubmit }: BinaryConditionFormProps) {
  const [form, setForm] = useState({
    conditionName: "",
    property: "",
    operator: "",
    value: "",
  });

  const handleSave = () => {
    if (!form.conditionName.trim() || !form.property || !form.operator) return; // basic validation
    onSubmit(form);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-2 overflow-y-auto p-2">
        <TextField
          required
          labelName="Condition Name"
          placeholder="Instagram"
          value={form.conditionName}
          onChange={(e) => setForm({ ...form, conditionName: e.target.value })}
          className="w-full border rounded p-2"
        />

        <CustomSelect
          labelName="Data Property"
          value={form.property}
          onChange={(e) => setForm({ ...form, property: e.target.value })}
          options={DATA_PROPERTIES}
          placeholder="Select property"
          showPlaceholderInMenu
          size="md"
        />

        <CustomSelect
          labelName="Operator"
          value={form.operator}
          onChange={(e) => setForm({ ...form, operator: e.target.value })}
          options={OPERATORS}
          placeholder="Select operator"
          showPlaceholderInMenu
          size="md"
        />

        <TextField
          required
          labelName="Value"
          placeholder="Influencer"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
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
