import React, { useState } from "react";
import { Users } from "lucide-react";
import Header from "../../components/patients/Header";
import PatientCard from "../../components/patients/PatientCard";
import PatientSearch from "../../components/patients/PatientSearch";
import PatientTable from "../../components/patients/PatientTable";
import PatientModal from "../../components/patients/PatientModel";

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([
    { id: "PAT-176", name: "Absara", phone: "3234534", age: 22, gender: "Female", bloodGroup: "A+" },
    { id: "PAT-001", name: "John Williams", phone: "+1-555-1001", emergency: "+1-555-1002", age: 45, gender: "Male", bloodGroup: "O+" },
    { id: "PAT-002", name: "Maria Garcia", phone: "+1-555-1003", emergency: "+1-555-1004", age: 32, gender: "Female", bloodGroup: "A+" },
    { id: "PAT-003", name: "David Brown", phone: "+1-555-1005", emergency: "+1-555-1006", age: 28, gender: "Male", bloodGroup: "B+" },
    { id: "PAT-004", name: "Linda Martinez", phone: "+1-555-1007", emergency: "+1-555-1008", age: 52, gender: "Female", bloodGroup: "AB+" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter((p) =>
    (p.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    (p.phone || "").includes(searchTerm) ||
    (p.id?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setSelectedPatient(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleAddPatient = (newPatient) => {
    setPatients([
      ...patients,
      {
        id: `PAT-${patients.length + 1}`,
        name: newPatient.fullName,
        phone: newPatient.phone,
        emergency: newPatient.emergencyPhone,
        email: newPatient.email,
        age: newPatient.age,
        gender: newPatient.gender,
        bloodGroup: newPatient.bloodGroup,
      },
    ]);
  };

  const handleEditPatient = (updatedPatient) => {
    setPatients(
      patients.map((p) =>
        p.id === updatedPatient.id
          ? {
              ...p,
              name: updatedPatient.fullName,
              phone: updatedPatient.phone,
              emergency: updatedPatient.emergencyPhone,
              email: updatedPatient.email,
              age: updatedPatient.age,
              gender: updatedPatient.gender,
              bloodGroup: updatedPatient.bloodGroup,
            }
          : p
      )
    );
  };

  return (
    <main className="  space-y-6">
      <Header onAdd={handleAddClick} />

      <PatientCard
        title="Total Patients"
        count={patients.length}
        icon={<Users className="w-6 h-6 text-white" />}
      />

      <PatientSearch value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <div className="flex-1 min-w-0">
        <PatientTable patients={filteredPatients} onEdit={handleEditClick} />
      </div>

      {isModalOpen && (
        <PatientModal
          patient={selectedPatient}
          onCreate={handleAddPatient}
          onUpdate={handleEditPatient}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
};

export default PatientsPage;
