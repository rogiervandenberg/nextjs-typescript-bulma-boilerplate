import Layout from "../components/layout";
import Counter from "../components/counter";

const Index = () => (
  <Layout home>
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello World from <a href="https://nextjs.org/">Next.js</a> and{" "}
          <a href="https://bulma.io/">Bulma</a>!
        </h1>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Counter></Counter>
      </div>
    </section>
  </Layout>
);

export default Index;