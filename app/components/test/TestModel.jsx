"use client";

import React, { useEffect, useState } from "react";
import { apiRequest } from "@/app/authservice/api";
import { Trash2 } from "lucide-react";

const TestModal = ({ onClose, editData }) => {
  const [patients, setPatients] = useState([]);
  const [tests, setTests] = useState([]);

  const [form, setForm] = useState({
    patient: "",
    age: "",
    gender: "",
    doctor: "",
    name: "",
    date: "",
    mobile: "",
    status: "Pending",
    paymentStatus: "Pending",
    parameters: [],
    fee: 0,
    discount: 0,
    totalfee: 0,
  });

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    apiRequest("/patients").then((res) => {
      if (res?.success) setPatients(res.data);
    });

    apiRequest("/testParameters").then((res) => {
      if (res?.success) setTests(res.data);
    });
  }, []);

  /* ================= LOAD EDIT DATA ================= */
  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  /* ================= HANDLE TEST SELECTION ================= */
  const handleTestChange = (name) => {
    const selectedTest = tests.find((t) => t.name === name);
    if (!selectedTest) return;

    // prevent duplicate test
    const alreadyAdded = form.parameters.some((p) => p.testName === name);
    if (alreadyAdded) return;

    const newParams =
      selectedTest.parameters?.map((p) => ({
        testName: name,
        name: p.name || "",
        min: p.min || "",
        max: p.max || "",
        unit: p.unit || "",
        cost: p.cost || 0,
        duration: p.duration || "",
        result: "",
      })) || [];

    const updatedParams = [...form.parameters, ...newParams];

    const totalFee = updatedParams.reduce(
      (sum, p) => sum + Number(p.cost || 0),
      0
    );

    setForm((prev) => ({
      ...prev,
      name,
      parameters: updatedParams,
      fee: totalFee,
      totalfee: Math.max(totalFee - (prev.discount || 0), 0),
    }));
  };

  /* ================= HANDLE FORM CHANGES ================= */
  const handleChange = (key, value) => {
    if (key === "mobile") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      setForm((prev) => ({ ...prev, mobile: digits }));
    } else {
      setForm((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleParamChange = (index, key, value) => {
    const updated = [...form.parameters];
    updated[index][key] = value;

    const totalFee = updated.reduce((sum, p) => sum + Number(p.cost || 0), 0);

    setForm((prev) => ({
      ...prev,
      parameters: updated,
      fee: totalFee,
      totalfee: Math.max(totalFee - (prev.discount || 0), 0),
    }));
  };

  const handleDiscountChange = (value) => {
    const discount = Number(value) || 0;
    setForm((prev) => ({
      ...prev,
      discount,
      totalfee: Math.max(prev.fee - discount, 0),
    }));
  };

  const addParameter = () => {
    setForm((prev) => ({
      ...prev,
      parameters: [
        ...prev.parameters,
        { name: "", min: "", max: "", unit: "", cost: 0, duration: "", result: "" },
      ],
    }));
  };

  const removeParameter = (index) => {
    const updated = form.parameters.filter((_, i) => i !== index);
    const totalFee = updated.reduce((sum, p) => sum + Number(p.cost || 0), 0);

    setForm((prev) => ({
      ...prev,
      parameters: updated,
      fee: totalFee,
      totalfee: Math.max(totalFee - (prev.discount || 0), 0),
    }));
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async () => {
    if (form.mobile.length !== 11) {
      setErrorModal({ show: true, message: "Mobile number must be 11 digits." });
      return;
    }

    try {
      const res = await apiRequest("/tests/createTest", {
        method: "POST",
        data: {
          ...form,
          fee: Number(form.fee),
          discount: Number(form.discount),
          totalfee: Number(form.totalfee),
        },
      });

      if (res?.success) {
        setSuccessModal(true);

        // Automatically close modal after 1.2 seconds
        setTimeout(() => {
          setSuccessModal(false);
          onClose(); // Close the TestModal
        }, 1200);

      } else {
        setErrorModal({ show: true, message: res.message || "Failed to save test." });
      }
    } catch (err) {
      setErrorModal({ show: true, message: err.message || "Failed to save test." });
    }
  };

  /* ================= GROUP PARAMETERS BY TEST ================= */
  const groupedTests = form.parameters.reduce((acc, param) => {
    if (!acc[param.testName]) acc[param.testName] = [];
    acc[param.testName].push(param);
    return acc;
  }, {});

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">

          {/* HEADER */}
          <div className="bg-teal-600 text-white p-6 flex justify-between">
            <h2 className="text-xl font-bold">
              {editData ? "Update Lab Test Report" : "New Lab Test Report"}
            </h2>
            <button onClick={onClose}>✕</button>
          </div>

          <form
            className="p-6 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* PATIENT INFO */}
            <section>
              <h3 className="font-semibold mb-4">Patient Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="label">Patient Name</label>
                  <select
                    className="input"
                    value={form.patient}
                    onChange={(e) => handleChange("patient", e.target.value)}
                  >
                    <option value="">Select Patient</option>
                    {patients.map((p) => (
                      <option key={p._id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label">Age</label>
                  <input className="input" value={form.age} onChange={(e) => handleChange("age", e.target.value)} />
                </div>

                <div>
                  <label className="label">Gender</label>
                  <select className="input" value={form.gender} onChange={(e) => handleChange("gender", e.target.value)}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="label">Doctor Name</label>
                  <input className="input" value={form.doctor} onChange={(e) => handleChange("doctor", e.target.value)} />
                </div>

                <div>
                  <label className="label">Date</label>
                  <input type="date" className="input" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
                </div>

                <div>
                  <label className="label">Mobile</label>
                  <input
                    className="input"
                    placeholder="03xx-xxxxxxx"
                    value={form.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* TEST SELECTION */}
            <section>
              <h3 className="font-semibold mb-4">Test Information</h3>
              <div className="md:w-1/3">
                <label className="label">Test Name</label>
                <select
                  className="input"
                  value={form.name}
                  onChange={(e) => handleTestChange(e.target.value)}
                >
                  <option value="">Select Test</option>
                  {tests.map((t) => (
                    <option key={t._id} value={t.name}>{t.name}</option>
                  ))}
                </select>
              </div>
            </section>

            {/* PARAMETERS TABLE */}
            <section className="space-y-6">
              {Object.entries(groupedTests).map(([testName, params]) => (
                <div key={testName} className="border rounded-lg p-4">
                  <h3 className="font-bold text-teal-600 mb-3">{testName}</h3>
                  <table className="w-full border text-sm text-center">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-2">Parameter</th>
                        <th className="border p-2">Min</th>
                        <th className="border p-2">Max</th>
                        <th className="border p-2">Unit</th>
                        <th className="border p-2">Cost</th>
                        <th className="border p-2">Result</th>
                        <th className="border p-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {params.map((p, i) => {
                        const paramIndex = form.parameters.findIndex(
                          (fp) => fp.testName === p.testName && fp.name === p.name
                        );
                        return (
                          <tr key={paramIndex}>
                            <td className="border p-1">{p.name}</td>
                            <td className="border p-1">{p.min}</td>
                            <td className="border p-1">{p.max}</td>
                            <td className="border p-1">{p.unit}</td>
                            <td className="border p-1">{p.cost}</td>
                            <td className="border p-1">
                              <input className="table-input" value={p.result} onChange={(e) => handleParamChange(paramIndex, "result", e.target.value)} />
                            </td>
                            <td className="border p-1 text-center">
                              <Trash2
                                size={18}
                                className="text-red-500 cursor-pointer mx-auto"
                                onClick={() => removeParameter(paramIndex)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </section>

            {/* COST & STATUS */}
            <section className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="label">Fee</label>
                <input type="number" className="input" value={form.fee} disabled />
              </div>

              <div>
                <label className="label">Discount</label>
                <input type="number" className="input" value={form.discount} onChange={(e) => handleDiscountChange(e.target.value)} />
              </div>

              <div>
                <label className="label">Total Cost</label>
                <input className="input bg-gray-100" value={form.totalfee} disabled />
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Test Status</label>
                <select className="input" value={form.status} onChange={(e) => handleChange("status", e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="label">Payment Status</label>
                <select className="input" value={form.paymentStatus} onChange={(e) => handleChange("paymentStatus", e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </section>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={onClose} className="border px-4 py-2 rounded">
                Cancel
              </button>
              <button type="submit" className="bg-teal-600 text-white px-5 py-2 rounded">
                Save Report
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {successModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-green-600 text-xl font-bold mb-2">Success</h3>
            <p className="mb-4">Test added successfully.</p>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-red-600 text-xl font-bold mb-2">Unsuccessful</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button onClick={() => setErrorModal({ show: false, message: "" })} className="px-4 py-2 bg-red-600 text-white rounded">
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
        .table-input {
          width: 100%;
          padding: 4px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default TestModal;
