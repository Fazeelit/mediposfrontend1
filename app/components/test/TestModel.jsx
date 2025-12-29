"use client";

import React, { useState, useEffect } from "react";

const TestModal = ({ onClose, onSave, editData, parameters = [] }) => {
  const [form, setForm] = useState({
    patient: "",
    gender: "",
    age: "",
    doctor: "",
    testname: "",
    fee: "",
    discount: "",
    totalfee: 0,
    date: "",
    status: "Pending",
    paymentStatus: "Pending",
    parameters: [{ name: "", min: "", max: "", result: "", unit: "" }],
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  // Auto-calculate total fee
  useEffect(() => {
    const fee = Number(form.fee) || 0;
    const discount = Number(form.discount) || 0;
    setForm((prev) => ({
      ...prev,
      totalfee: Math.max(fee - discount, 0),
    }));
  }, [form.fee, form.discount]);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleParamChange = (index, key, value) => {
    const updated = [...form.parameters];
    updated[index][key] = value;
    setForm({ ...form, parameters: updated });
  };

  const addParameter = () => {
    setForm({
      ...form,
      parameters: [
        ...form.parameters,
        { name: "", min: "", max: "", result: "", unit: "" },
      ],
    });
  };

  const removeParameter = (index) => {
    setForm({
      ...form,
      parameters: form.parameters.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    onSave({
      ...form,
      fee: Number(form.fee),
      discount: Number(form.discount),
      totalfee: Number(form.totalfee),
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between">
          <h2 className="text-2xl font-bold">
            {editData ? "Update Lab Test Report" : "New Lab Test Report"}
          </h2>
          <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg">✕</button>
        </div>

        <form
          className="p-6 space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Patient Info */}
          <section>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Patient Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                className="input"
                placeholder="Patient Name"
                value={form.patient}
                onChange={(e) => handleChange("patient", e.target.value)}
              />

              <input
                className="input"
                placeholder="Age"
                value={form.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />

              <select
                className="input"
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input
                className="input"
                placeholder="Doctor Name"
                value={form.doctor}
                onChange={(e) => handleChange("doctor", e.target.value)}
              />

              <input
                type="date"
                className="input"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>
          </section>

          {/* Test Info */}
          <section>
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Test Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                className="input"
                placeholder="Test Name"
                value={form.testname}
                onChange={(e) => handleChange("testname", e.target.value)}
              />

              <input
                type="number"
                className="input"
                placeholder="Fee"
                value={form.fee}
                onChange={(e) => handleChange("fee", e.target.value)}
              />

              <input
                type="number"
                className="input"
                placeholder="Discount"
                value={form.discount}
                onChange={(e) => handleChange("discount", e.target.value)}
              />

              <input
                className="input bg-gray-100"
                placeholder="Total Fee"
                value={form.totalfee}
                disabled
              />
            </div>
          </section>

          {/* Parameters */}
          <section>
            <div className="flex justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-700">
                Test Parameters
              </h3>
              <button
                type="button"
                onClick={addParameter}
                className="px-4 py-2 bg-teal-500 text-white rounded-md"
              >
                + Add
              </button>
            </div>

            <table className="w-full text-sm border">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-2 border">Parameter</th>
                  <th className="p-2 border">Min</th>
                  <th className="p-2 border">Max</th>
                  <th className="p-2 border">Result</th>
                  <th className="p-2 border">Unit</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {form.parameters.map((p, i) => (
                  <tr key={i}>
                    <td>
                      <select
                        className="table-input"
                        value={p.name}
                        onChange={(e) => {
                          const selected = parameters.find(
                            (x) => x.name === e.target.value
                          );
                          handleParamChange(i, "name", selected.name);
                          handleParamChange(i, "min", selected.min);
                          handleParamChange(i, "max", selected.max);
                          handleParamChange(i, "unit", selected.unit);
                        }}
                      >
                        <option value="">Select</option>
                        {parameters.map((param, idx) => (
                          <option key={idx} value={param.name}>
                            {param.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td><input className="table-input" value={p.min} disabled /></td>
                    <td><input className="table-input" value={p.max} disabled /></td>
                    <td>
                      <input
                        className="table-input"
                        value={p.result}
                        onChange={(e) =>
                          handleParamChange(i, "result", e.target.value)
                        }
                      />
                    </td>
                    <td><input className="table-input" value={p.unit} disabled /></td>
                    <td>
                      {form.parameters.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeParameter(i)}
                          className="text-red-500"
                        >
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t pt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded-md">
              Cancel
            </button>
            <button className="px-5 py-2 bg-teal-600 text-white rounded-md">
              Save Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestModal;
