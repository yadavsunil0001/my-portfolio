import { Card, Col, Row, Tag, Typography } from "antd";
import { about, skillGroups, education } from "../../data/resume";

const { Paragraph, Title } = Typography;

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">A bit about me and what I work with.</p>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={14}>
            {about.summary.map((para, i) => (
              <Paragraph key={i} style={{ fontSize: 16, lineHeight: 1.7 }}>
                {para}
              </Paragraph>
            ))}

            <Title level={5} style={{ marginTop: 24 }}>
              Education
            </Title>
            {education.map((e) => (
              <div key={e.degree} style={{ marginBottom: 8 }}>
                <strong>{e.degree}</strong>
                <div style={{ opacity: 0.7 }}>
                  {e.institute} · {e.period} · {e.detail}
                </div>
              </div>
            ))}
          </Col>

          <Col xs={24} md={10}>
            <Card title="Skills" variant="outlined">
              {skillGroups.map((group) => (
                <div key={group.label} style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{group.label}</div>
                  <div>
                    {group.skills.map((skill) => (
                      <Tag key={skill} style={{ marginBottom: 6 }}>
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
