'use client';

import React, { useState } from "react";
import { TextField } from "@/cuteui/components/textfield";
import { TextArea } from "@/cuteui/components/textarea";
import CustomSelect from "@/cuteui/components/custom-select";
import { Button } from "@/cuteui/components/button/button";

interface IndividualChannelFormProps {
  onSubmit: (data: { channelName: string; channelType: string; description?: string }) => void;
}

export default function IndividualChannelForm({ onSubmit }: IndividualChannelFormProps) {
  const [form, setForm] = useState({
    channelName: "",
    channelType: "Email",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 overflow-y-auto p-2">
        <h2 className="text-lg font-semibold">Add Individual Channel</h2>

        <TextField
          required
          labelName="Channel Name"
          type="text"
          placeholder="e.g., Welcome Email"
          value={form.channelName}
          onChange={(e) => setForm({ ...form, channelName: e.target.value })}
          className="w-full"
        />

        <CustomSelect
          labelName="Channel Type"
          value={form.channelType}
          onChange={(e) => setForm({ ...form, channelType: e.target.value })}
          options={[
            { value: "Email", label: "Email" },
            { value: "SMS", label: "SMS" },
            { value: "Push", label: "Push" },
            { value: "In-App", label: "In-App" },
          ]}
          placeholder="Select Channel Type"
          showPlaceholderInMenu
          size="md"
        />

        <TextArea
          labelName="Description"
          placeholder="Optional description..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full"
        />
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
