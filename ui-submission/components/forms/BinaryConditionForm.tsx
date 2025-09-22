"use client";

import { useState } from "react";

interface BinaryConditionFormProps {
  onSubmit: (data: {
    conditionName: string;
    property: string;
    operator: string;
    value: string;
  }) => void;
}

export default function BinaryConditionForm({ onSubmit }: BinaryConditionFormProps) {
  const [form, setForm] = useState({
    conditionName: "",
    property: "",
    operator: "",
    value: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Add condition details</h2>

      <label className="text-sm mb-1">Condition name</label>
      <input
        name="conditionName"
        value={form.conditionName}
        onChange={handleChange}
        placeholder="Instagram"
        className="border rounded p-2 mb-4"
      />

      <label className="text-sm mb-1">Data property</label>
      <select
        name="property"
        value={form.property}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
      >
        <option value="">Select property</option>
        <option value="Usertype">Usertype</option>
        <option value="Age">Age</option>
        <option value="Region">Region</option>
      </select>

      <label className="text-sm mb-1">Operator</label>
      <select
        name="operator"
        value={form.operator}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
      >
        <option value="">Select operator</option>
        <option value="==">Is equal to</option>
        <option value="!=">Is not equal to</option>
        <option value=">">Greater than</option>
        <option value="<">Less than</option>
      </select>

      <label className="text-sm mb-1">Value</label>
      <input
        name="value"
        value={form.value}
        onChange={handleChange}
        placeholder="Influencer"
        className="border rounded p-2 mb-4"
      />

      <button
        onClick={() => onSubmit(form)}
        className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Save
      </button>
    </div>
  );
}
