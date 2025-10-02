import { Outlet } from "react-router-dom";
import CategoryCards from "../components/organisms/CategoryCards";

export default function Home() {
  return (
    <div>
      <CategoryCards />
      <Outlet />
    </div>
  );
}
