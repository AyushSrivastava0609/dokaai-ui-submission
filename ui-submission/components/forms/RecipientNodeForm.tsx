"use client";
import CustomSelect from "@/cuteui/components/custom-select";
import SearchDropdown from "@/cuteui/components/dropDownSearch";
import { RadioButton } from "@/cuteui/components/radio";
import { useState } from "react";

export default function RecipientNodeForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [form, setForm] = useState({
        customerPool: "Instagram",
        selectionType: "Cohorts",
        targetAudience: "Active users",
    });

    const handleSave = () => {
        if (!form.customerPool.trim() || !form.targetAudience.trim()) return; // simple validation
        onSubmit(form);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {/* Customer Pool Dropdown */}
                <div>
                    <CustomSelect
                        labelName="Customer Pool"
                        value={form.customerPool}
                        onChange={(e) => setForm({ ...form, customerPool: e.target.value })}
                        options={[
                            { value: 'Instagram', label: 'Instagram' },
                            { value: 'Facebook', label: 'Facebook' },
                            { value: 'Twitter', label: 'Twitter' },
                        ]}
                        placeholder="Customer Pool"
                        showPlaceholderInMenu
                        size="md"
                    />
                </div>

                {/* Selection Type Radio Buttons */}
                <div>
                    <RadioButton
                        label="Selection Type"
                        name="selectionType"
                        options={[
                            { value: "Cohorts", label: "Cohorts" },
                            { value: "Target Audience", label: "Target Audience" },
                            { value: "Payload based", label: "Payload based" },
                        ]}
                        value={form.selectionType}
                        onChange={(_, value) => setForm({ ...form, selectionType: value })}
                    />

                </div>

                {/* Target Audience Search Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Target Audience</label>
                    <div className="relative mt-2">
                        <SearchDropdown
                            list={[
                                "Students",
                                "Working Professionals",
                                "Founders",
                                "Freelancers",
                                "Enterprises",
                            ]} // ✅ replace with your actual audience options
                            setSelectedItem={(item) => setForm({ ...form, targetAudience: item })}
                            dropdownTitle={form.targetAudience || "Select Audience"}
                            isSearchEnabled={true}
                            className="w-full"
                        />
                    </div>

                    <p className="text-sm text-green-600 mt-1">
                        Selected target audience: <span className="font-semibold">{form.targetAudience}</span>
                    </p>
                </div>
            </div>

            {/* Save Button */}
            <div className="p-4 border-t flex justify-end">
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
                >
                    Save
                </button>
            </div>
        </div >
    );
}