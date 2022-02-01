import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Звіт</h1>
      <h2>Загальна кількість співробітників: {employees}</h2>
      <h2>Премія отримають: {increased}</h2>
    </div>
  );
};

export default AppInfo;
