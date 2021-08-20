import type { VFC } from "react";
import { Qin } from "src/component/Icon";
import { ThemeChanger } from "src/component/ThemeChanger";
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
      <div>
        <ThemeChanger />
      </div>
    </Container>
  );
};

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "0.5rem",
});

const H1 = styled("h1", {
  width: "192px",
});
