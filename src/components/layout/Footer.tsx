import { Layout, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { profile } from "../../data/resume";

export default function Footer() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      <Space size="large" style={{ marginBottom: 12 }}>
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubOutlined style={{ fontSize: 20 }} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinOutlined style={{ fontSize: 20 }} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailOutlined style={{ fontSize: 20 }} />
        </a>
      </Space>
      <div style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} {profile.name} · Built with React & Ant Design
      </div>
    </Layout.Footer>
  );
}
