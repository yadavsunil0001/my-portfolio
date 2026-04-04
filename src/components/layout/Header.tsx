import { Layout } from "antd";
import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { toggleTheme } from "../../store/themeSlice";

export default function Header() {
//   const dispatch = useAppDispatch();
//   const mode = useAppSelector((state) => state.theme.mode);

  return (
    <Layout.Header style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>

      {/* <Button onClick={() => dispatch(toggleTheme())}>
        Theme: {mode}
      </Button> */}
    </Layout.Header>
  );
}