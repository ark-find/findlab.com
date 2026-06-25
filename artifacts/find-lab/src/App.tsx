import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Members from "@/pages/Members";
import Research from "@/pages/Research";
import Publications from "@/pages/Publications";
import Facilities from "@/pages/Facilities";
import Join from "@/pages/Join";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-grow pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/about">{() => <Redirect to="/members" />}</Route>
          <Route path="/people">{() => <Redirect to="/members" />}</Route>
          <Route path="/research" component={Research} />
          <Route path="/publications" component={Publications} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/join" component={Join} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
