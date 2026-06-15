import { Card, Col, Row, Tag, Typography } from "antd";
import { projects } from "../../data/resume";

const { Paragraph, Text } = Typography;

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work I'm proud of.</p>

        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} sm={12} key={project.title}>
              <Card
                variant="outlined"
                style={{ height: "100%" }}
                styles={{ body: { display: "flex", flexDirection: "column", height: "100%" } }}
              >
                <div style={{ fontSize: 18, fontWeight: 600 }}>{project.title}</div>
                <Text type="secondary" style={{ fontSize: 13 }}>
                  {project.org}
                </Text>
                <Paragraph style={{ marginTop: 12, flexGrow: 1, lineHeight: 1.6 }}>
                  {project.description}
                </Paragraph>
                <div>
                  {project.tech.map((t) => (
                    <Tag key={t} style={{ marginBottom: 6 }}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
