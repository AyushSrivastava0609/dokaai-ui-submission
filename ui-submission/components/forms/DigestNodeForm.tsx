"use client";

import React, { useState } from "react";

interface DigestNodeFormProps {
  onSubmit: (data: { digestName: string; frequency: string; time: string }) => void;
}

export default function DigestNodeForm({ onSubmit }: DigestNodeFormProps) {
  const [form, setForm] = useState({
    digestName: "",
    frequency: "daily",
    time: "09:00",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full p-4">
      <h2 className="text-lg font-semibold">Add Digest</h2>

      <label className="flex flex-col text-sm">
        Digest Name
        <input
          type="text"
          value={form.digestName}
          onChange={(e) => setForm({ ...form, digestName: e.target.value })}
          className="border rounded p-2"
          placeholder="e.g., Weekly Digest"
        />
      </label>

      <label className="flex flex-col text-sm">
        Frequency
        <select
          value={form.frequency}
          onChange={(e) => setForm({ ...form, frequency: e.target.value })}
          className="border rounded p-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>

      <label className="flex flex-col text-sm">
        Time
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="border rounded p-2"
        />
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
