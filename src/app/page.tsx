import Link from "next/link";
import style from "./page.module.css";
import { getCurrentWeather } from "@/utils/currentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/component/revalidate";

export default async function Home() {
  const res = await getCurrentWeather();
  const time = await getTime(res.location.tz_id);

  const condition = res.current.condition.text;
  return (
    <>
      <h1>main</h1>
      <h3>{time.dateTime}</h3>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{condition}</span>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕">뉴욕</Link>
        </li>
      </ul>
      <RevalidateButton tag="time" />
    </>
  );
}
