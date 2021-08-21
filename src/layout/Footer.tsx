import type { VFC } from "react";
import { styled } from "src/style";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <Container>
      <small>&copy; 2021 Qin G.K.</small>
    </Container>
  );
};

const Container = styled("footer", {
  fontSize: "2rem",
});
