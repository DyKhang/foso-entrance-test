import { Bottom } from "@/components/Bottom";
import { DataProvider } from "@/components/DataProvider";
import { Header } from "@/components/Header";
import { Middle } from "@/components/Middle";
import { Statistics } from "@/components/Statistics";

export default function Home() {
  return (
    <DataProvider>
      <>
        <Header />
        <main className="px-[48px] space-y-[24px] mt-[24px]">
          <Statistics />
          <Middle />
          <Bottom />
        </main>
      </>
    </DataProvider>
  );
}
