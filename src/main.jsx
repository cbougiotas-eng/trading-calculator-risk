import React from "react";
import ReactDOM from "react-dom/client";
import TraderApp from "./App.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error: error.message };
  }
  render() {
    if (this.state.error) {
      return React.createElement("div", {
        style: {
          minHeight: "100vh", background: "#0a0c10", color: "#e8445a",
          fontFamily: "monospace", padding: 24, display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center"
        }
      },
        React.createElement("p", { style: { fontSize: 14, marginBottom: 12 } }, "⚠ App crashed:"),
        React.createElement("pre", { style: { fontSize: 11, color: "#8a909c", whiteSpace: "pre-wrap", maxWidth: 600 } }, this.state.error)
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  document.body.innerHTML = '<div style="color:red;padding:24px;font-family:monospace">ERROR: #root element not found</div>';
} else {
  ReactDOM.createRoot(rootEl).render(
    React.createElement(ErrorBoundary, null,
      React.createElement(React.StrictMode, null,
        React.createElement(TraderApp, null)
      )
    )
  );
}
