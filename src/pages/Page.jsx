import Alerts from "../components/Alerts";
import RightColumn from "../components/RightColumn";
import Header from "../components/shared/Header";

export default function Page() {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-4 ">
      <div className="flex flex-col sm:flex-row  gap-4 w-full h-full ">
        <div className=" flex-1 w-full h-full">
          <Header />
          <Alerts />
        </div>

        <RightColumn />
      </div>
    </div>
  );
}
