"use client";

import React, { useState } from "react";
import { CuteCheckbox } from "@/cuteui/components/checkbox";
import { Button } from "@/cuteui/components/button/button";
import { TextField } from "@/cuteui/components/textfield";

interface ChannelRouterFormProps {
  onSubmit: (data: { routerName: string; channels: string[] }) => void;
}

export default function ChannelRouterForm({ onSubmit }: ChannelRouterFormProps) {
  const [form, setForm] = useState({
    routerName: "",
    channels: [] as string[],
  });

  const toggleChannel = (channel: string) => {
    setForm((prev) => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter((c) => c !== channel)
        : [...prev.channels, channel],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 overflow-y-auto p-2">
        <h2 className="text-lg font-semibold">Add Channel Router</h2>
        <TextField
          labelName="Router Name"
          type="text"
          value={form.routerName}
          onChange={(e) => setForm({ ...form, routerName: e.target.value })}
          className="border rounded p-2"
          placeholder="e.g., Marketing Router"
        />

        <div className="flex flex-col gap-2">
          <span className="text-sm">Select Channels</span>
          {["Email", "SMS", "Push", "In-App"].map((ch) => (
            <label key={ch} className="flex items-center gap-2 text-sm">
              <CuteCheckbox
                checked={form.channels.includes(ch)}
                onChange={() => toggleChannel(ch)}
                name={ch}
              />
              {ch}
            </label>
          ))}
        </div>

      </div>
      <div className="p-4 border-t flex justify-end">
        <Button
          onClick={handleSubmit}
          color="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
