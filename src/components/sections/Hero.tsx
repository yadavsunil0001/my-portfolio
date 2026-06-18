import {
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Row,
  Space,
  Statistic,
  Tag,
  Typography,
} from "antd";
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { coreStack, profile, snapshot, stats } from "../../data/resume";
import CompanyStrip from "./CompanyStrip";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{ paddingTop: 104, paddingBottom: 72 }}
    >
      <div className="container">
        <CompanyStrip />

        <Row gutter={[48, 40]} align="middle">
          {/* Left — intro */}
          <Col xs={24} md={13}>
            <div style={{ marginBottom: 16 }}>
              <Badge
                status="success"
                text={
                  <span style={{ fontWeight: 600 }}>{profile.availability}</span>
                }
              />
            </div>

            <Text style={{ fontSize: 16, color: "#6366f1", fontWeight: 600 }}>
              Hi, I'm {profile.name.split(" ")[0]} 👋
            </Text>
            <Title style={{ fontSize: "clamp(32px, 5vw, 52px)", margin: "12px 0 8px" }}>
              {profile.title}
            </Title>
            <Title level={4} type="secondary" style={{ fontWeight: 400, marginTop: 0 }}>
              {profile.yearsOfExperience} years of experience · {profile.location}
            </Title>

            <Paragraph style={{ fontSize: 17, maxWidth: 560, margin: "16px 0 24px", opacity: 0.75 }}>
              {profile.tagline}
            </Paragraph>

            <Space size={[8, 8]} wrap style={{ marginBottom: 28 }}>
              {coreStack.map((skill) => (
                <Tag key={skill} color="processing" style={{ margin: 0 }}>
                  {skill}
                </Tag>
              ))}
            </Space>

            <div>
              <Space size="middle" wrap>
                <Button type="primary" size="large" icon={<MailOutlined />} href="#contact">
                  Get in touch
                </Button>
                <Button
                  size="large"
                  icon={<DownloadOutlined />}
                  href={profile.resumeUrl}
                  target="_blank"
                >
                  Download CV
                </Button>
              </Space>
            </div>

            <div style={{ marginTop: 24 }}>
              <Space size="large">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubOutlined style={{ fontSize: 24 }} />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinOutlined style={{ fontSize: 24 }} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailOutlined style={{ fontSize: 24 }} />
                </a>
              </Space>
            </div>
          </Col>

          {/* Right — at a glance card */}
          <Col xs={24} md={11}>
            <Card
              variant="outlined"
              title="At a glance"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <Row gutter={16}>
                {stats.map((stat) => (
                  <Col span={8} key={stat.label} style={{ textAlign: "center" }}>
                    <Statistic
                      value={stat.value}
                      styles={{ content: { color: "#6366f1", fontWeight: 700, fontSize: 24 } }}
                    />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {stat.label}
                    </Text>
                  </Col>
                ))}
              </Row>

              <Divider style={{ margin: "20px 0" }} />

              <Space direction="vertical" size={12} style={{ width: "100%" }}>
                {snapshot
                  .filter((item) => item.label !== "Availability")
                  .map((item) => (
                    <div key={item.label}>
                      <Text
                        type="secondary"
                        style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}
                      >
                        {item.label}
                      </Text>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                    </div>
                  ))}
              </Space>

              <Button
                type="primary"
                block
                icon={<DownloadOutlined />}
                href={profile.resumeUrl}
                target="_blank"
                style={{ marginTop: 20 }}
              >
                Download CV
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
