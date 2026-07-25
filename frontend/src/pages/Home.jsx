import LeadForm from "../components/LeadForm";

function Home() {
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>LeadDesk Mini</h1>

      <p>
        Tell us about your project and we'll contact you soon.
      </p>

      <LeadForm />

      <footer style={{ marginTop: "50px" }}>
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          Built for Digital Heroes Training Task
        </a>
      </footer>
    </div>
  );
}

export default Home;