import { Avatar, Tag, Typography } from "antd";
import { companies } from "../../data/resume";

const { Text } = Typography;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function CompanyStrip() {
  return (
    <div style={{ marginBottom: 40 }}>
      <Text
        type="secondary"
        style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}
      >
        Experience across
      </Text>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
        {companies.map((c) => (
          <div
            key={c.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 14px",
              borderRadius: 999,
              border: c.current
                ? "1px solid rgba(99,102,241,0.5)"
                : "1px solid rgba(127,127,127,0.25)",
              background: c.current
                ? "rgba(99,102,241,0.08)"
                : "rgba(127,127,127,0.05)",
            }}
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                width={22}
                height={22}
                style={{ objectFit: "contain", borderRadius: 4 }}
              />
            ) : (
              <Avatar
                size={22}
                style={{ backgroundColor: "#6366f1", fontSize: 10 }}
              >
                {initials(c.name)}
              </Avatar>
            )}
            <span style={{ fontWeight: 500, fontSize: 14 }}>{c.name}</span>
            {c.current && (
              <Tag color="success" style={{ margin: 0, fontSize: 11, lineHeight: "18px" }}>
                Current
              </Tag>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
