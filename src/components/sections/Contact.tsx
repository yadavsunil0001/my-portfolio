import { Button, Space, Typography } from "antd";
import {
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { profile } from "../../data/resume";

const { Paragraph } = Typography;

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section-title">Get in touch</h2>
        <Paragraph style={{ maxWidth: 520, margin: "0 auto 28px", opacity: 0.75 }}>
          I'm open to interesting fullstack roles and collaborations. The
          fastest way to reach me is by email.
        </Paragraph>

        <Space direction="vertical" size="small" style={{ marginBottom: 28 }}>
          <a href={`mailto:${profile.email}`}>
            <MailOutlined /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <PhoneOutlined /> {profile.phone}
          </a>
          <span style={{ opacity: 0.75 }}>
            <EnvironmentOutlined /> {profile.location}
          </span>
        </Space>

        <div>
          <Space size="middle">
            <Button
              type="primary"
              icon={<MailOutlined />}
              href={`mailto:${profile.email}`}
            >
              Email me
            </Button>
            <Button icon={<LinkedinOutlined />} href={profile.socials.linkedin} target="_blank">
              LinkedIn
            </Button>
            <Button icon={<GithubOutlined />} href={profile.socials.github} target="_blank">
              GitHub
            </Button>
          </Space>
        </div>
      </div>
    </section>
  );
}
