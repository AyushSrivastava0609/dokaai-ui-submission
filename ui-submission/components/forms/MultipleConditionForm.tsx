"use client";

import { useState } from "react";

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

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Add multiple condition details</h2>

      <label className="text-sm mb-1">Condition name</label>
      <input
        value={conditionName}
        onChange={(e) => setConditionName(e.target.value)}
        placeholder="Platform check"
        className="border rounded p-2 mb-4"
      />

      {rules.map((rule, index) => (
        <div key={rule.id} className="mb-4 border p-2 rounded bg-gray-50">
          <label className="text-sm">Rule {index + 1}</label>

          <select
            value={rule.property}
            onChange={(e) => updateRule(rule.id, "property", e.target.value)}
            className="border rounded p-2 w-full mb-2"
          >
            <option value="">Select property</option>
            <option value="Region">Region</option>
            <option value="Usertype">Usertype</option>
          </select>

          <select
            value={rule.operator}
            onChange={(e) => updateRule(rule.id, "operator", e.target.value)}
            className="border rounded p-2 w-full mb-2"
          >
            <option value="">Select operator</option>
            <option value="==">Is equal to</option>
            <option value="!=">Is not equal to</option>
          </select>

          <input
            value={rule.value}
            onChange={(e) => updateRule(rule.id, "value", e.target.value)}
            placeholder="Value"
            className="border rounded p-2 w-full"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addRule}
        className="mb-4 text-sm text-green-600 hover:underline"
      >
        + Add another rule
      </button>

      <button
        onClick={() => onSubmit({ conditionName, rules })}
        className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Save
      </button>
    </div>
  );
}
