import { Button, Space, Typography } from "antd";
import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { profile } from "../../data/resume";

const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: 120 }}>
      <div className="container" style={{ textAlign: "center" }}>
        <Text style={{ fontSize: 16, color: "#6366f1", fontWeight: 600 }}>
          Hi, I'm {profile.name.split(" ")[0]} 👋
        </Text>
        <Title style={{ fontSize: "clamp(36px, 6vw, 60px)", margin: "16px 0 8px" }}>
          {profile.title}
        </Title>
        <Title level={3} type="secondary" style={{ fontWeight: 400, marginTop: 0 }}>
          {profile.yearsOfExperience} years of experience · {profile.location}
        </Title>
        <Paragraph
          style={{
            fontSize: 18,
            maxWidth: 640,
            margin: "24px auto 32px",
            opacity: 0.75,
          }}
        >
          {profile.tagline}
        </Paragraph>

        <Space size="middle" wrap style={{ justifyContent: "center" }}>
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

        <div style={{ marginTop: 28 }}>
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
      </div>
    </section>
  );
}
