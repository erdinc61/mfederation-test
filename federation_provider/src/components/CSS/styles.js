const styles = `
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #e7f1ff;
  color: #002f6c;
}

.App {

  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #007bff;
  margin-bottom: 40px;
}

p {
  color: #333;
}

.custom-card {
  margin-bottom: 20px;
}

.custom-input,
.custom-checkbox,
.custom-button,
.custom-tooltip,
.custom-modal {
  margin-bottom: 20px;
}

.custom-tooltip span {
  color: #007bff;
  cursor: pointer;
}
`;

const applyStyles = () => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
};

export default applyStyles;
