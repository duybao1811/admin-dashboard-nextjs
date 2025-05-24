import Image from "next/image";
import React from "react";

const SocialLogin = () => (
  <div className={"flex items-center w-full gap-5 mt-10"}>
    <div
      className={
        "flex items-center justify-center rounded-base bg-secondary flex-1 py-4 gap-2.5 cursor-pointer"
      }
    >
      <Image
        width={18}
        height={18}
        src={"/icons/google.svg"}
        alt={"Google"}
        className={"w-5 h-5"}
      />
      Google
    </div>
    <div
      className={
        "flex items-center justify-center rounded-base bg-secondary flex-1 py-4 gap-2.5 cursor-pointer"
      }
    >
      <Image
        width={18}
        height={18}
        src={"/icons/facebook.svg"}
        alt={"Google"}
        className={"w-5 h-5"}
      />
      Facebook
    </div>
  </div>
);

export default SocialLogin;
