import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { Layout } from "@/components/site/Layout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

// Secondary routes are split out so the home page loads with the smallest possible bundle.
const WorkPage = lazy(() => import("@/pages/WorkPage"));
const CaseStudyPage = lazy(() => import("@/pages/CaseStudyPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

function RouteFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />;
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/work/:slug">{(params) => <CaseStudyPage slug={params.slug} />}</Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Layout>
  );
}
