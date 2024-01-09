import { CompoOne } from "@/components/compo-one";
import { CompoTwo } from "@/components/compo-two";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CompoOne></CompoOne>
      <CompoTwo></CompoTwo>
    </main>
  );
}
