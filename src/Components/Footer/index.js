import { cva } from "class-variance-authority";

import { Container } from "../Container";
import { DarkLogoSvgIcon } from "../../ui/Icons/Logo";
import { TwitterSvgIcon } from "../../ui/Icons/Twitter";
import { GithubSvgIcon } from "../../ui/Icons/Github";
import { FacebookSvgIcon } from "../../ui/Icons/Facebook";
import { InstagramSvgIcon } from "../../ui/Icons/Instagram";
import { LinkedInSvgIcon } from "../../ui/Icons/LinkedIn";

const SOCIAL_ICONS = [
  <TwitterSvgIcon size="large" />,
  <GithubSvgIcon size="large" />,
  <FacebookSvgIcon size="large" />,
  <InstagramSvgIcon size="large" />,
  <LinkedInSvgIcon size="large" />,
];

export function Footer() {
  return (
    <footer className="w-full bg-black py-32 text-white">
      <Container variant="7xl">
        <div className="flex flex-col gap-16">
          <div className="flex justify-between">
            <FooterMenu
              bold
              label={
                <div className="mb-8">
                  <DarkLogoSvgIcon />
                </div>
              }
              items={["Public Benefit", "Corporation registered", "in Delaware.", "zypl.ai 2022"]}
            />

            <FooterMenu
              label="zypl.ai"
              items={[
                "zypl.ai Таджикистан",
                "zypl.ai Узбекистан",
                "zypl.ai Казахстан",
                "О компании",
                "Контакты",
              ]}
            />

            <FooterMenu
              label="Продукты:"
              items={["aion", "zypl academy", "Tajrupt", "Pre-education", "Cooming soon"]}
            />

            <FooterMenu
              label="Русурсы:"
              items={[
                "СМИ о нас",
                "Инвестиционный фонд",
                "Наши партнеры",
                "Подписаться на рассылки",
                "Получить консультацию",
              ]}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-lg">© 2022 All rights reserved.</div>

            <div className="flex gap-5">
              {SOCIAL_ICONS.map((icon, idx) => (
                <a key={idx} href="/">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterMenu({ items, label, bold = false }) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="text-xl font-bold">{label}</li>

      {items.map((item) => (
        <li
          key={item}
          className={cva("text-lg", {
            variants: { bold: { true: "font-bold", false: "font-light" } },
          })({ bold })}
        >
          <a href="/">{item}</a>
        </li>
      ))}
    </ul>
  );
}
