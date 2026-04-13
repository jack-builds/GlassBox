export default function Sidebar({ Icon }: { Icon: any }) {
  const S = {
    sidebar: {
      width: "56px",
      background: "rgba(19,22,30,0.7)",
      backdropFilter: "blur(14px)",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      padding: "14px 0",
      gap: "8px",
    },
    logo: {
      width: "34px",
      height: "34px",
      background: "linear-gradient(135deg, #4f9cf9, #6ee7b7)",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "12px",
      boxShadow: "0 6px 18px rgba(79,156,249,0.4)",
    },
    navIcon: (active: boolean) => ({
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      background: active ? "rgba(79,156,249,0.15)" : "transparent",
      color: active ? "#4f9cf9" : "#7a7f94",
      transition: "all 0.15s ease",
      boxShadow: active
        ? "0 4px 12px rgba(79,156,249,0.4)"
        : "none"
    }),
  };

  return (
    <div style={S.sidebar}>
      <div style={S.logo}>{Icon.logo}</div>

      {[Icon.grid, Icon.clock, Icon.network, Icon.settings].map((icon, i) => (
        <div 
          key={i} 
          style={S.navIcon(i === 0)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 
              i === 0 ? "rgba(79,156,249,0.15)" : "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
        >
          {icon}
        </div>
      ))}

      <div style={{ ...S.navIcon(false), marginTop: "auto" }}>
        {Icon.settings}
      </div>
    </div>
  );
}
