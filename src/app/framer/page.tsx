import BasicBox from "@/components/framer/BasicBox";
import DynamicVariantCustom from "@/components/framer/DynamicVariantCustom";
import DynamicVariantToggle from "@/components/framer/DynamicVariantToggle";
import Orchestration from "@/components/framer/Orchestration";
import StaggerWithCustom from "@/components/framer/StaggerCustom";
import StaticVariant from "@/components/framer/StaticVariant";

export default function FramerPage() {
  return (
    <main>
      <section className="bg-white p-10 space-y-4">
        <div className="border p-4">
          <p className="mb-4">기본형 - inline props</p>
          <BasicBox />
        </div>
        <div className="border p-4">
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
        </div>
      </section>
    </main>
  );
}
