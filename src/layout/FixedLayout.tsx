import type { CustomLayout } from "next";
import { styled } from "src/style";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FixedLayout: CustomLayout = (page) => {
  return (
    <Container>
      <Header />
      <Main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  marginX: "auto",
  maxWidth: "768px",
  minHeight: "100vh",
});

const Main = styled("main", {
  backgroundColor: "$blue7",
});
