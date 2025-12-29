import SettingsHeader from "../../components/settings/SettingsHeader";
import CategorySection from "../../components/settings/CategorySection";
import SystemInfo from "../../components/settings/SystemInfo";

const SettingsPage = () => {
  return (
    <main className="p-6">
      <div className="space-y-6">
        <SettingsHeader />
        <CategorySection />
        <SystemInfo />
      </div>
    </main>
  );
};

export default SettingsPage;
