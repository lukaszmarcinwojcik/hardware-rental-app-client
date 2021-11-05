import Navigation from "../layouts/Navigation";
import Page from "../layouts/Page";

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
