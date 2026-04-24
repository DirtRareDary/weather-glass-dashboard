// ─── USER CONFIG ──────────────────────────────────────────────
// Replace these values with your own
const CONFIG = {
  userName: "Your Name",
  userRole: "Welcome",
};
// ──────────────────────────────────────────────────────────────

// --- APP -----------------------------------------------------------
function App() {
  // Place your own background image at: assets/bg-storm.jpg
  // Or use any full-resolution weather/landscape photo
  const bgUrl = "assets/bg-storm.jpg";

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Full-viewport storm background — NO blur, NO overlay blocking it. */}
      <img
        src={bgUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Top bar lifted to span the FULL viewport width so the action
          cluster (+, search, bell, avatar) pins to the true far-right edge. */}
      <div className="absolute top-0 left-0 right-0" style={{ zIndex: 5 }}>
        <TopBar />
      </div>

      {/* Dashboard fills the full viewport and sits directly on the storm.
          Panels are transparent glass so the image reads through them. */}
      <div className="relative flex h-screen w-screen" style={{ zIndex: 2 }}>
        <Sidebar />
        <MainPanel />
        <RightPanel />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
