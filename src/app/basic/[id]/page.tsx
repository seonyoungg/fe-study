import PerspectiveBox from "@/components/basic/Perspective";
import RotateBox from "@/components/basic/Rotate";
import ScaleBox from "@/components/basic/Scale";
import SkewBox from "@/components/basic/Skew";
import TranslateBox from "@/components/basic/Translate";

interface PageProps {
  params: { id: string };
}

export default function BasicPage({ params }: PageProps) {
  const { id } = params;
  switch (id) {
    case "1":
      return (
        <section className="border p-4 space-y-4">
          <p className="mb-4">Translate</p>
          <TranslateBox />
        </section>
      );
    case "2":
      return (
        <section className="border p-4 space-y-4">
          <p className="mb-4 bg-gray-200 inline-block px-2 py-1 rounded-lg">Scale</p>
          <ScaleBox />
        </section>
      );
    case "3":
      return (
        <section className="border p-4 space-y-4">
          <p className="mb-4 bg-gray-200 inline-block px-2 py-1 rounded-lg">RotateBox</p>
          <RotateBox />
        </section>
      );
    case "4":
      return (
        <section className="border p-4 space-y-4">
          <p className="mb-4 bg-gray-200 inline-block px-2 py-1 rounded-lg">SkewBox</p>
          <SkewBox />
        </section>
      );
    case "5":
      return (
        <section className="border p-4 space-y-4">
          <p className="mb-4 bg-gray-200 inline-block px-2 py-1 rounded-lg">PerspectiveBox</p>
          <PerspectiveBox />
        </section>
      );
    default:
      return <div></div>;
  }
}
