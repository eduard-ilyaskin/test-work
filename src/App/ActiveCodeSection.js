import { Container } from "../Components/Container";

import { Button } from "../ui/Button";
import { QRCodeSvgIcon } from "../ui/Icons/QR";
import { ArrowDownSvgIcon } from "../ui/Icons/ArrowDown";
import { ExportSvgIcon } from "../ui/Icons/Export";

export function ActiveCodeSection() {
  return (
    <Container as="section">
      <p className="text-center text-2xl font-semibold">Активный код для получении кредита</p>

      <div className="mt-16 flex gap-8">
        <div
          className="w-[30%] rounded-lg p-12"
          style={{
            background:
              "linear-gradient(103.91deg, rgba(218, 238, 255, 0.8) 0%, rgba(255, 199, 230, 0.072) 103.81%)",
          }}
        >
          <QRCodeSvgIcon />
        </div>
        <div
          className="flex w-[70%] items-center justify-center rounded-lg p-12"
          style={{
            background:
              "linear-gradient(103.91deg, rgba(218, 238, 255, 0.8) 0%, rgba(255, 199, 230, 0.072) 103.81%)",
          }}
        >
          <p className="text-10xl font-bold">000 385</p>
        </div>
      </div>

      <div className="mt-6 flex gap-6">
        <Button fullWidth leftIcon={<ArrowDownSvgIcon />}>
          Скачать
        </Button>
        <Button fullWidth leftIcon={<ExportSvgIcon />}>
          Поделиться
        </Button>
      </div>
    </Container>
  );
}
