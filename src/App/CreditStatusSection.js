import { useMemo, useState } from "react";

import { Container } from "../Components/Container";
import { Tabs, Tab } from "../ui/Tabs";

import { rows, TABLE_STATUS } from "../fixtures/table";

export function CreditStatusSection() {
  const [tab, setTab] = useState(TABLE_STATUS.ACTIVE);

  function handleChangeTab(newTab) {
    setTab(newTab);
  }

  const filteredRows = useMemo(() => {
    return rows.filter((row) => row.status === tab);
  }, [tab]);

  return (
    <Container as="section" className="mt-20">
      <p className="text-center text-2xl font-semibold">Статус кредита</p>

      <div className="mt-10 px-5">
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab fullWidth value={TABLE_STATUS.ACTIVE}>
            Активные
          </Tab>
          <Tab fullWidth value={TABLE_STATUS.REPAID}>
            Погашенные
          </Tab>
          <Tab fullWidth value={TABLE_STATUS.EXPIRED}>
            Просроченные
          </Tab>
        </Tabs>
      </div>

      <div
        className="relative mt-10 min-h-[450px] rounded-lg"
        style={{
          background:
            "linear-gradient(103.91deg, rgba(218, 238, 255, 0.8) 0%, rgba(255, 199, 230, 0.072) 103.81%)",
        }}
      >
        {filteredRows.length ? (
          <table className="w-full">
            <thead>
              <tr>
                {["№", "Банк", "Срок", "Сумма", "Остаток"].map((item) => (
                  <td key={item} className="p-6 text-center text-lg font-bold">
                    {item}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr
                  key={row.number}
                  className="odd:bg-white odd:bg-opacity-50 even:bg-[#DAEEFF] even:bg-opacity-80"
                >
                  <td className="p-6 text-center text-xl italic">{row.number}</td>
                  <td className="p-6 text-center text-xl italic">{row.bank}</td>
                  <td className="p-6 text-center text-xl italic">{row.time}</td>
                  <td className="p-6 text-center text-xl italic">{row.sum}</td>
                  <td className="p-6 text-center text-xl italic">{row.rest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyTableState />
        )}
      </div>
    </Container>
  );
}

function EmptyTableState() {
  return (
    <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
      <p className="whitespace-nowrap text-1xl text-black text-opacity-50">
        У вас нет просреченных кредитов
      </p>
    </div>
  );
}
