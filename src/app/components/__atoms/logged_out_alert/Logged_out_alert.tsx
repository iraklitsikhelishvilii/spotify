import X_icon from "@/app/common/icons/X_icon";
import { useStates } from "@/app/common/store";

function Logged_out_alert() {
  const { MarkedClick2 } = useStates();
  return (
    <div className="z-[1] w-[322px] flex flex-col p-[16px] bg-[#4cb3ff] absolute top-[60px] right-[0px] rounded-[20px] gap-[15px]">
      <div className="flex w-[100%] justify-between">
        <h2 className="text-[16px] font-[700] text-[#000000]">
          {" You're logged out"}
        </h2>
        <button onClick={MarkedClick2}>
          <X_icon classname="w-[16px] h-[16px]" />
        </button>
      </div>
      <p className="text-[14px] text-[#000000]">
        Log in to save this album to Your Library.
      </p>
    </div>
  );
}

export default Logged_out_alert;
