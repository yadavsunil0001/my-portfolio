import { Button, Drawer, Grid, Layout, Space } from "antd";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleTheme } from "../../store/themeSlice";
import { profile } from "../../data/resume";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const screens = Grid.useBreakpoint();
  const [open, setOpen] = useState(false);

  const links = navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      style={{ color: "inherit", fontWeight: 500 }}
    >
      {item.label}
    </a>
  ));

  const themeButton = (
    <Button
      type="text"
      aria-label="Toggle theme"
      icon={mode === "dark" ? <SunOutlined /> : <MoonOutlined />}
      onClick={() => dispatch(toggleTheme())}
    />
  );

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
        padding: 0,
        height: 64,
        display: "flex",
        alignItems: "center",
        backdropFilter: "blur(8px)",
        background:
          mode === "dark" ? "rgba(20,20,24,0.7)" : "rgba(255,255,255,0.7)",
        borderBottom: `1px solid ${mode === "dark" ? "#2a2a30" : "#eee"}`,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <a href="#home" style={{ fontWeight: 700, fontSize: 18, color: "inherit" }}>
          {profile.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          <span style={{ color: "#6366f1" }}>.</span>
        </a>

        {screens.md ? (
          <Space size="large" align="center">
            {links}
            {themeButton}
          </Space>
        ) : (
          <Space>
            {themeButton}
            <Button
              type="text"
              aria-label="Open menu"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
            />
          </Space>
        )}
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={240}
      >
        <Space direction="vertical" size="large">
          {links}
        </Space>
      </Drawer>
    </Layout.Header>
  );
}
