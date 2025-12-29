// app/data/tests.js

export const testData = [
  {
    name: "Hemoglobin (Hb) Test",
    parameters: [
      { name: "Hemoglobin (Hb)", min: "13.5", max: "17.5", unit: "g/dL" },
      { name: "Hematocrit (Hct)", min: "41", max: "53", unit: "%" },
      { name: "RBC Count", min: "4.7", max: "6.1", unit: "million/µL" },
    ],
  },
  {
    name: "HbA1c Test",
    parameters: [
      { name: "HbA1c", min: "4", max: "5.6", unit: "%" },
    ],
  },
  {
    name: "Liver Function Test (LFT)",
    parameters: [
      { name: "Total Bilirubin", min: "0.1", max: "1.2", unit: "mg/dL" },
      { name: "Direct Bilirubin", min: "0", max: "0.3", unit: "mg/dL" },
      { name: "Indirect Bilirubin", min: "0.2", max: "0.8", unit: "mg/dL" },
      { name: "SGOT / AST", min: "8", max: "48", unit: "U/L" },
      { name: "SGPT / ALT", min: "7", max: "55", unit: "U/L" },
      { name: "ALP", min: "45", max: "115", unit: "U/L" },
      { name: "Total Protein", min: "6.0", max: "8.3", unit: "g/dL" },
      { name: "Albumin", min: "3.5", max: "5.0", unit: "g/dL" },
      { name: "Globulin", min: "2.0", max: "3.5", unit: "g/dL" },
      { name: "Albumin/Globulin Ratio", min: "1.0", max: "2.0", unit: "" },
    ],
  },
  {
    name: "Renal Function Test (RFT)",
    parameters: [
      { name: "Blood Urea", min: "7", max: "20", unit: "mg/dL" },
      { name: "Serum Creatinine", min: "0.6", max: "1.3", unit: "mg/dL" },
      { name: "Uric Acid", min: "3.4", max: "7.0", unit: "mg/dL" },
      { name: "Sodium (Na⁺)", min: "135", max: "145", unit: "mEq/L" },
      { name: "Potassium (K⁺)", min: "3.5", max: "5.0", unit: "mEq/L" },
      { name: "Chloride (Cl⁻)", min: "96", max: "106", unit: "mEq/L" },
      { name: "Bicarbonate (HCO₃⁻)", min: "22", max: "29", unit: "mEq/L" },
      { name: "eGFR", min: "90", max: "120", unit: "mL/min/1.73m²" },
    ],
  },
  {
    name: "Lipid Profile",
    parameters: [
      { name: "Total Cholesterol", min: "0", max: "200", unit: "mg/dL" },
      { name: "HDL Cholesterol", min: "40", max: "60", unit: "mg/dL" },
      { name: "LDL Cholesterol", min: "0", max: "100", unit: "mg/dL" },
      { name: "VLDL", min: "5", max: "40", unit: "mg/dL" },
      { name: "Triglycerides", min: "0", max: "150", unit: "mg/dL" },
    ],
  },
  {
    name: "Thyroid Function Test (TFT)",
    parameters: [
      { name: "T3", min: "0.8", max: "2.0", unit: "ng/dL" },
      { name: "T4", min: "4.5", max: "11.2", unit: "µg/dL" },
      { name: "TSH", min: "0.4", max: "4.0", unit: "µIU/mL" },
    ],
  },
  {
    name: "Complete Blood Count (CBC)",
    parameters: [
      { name: "Hemoglobin (Hb)", min: "13.5", max: "17.5", unit: "g/dL" },
      { name: "Hematocrit (Hct)", min: "41", max: "53", unit: "%" },
      { name: "RBC Count", min: "4.7", max: "6.1", unit: "million/µL" },
      { name: "WBC Count", min: "4000", max: "11000", unit: "/µL" },
      { name: "Platelet Count", min: "150000", max: "450000", unit: "/µL" },
      { name: "MCV", min: "80", max: "100", unit: "fL" },
      { name: "MCH", min: "27", max: "33", unit: "pg" },
      { name: "MCHC", min: "32", max: "36", unit: "g/dL" },
    ],
  },
  {
    name: "Urine Routine / Urinalysis",
    parameters: [
      { name: "Color", min: "", max: "", unit: "" },
      { name: "Appearance", min: "", max: "", unit: "" },
      { name: "pH", min: "4.5", max: "8", unit: "" },
      { name: "Specific Gravity", min: "1.005", max: "1.030", unit: "" },
      { name: "Protein", min: "Negative", max: "Negative", unit: "" },
      { name: "Glucose", min: "Negative", max: "Negative", unit: "" },
      { name: "RBC", min: "0", max: "2", unit: "/HPF" },
      { name: "WBC", min: "0", max: "5", unit: "/HPF" },
      { name: "Epithelial Cells", min: "0", max: "5", unit: "/HPF" },
    ],
  },
  {
    name: "Cardiac Markers",
    parameters: [
      { name: "Troponin I", min: "0", max: "0.04", unit: "ng/mL" },
      { name: "CK-MB", min: "0", max: "5", unit: "ng/mL" },
      { name: "BNP", min: "0", max: "100", unit: "pg/mL" },
    ],
  },
  {
    name: "Vitamin / Mineral Tests",
    parameters: [
      { name: "Vitamin D (25 OH)", min: "30", max: "100", unit: "ng/mL" },
      { name: "Vitamin B12", min: "200", max: "900", unit: "pg/mL" },
      { name: "Iron", min: "50", max: "170", unit: "µg/dL" },
      { name: "Calcium", min: "8.5", max: "10.5", unit: "mg/dL" },
      { name: "Phosphate", min: "2.5", max: "4.5", unit: "mg/dL" },
      { name: "Magnesium", min: "1.7", max: "2.2", unit: "mg/dL" },
    ],
  },
  {
    name: "Coagulation Test",
    parameters: [
      { name: "Prothrombin Time (PT)", min: "11", max: "13.5", unit: "seconds" },
      { name: "INR", min: "0.8", max: "1.2", unit: "" },
      { name: "aPTT", min: "25", max: "35", unit: "seconds" },
      { name: "Fibrinogen", min: "200", max: "400", unit: "mg/dL" },
      { name: "D-Dimer", min: "0", max: "500", unit: "ng/mL" },
    ],
  },
  {
    name: "Hormone Test",
    parameters: [
      { name: "Serum Testosterone", min: "300", max: "1000", unit: "ng/dL" },
      { name: "Estradiol (E2)", min: "15", max: "350", unit: "pg/mL" },
      { name: "Progesterone", min: "0.1", max: "25", unit: "ng/mL" },
      { name: "Cortisol", min: "5", max: "25", unit: "µg/dL" },
      { name: "LH", min: "1.8", max: "12", unit: "mIU/mL" },
      { name: "FSH", min: "1.5", max: "20", unit: "mIU/mL" },
    ],
  },
  {
    name: "Serology Test",
    parameters: [
      { name: "HBsAg", min: "", max: "", unit: "" },
      { name: "Anti-HCV", min: "", max: "", unit: "" },
      { name: "HIV 1/2", min: "", max: "", unit: "" },
      { name: "VDRL / RPR", min: "", max: "", unit: "" },
      { name: "Dengue IgM/IgG", min: "", max: "", unit: "" },
    ],
  },
  {
    name: "Pancreatic Function Test",
    parameters: [
      { name: "Serum Amylase", min: "30", max: "110", unit: "U/L" },
      { name: "Serum Lipase", min: "23", max: "300", unit: "U/L" },
    ],
  },
  {
    name: "Iron Studies",
    parameters: [
      { name: "Serum Iron", min: "50", max: "170", unit: "µg/dL" },
      { name: "TIBC (Total Iron Binding Capacity)", min: "250", max: "450", unit: "µg/dL" },
      { name: "Transferrin Saturation", min: "20", max: "50", unit: "%" },
      { name: "Ferritin", min: "30", max: "400", unit: "ng/mL" },
    ],
  },
  {
    name: "Inflammatory Marker",
    parameters: [
      { name: "C-Reactive Protein (CRP)", min: "0", max: "5", unit: "mg/L" },
      { name: "ESR (Erythrocyte Sedimentation Rate)", min: "0", max: "20", unit: "mm/hr" },
    ],
  },
  {
    name: "Electrolyte Panel",
    parameters: [
      { name: "Sodium (Na⁺)", min: "135", max: "145", unit: "mEq/L" },
      { name: "Potassium (K⁺)", min: "3.5", max: "5", unit: "mEq/L" },
      { name: "Chloride (Cl⁻)", min: "96", max: "106", unit: "mEq/L" },
      { name: "Bicarbonate (HCO₃⁻)", min: "22", max: "29", unit: "mEq/L" },
      { name: "Calcium (Ca²⁺)", min: "8.5", max: "10.5", unit: "mg/dL" },
      { name: "Magnesium (Mg²⁺)", min: "1.7", max: "2.2", unit: "mg/dL" },
      { name: "Phosphate (PO₄³⁻)", min: "2.5", max: "4.5", unit: "mg/dL" },
    ],
  },
  {
    name: "Special Biochemistry",
    parameters: [
      { name: "Lactate Dehydrogenase (LDH)", min: "140", max: "280", unit: "U/L" },
      { name: "Creatine Kinase (CK)", min: "24", max: "170", unit: "U/L" },
      { name: "Ammonia", min: "15", max: "45", unit: "µmol/L" },
    ],
  },
];
