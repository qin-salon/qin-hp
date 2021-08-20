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
  gap: "2rem",
  paddingY: "4rem",
  paddingX: "1rem",
  marginX: "auto",
  maxWidth: "768px",
});

const Main = styled("main", {});
