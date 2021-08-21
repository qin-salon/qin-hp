import type { CustomNextPage } from "next";
import { FixedLayout } from "src/layout";
import { styled } from "src/style";

const Root: CustomNextPage = () => {
  return (
    <Container>
      <div>
        <H2>ABOUT</H2>
        <Paragraph>
          私達はテクノロジーを愛するコミュニティです。最高のプロダクトを創るために研鑽しています。
          これが後に世界最大のテクノロジー集団になることは、私達以外まだ誰も知らない。
        </Paragraph>
      </div>

      <div>
        <H2>PRODUCT</H2>
        <Paragraph>Coming Soon...</Paragraph>
      </div>

      <div>
        <H2>COMPANY</H2>
        <Details>
          <H3>合同会社Qin</H3>
          <dl>
            <dt>事業</dt>
            <dd>インターネットビジネスの企画・開発・運営</dd>
          </dl>
          <dl>
            <dt>設立</dt>
            <dd>2021年7月</dd>
          </dl>
          <dl>
            <dt>代表</dt>
            <dd>島袋 光音</dd>
          </dl>
          {/* <dl>
            <dt>住所</dt>
            <dd>東京都豊島区南大塚2丁目11番10号ミモザビル3F</dd>
          </dl> */}
        </Details>
      </div>

      <div>
        <H2>CONTACT</H2>
        <Paragraph>
          <Anchor href="https://twitter.com/shimabu_it" target="_blank" rel="noopener noreferrer">
            代表のTwitter
          </Anchor>{" "}
          宛にDMをお送りください
        </Paragraph>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  display: "grid",
  gap: "2rem",
});

const H2 = styled("h2", {
  fontSize: "4rem",
});

const H3 = styled("h3", {
  fontSize: "3rem",
});

const Paragraph = styled("p", {
  fontSize: "2rem",
});

const Details = styled("div", {
  fontSize: "2rem",
  display: "grid",
  gap: "1rem",
});

const Anchor = styled("a", {
  textDecoration: "underline",
});

Root.getLayout = FixedLayout;

export default Root;
