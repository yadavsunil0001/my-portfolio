import { Tag, Timeline, Typography } from "antd";
import { experiences } from "../../data/resume";

const { Text } = Typography;

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">8+ years across networking, e-commerce, travel and life sciences.</p>

        <Timeline
          mode="left"
          items={experiences.map((exp) => ({
            children: (
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                  {exp.role} ·{" "}
                  <span style={{ color: "#6366f1" }}>{exp.company}</span>
                </div>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {exp.period}
                  {exp.location ? ` · ${exp.location}` : ""}
                </Text>
                <ul style={{ margin: "8px 0", paddingLeft: 18 }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: 4, lineHeight: 1.6 }}>
                      {h}
                    </li>
                  ))}
                </ul>
                <div>
                  {exp.tech.map((t) => (
                    <Tag key={t} style={{ marginBottom: 6 }}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
