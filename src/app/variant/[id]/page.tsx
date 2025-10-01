import BasicBox from "@/components/framer/BasicBox";
import DynamicVariantCustom from "@/components/framer/DynamicVariantCustom";
import DynamicVariantToggle from "@/components/framer/DynamicVariantToggle";
import Orchestration from "@/components/framer/Orchestration";
import StaggerWithCustom from "@/components/framer/StaggerCustom";
import StaticVariant from "@/components/framer/StaticVariant";
import { div } from "framer-motion/client";

interface PageProps {
  params: { id: string };
}

export default async function BasicPage({ params }: PageProps) {
  const { id } = await params;
  switch (id) {
    case "1":
      return (
        <div className="space-y-4">
          <section className="p-4 space-y-4 border">
            <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">기본형 - inline props</p>
            <BasicBox />
          </section>
          <section className="p-4 space-y-4 border">
            <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">Variant 활용 - Static</p>
            <StaticVariant />
          </section>
        </div>
      );
    case "2":
      return (
        <section className="p-4 space-y-4 border">
          <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">Dynamic Variants - 조건 분기형</p>
          <DynamicVariantToggle />
        </section>
      );
    case "3":
      return (
        <section className="p-4 space-y-4 border">
          <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">Dynamic Variants - custom 함수형</p>
          <DynamicVariantCustom />
        </section>
      );
    case "4":
      return (
        <section className="p-4 space-y-4 border">
          <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">Orchestration (stagger)</p>
          <Orchestration />
        </section>
      );
    case "5":
      return (
        <section className="p-4 space-y-4 border">
          <p className="inline-block px-2 py-1 mb-4 bg-gray-200 rounded-lg">StaggerWithCustom</p>
          <StaggerWithCustom />
        </section>
      );
    default:
      return <div></div>;
  }
}
