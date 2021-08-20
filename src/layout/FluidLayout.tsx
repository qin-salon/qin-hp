import type { CustomLayout } from "next";
import { styled } from "src/style";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const FluidLayout: CustomLayout = (page) => {
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
  minHeight: "100vh",
});

const Main = styled("main", {
  backgroundColor: "$red8",
});
