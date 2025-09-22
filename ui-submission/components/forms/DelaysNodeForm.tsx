"use client";

import React, { useState } from "react";

interface DelaysNodeFormProps {
  onSubmit: (data: { delayName: string; duration: string; unit: string }) => void;
}

export default function DelaysNodeForm({ onSubmit }: DelaysNodeFormProps) {
  const [form, setForm] = useState({
    delayName: "",
    duration: "",
    unit: "minutes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full p-4">
      <h2 className="text-lg font-semibold">Add Delay</h2>

      <label className="flex flex-col text-sm">
        Delay Name
        <input
          type="text"
          value={form.delayName}
          onChange={(e) => setForm({ ...form, delayName: e.target.value })}
          className="border rounded p-2"
          placeholder="e.g., Wait before sending email"
        />
      </label>

      <label className="flex flex-col text-sm">
        Duration
        <input
          type="number"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          className="border rounded p-2"
          placeholder="e.g., 2"
        />
      </label>

      <label className="flex flex-col text-sm">
        Unit
        <select
          value={form.unit}
          onChange={(e) => setForm({ ...form, unit: e.target.value })}
          className="border rounded p-2"
        >
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-auto bg-primary text-white rounded px-4 py-2 hover:bg-primary/80"
      >
        Save
      </button>
    </form>
  );
}
