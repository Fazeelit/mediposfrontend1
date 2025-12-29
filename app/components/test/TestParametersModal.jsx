"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "@/app/authservice/api";
import { testData } from "./tests.jsx"; // Import your test data

const TestParametersModal = ({ tests: propTests, setTests: propSetTests, onClose }) => {
  // Use internal state if parent props not provided
  const [tests, setTests] = useState(propTests || []);
  const setTestsSafe = propSetTests || setTests;

  const [form, setForm] = useState({
    testname: "",
    parameters: [{ name: "", min: "", max: "", unit: "", cost: "" }],
  });

  const [loading, setLoading] = useState(false);
  const [availableTests, setAvailableTests] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  // Load test data on mount
  useEffect(() => {
    setAvailableTests(testData);
  }, []);

  // Handle test selection from dropdown
  const handleTestSelect = (testName) => {
    const selectedTest = availableTests.find((t) => t.name === testName);
    if (selectedTest) {
      setForm({
        testname: selectedTest.name,
        parameters: selectedTest.parameters.length
          ? selectedTest.parameters.map((p) => ({
              name: p.name || "",
              min: p.min || "",
              max: p.max || "",
              unit: p.unit || "",
              cost: p.cost || "",
            }))
          : [{ name: "", min: "", max: "", unit: "", cost: "" }],
      });
    } else {
      setForm({
        testname: "",
        parameters: [{ name: "", min: "", max: "", unit: "", cost: "" }],
      });
    }
  };

  // Update any input field except name
  const updateParameter = (index, field, value) => {
    const updatedParams = form.parameters.map((param, i) =>
      i === index ? { ...param, [field]: value } : param
    );
    setForm((prev) => ({ ...prev, parameters: updatedParams }));
  };

  // Add a new parameter row
  const addParameterRow = () => {
    setForm((prev) => ({
      ...prev,
      parameters: [...prev.parameters, { name: "", min: "", max: "", unit: "", cost: "" }],
    }));
  };

  // Remove a parameter row
  const removeParameterRow = (index) => {
    const updatedParams = form.parameters.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, parameters: updatedParams }));
  };

  // Submit the test
  const submitTest = async () => {
    if (!form.testname) {
      setErrorModal({ show: true, message: "Please enter the Test Name" });
      return;
    }
    for (const param of form.parameters) {
      if (!param.name) {
        setErrorModal({ show: true, message: "Parameter name cannot be empty" });
        return;
      }
    }

    setLoading(true);
    try {
      const payload = { name: form.testname, parameters: form.parameters };
      const response = await apiRequest("/testParameters/createTestparameter", {
        method: "POST",
        data: payload,
      });

      if (response?.success) {
        // Update state safely
        setTestsSafe([...(propTests || tests), response.data]);
        setForm({ testname: "", parameters: [{ name: "", min: "", max: "", unit: "", cost: "" }] });
        setSuccessModal(true);
      } else {
        setErrorModal({ show: true, message: response?.message || "Failed to add test" });
      }
    } catch (error) {
      console.error(error);
      setErrorModal({ show: true, message: error.message || "Something went wrong while adding test" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full h-[550px] overflow-y-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Add Test with Parameters</h2>
          <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg" disabled={loading}>✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Test Name Dropdown */}
          <div>
            <label className="label">Select Test</label>
            <select
              className="input"
              value={form.testname}
              onChange={(e) => handleTestSelect(e.target.value)}
            >
              <option value="">-- Select a Test --</option>
              {availableTests.map((t, idx) => (
                <option key={idx} value={t.name}>{t.name}</option>
              ))}
            </select>
          </div>

          {/* Parameter Rows */}
          {form.parameters.map((param, index) => (
            <div key={index} className="grid grid-cols-5 gap-2 items-end">
              <div>
                <label className="label">Parameter Name</label>
                <input type="text" className="input" value={param.name} readOnly />
              </div>
              <div>
                <label className="label">Min</label>
                <input type="text" className="input" value={param.min} onChange={(e) => updateParameter(index, "min", e.target.value)} />
              </div>
              <div>
                <label className="label">Max</label>
                <input type="text" className="input" value={param.max} onChange={(e) => updateParameter(index, "max", e.target.value)} />
              </div>
              <div>
                <label className="label">Unit</label>
                <input type="text" className="input" value={param.unit} onChange={(e) => updateParameter(index, "unit", e.target.value)} />
              </div>
              <div>
                <label className="label">Cost</label>
                <input type="number" className="input" value={param.cost} onChange={(e) => updateParameter(index, "cost", e.target.value)} />
              </div>

              {index > 0 && (
                <button onClick={() => removeParameterRow(index)} className="text-red-500 mt-1 col-span-5 text-left">
                  Remove
                </button>
              )}
            </div>
          ))}

          <button onClick={addParameterRow} className="px-4 py-2 bg-gray-200 rounded-md">
            + Add Parameter
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-4 py-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-md text-gray-500" disabled={loading}>
            Cancel
          </button>
          <button onClick={submitTest} className="px-5 py-2 bg-teal-600 text-white rounded-md" disabled={loading}>
            {loading ? "Adding..." : "Add Test"}
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h3 className="text-green-600 font-bold text-lg mb-4">Test Added Successfully!</h3>
            <button onClick={() => { setSuccessModal(false); onClose(); }} className="px-4 py-2 bg-green-600 text-white rounded-md">OK</button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h3 className="text-red-600 font-bold text-lg mb-4">Error</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button onClick={() => setErrorModal({ show: false, message: "" })} className="px-4 py-2 bg-red-600 text-white rounded-md">OK</button>
          </div>
        </div>
      )}

      <style>{`
        .input { height: 40px; border: 2px solid #14b8a6; border-radius: 6px; padding: 0 10px; font-size: 14px; width: 100%; }
        .label { font-size: 14px; font-weight: bold; color: #000; margin-bottom: 4px; display: block; }
      `}</style>
    </div>
  );
};

export default TestParametersModal;
