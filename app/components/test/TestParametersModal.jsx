"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "@/app/authservice/api";
import { testData } from "./tests.jsx";

const TestParametersModal = ({ tests: propTests, setTests: propSetTests, onClose }) => {
  const [tests, setTests] = useState(propTests || []);
  const setTestsSafe = propSetTests || setTests;

  const [form, setForm] = useState({
    testname: "",
    parameters: [{ name: "", min: "", max: "", unit: "", duration: "", cost: "" }],
  });

  const [loading, setLoading] = useState(false);
  const [availableTests, setAvailableTests] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  useEffect(() => {
    setAvailableTests(testData);
  }, []);

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
              duration: p.duration || "",
              cost: p.cost || "",
            }))
          : [{ name: "", min: "", max: "", unit: "", duration: "", cost: "" }],
      });
    } else {
      setForm({
        testname: "",
        parameters: [{ name: "", min: "", max: "", unit: "", duration: "", cost: "" }],
      });
    }
  };

  const updateParameter = (index, field, value) => {
    const updatedParams = form.parameters.map((param, i) =>
      i === index ? { ...param, [field]: value } : param
    );
    setForm((prev) => ({ ...prev, parameters: updatedParams }));
  };

  const addParameterRow = () => {
    setForm((prev) => ({
      ...prev,
      parameters: [...prev.parameters, { name: "", min: "", max: "", unit: "", duration: "", cost: "" }],
    }));
  };

  const removeParameterRow = (index) => {
    setForm((prev) => ({
      ...prev,
      parameters: prev.parameters.filter((_, i) => i !== index),
    }));
  };

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
      const response = await apiRequest("/testParameters/createTestparameter", {
        method: "POST",
        data: { name: form.testname, parameters: form.parameters },
      });

      if (response?.success) {
        setTestsSafe([...(propTests || tests), response.data]);
        setForm({
          testname: "",
          parameters: [{ name: "", min: "", max: "", unit: "", duration: "", cost: "" }],
        });
        setSuccessModal(true);
      } else {
        setErrorModal({ show: true, message: response?.message || "Failed to add test" });
      }
    } catch (error) {
      setErrorModal({ show: true, message: error.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[550px] overflow-y-auto">

          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Add Test with Parameters</h2>
            <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg" disabled={loading}>
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
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

            {form.parameters.map((param, index) => (
              <div key={index} className="grid grid-cols-6 gap-3 items-end">
                <div>
                  <label className="label">Parameter</label>
                  <input className="input bg-gray-100" value={param.name} readOnly />
                </div>
                <div>
                  <label className="label">Min</label>
                  <input className="input" value={param.min} onChange={(e) => updateParameter(index, "min", e.target.value)} />
                </div>
                <div>
                  <label className="label">Max</label>
                  <input className="input" value={param.max} onChange={(e) => updateParameter(index, "max", e.target.value)} />
                </div>
                <div>
                  <label className="label">Unit</label>
                  <input className="input" value={param.unit} onChange={(e) => updateParameter(index, "unit", e.target.value)} />
                </div>
                <div>
                  <label className="label">Duration</label>
                  <input
                    className="input"
                    placeholder="HH:MM"
                    value={param.duration}
                    onChange={(e) => updateParameter(index, "duration", e.target.value)}
                  />
                </div>
                <div>
                  <label className="label">Cost</label>
                  <input
                    type="number"
                    className="input"
                    value={param.cost}
                    onChange={(e) => updateParameter(index, "cost", e.target.value)}
                  />
                </div>

                {index > 0 && (
                  <button onClick={() => removeParameterRow(index)} className="text-red-500 col-span-6 text-left mt-1">
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
          <div className="flex justify-end gap-3 border-t px-4 py-3">
            <button onClick={onClose} className="px-4 py-2 border rounded-md text-gray-500">
              Cancel
            </button>
            <button onClick={submitTest} className="px-5 py-2 bg-teal-600 text-white rounded-md">
              {loading ? "Adding..." : "Add Test"}
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {successModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-green-600 text-xl font-bold mb-2">Success</h3>
            <p className="mb-4">Test added successfully.</p>
            <button
              onClick={() => setSuccessModal(false)}
              className="px-4 py-2 bg-teal-600 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-red-600 text-xl font-bold mb-2">Unsuccessful</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button
              onClick={() => setErrorModal({ show: false, message: "" })}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        .input {
          height: 40px;
          border: 2px solid #14b8a6;
          border-radius: 6px;
          padding: 0 10px;
          font-size: 14px;
          width: 100%;
        }
        .label {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
          display: block;
        }
      `}</style>
    </>
  );
};

export default TestParametersModal;
