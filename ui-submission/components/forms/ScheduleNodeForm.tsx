"use client";

import React, { useState } from "react";

interface ScheduleNodeFormProps {
  onSubmit: (data: { scheduleName: string; date: string; time: string; repeat: string }) => void;
}

export default function ScheduleNodeForm({ onSubmit }: ScheduleNodeFormProps) {
  const [form, setForm] = useState({
    scheduleName: "",
    date: "",
    time: "09:00",
    repeat: "none",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full p-4">
      <h2 className="text-lg font-semibold">Add Schedule</h2>

      <label className="flex flex-col text-sm">
        Schedule Name
        <input
          type="text"
          value={form.scheduleName}
          onChange={(e) => setForm({ ...form, scheduleName: e.target.value })}
          className="border rounded p-2"
          placeholder="e.g., Launch Reminder"
        />
      </label>

      <label className="flex flex-col text-sm">
        Date
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border rounded p-2"
        />
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

      <label className="flex flex-col text-sm">
        Repeat
        <select
          value={form.repeat}
          onChange={(e) => setForm({ ...form, repeat: e.target.value })}
          className="border rounded p-2"
        >
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
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
