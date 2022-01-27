import type { VFC } from "react";
import { Qin } from "src/component/Icon";
import { ColorChanger, ThemeChanger } from "src/component/Theme";
import { styled } from "src/style";

/**
 * @package
 */
export const Header: VFC = () => {
  return (
    <Container>
      <H1>
        <Qin />
      </H1>
      <Buttons>
        <ColorChanger />
        <ThemeChanger />
      </Buttons>
    </Container>
  );
};

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
});

const H1 = styled("h1", {
  width: "100%",
  maxWidth: "192px",
  margin: 0,
});

const Buttons = styled("div", {
  display: "flex",
  gap: "0.5rem",
});
