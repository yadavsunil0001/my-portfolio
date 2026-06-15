import { Card, Col, Row } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import { achievements } from "../../data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Awards and recognition along the way.</p>

        <Row gutter={[24, 24]}>
          {achievements.map((item) => (
            <Col xs={24} sm={12} key={item.title}>
              <Card variant="outlined" style={{ height: "100%" }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <TrophyOutlined style={{ fontSize: 22, color: "#f59e0b", marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ opacity: 0.7, marginTop: 4 }}>{item.detail}</div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
