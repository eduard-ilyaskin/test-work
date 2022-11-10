import { Container } from "../Container";

import { Button } from "../../ui/Button";
import { IconButton } from "../../ui/Button/IconButton";
import { LogoSvgIcon } from "../../ui/Icons/Logo";
import { ProfileSvgIcon } from "../../ui/Icons/Profile";
import { MoonSvgIcon } from "../../ui/Icons/Moon";

export function Header() {
  return (
    <header className="py-10">
      <Container variant="7xl" className="relative flex justify-between">
        <div>
          <a href="/">
            <LogoSvgIcon />
          </a>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex list-none gap-10">
            {["Главная", "Партнеры", "О нас"].map((item) => (
              <li key={item} className="whitespace-nowrap text-xl">
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>

          <Button fullWidth leftIcon={<ProfileSvgIcon />}>
            Личный кабинет
          </Button>

          <IconButton>
            <MoonSvgIcon size="small" />
          </IconButton>
        </div>
      </Container>
    </header>
  );
}
