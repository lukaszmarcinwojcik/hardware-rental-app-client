import Navigation from "../layouts/Navigation";
import Page from "../layouts/Page";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <main>
        <aside>{<Navigation />}</aside>
        <section className="page">{<Page />}</section>
      </main>
    </>
  );
}

export default Dashboard;
