const provinces = ["All Provinces", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <header style={{ background: "#6b3f1d", color: "white", padding: "28px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(28px, 5vw, 44px)" }}>Sri Lankan Buddhist Temples in Canada</h1>
          <p style={{ margin: "10px 0 0", opacity: 0.9 }}>Find Sri Lankan Buddhist temples across Canada</p>
        </div>
      </header>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 220px", gap: 12, marginBottom: 20 }}>
          <input aria-label="Search temples" placeholder="Search temple, city or province..." style={{ width: "100%", padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: 10, background: "white" }} />
          <select aria-label="Filter by province" style={{ padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: 10, background: "white" }}>
            {provinces.map((province) => <option key={province}>{province}</option>)}
          </select>
        </div>

        <div style={{ minHeight: 420, borderRadius: 16, border: "1px solid #d6d3d1", background: "#e7e5e4", display: "grid", placeItems: "center", marginBottom: 24 }}>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48 }}>🗺️</div>
            <h2 style={{ margin: "10px 0 6px" }}>Canada Temple Map</h2>
            <p style={{ margin: 0, color: "#57534e" }}>Interactive temple markers will be added next.</p>
          </div>
        </div>

        <h2>Temples</h2>
        <div style={{ padding: 24, background: "white", borderRadius: 14, border: "1px solid #e5e7eb" }}>
          Temple data will be added here. Selecting a temple will open its details and Google Maps location.
        </div>
      </section>
    </main>
  );
}
