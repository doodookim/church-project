import Kakao from "@/app/module/components/user/kakao/kakao";
import { Suspense } from "react";

export default function KakaoPage() {
  return (
    <Suspense>
      <Kakao />
    </Suspense>
  );
}
