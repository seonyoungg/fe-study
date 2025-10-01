import TranslateBox from "@/components/basic/Translate";

export default function FramerPage() {
  return (
    <main>
      <section className="bg-white p-10 space-y-4">
        <div className="border p-4">
          <p className="mb-4">Translate</p>
          <TranslateBox />
        </div>
        {/* <div className="border p-4">
          <p className="mb-4">Variant 활용 - Static</p>
          <StaticVariant />
        </div>{" "}
        <div className="border p-4">
          <p className="mb-4 font-bold">Dynamic Variants - 조건 분기형</p>
          <DynamicVariantToggle />
        </div>
        <div className="border p-4">
          <p className="mb-4 font-bold">Dynamic Variants - custom 함수형</p>
          <DynamicVariantCustom />
        </div>
        <div className="border p-4">
          <p className="mb-4 font-bold">Orchestration (stagger)</p>
          <Orchestration />
        </div>{" "}
        <div className="border p-4">
          <p className="mb-4 font-bold">StaggerWithCustom</p>
          <StaggerWithCustom />
        </div> */}
      </section>
    </main>
  );
}
