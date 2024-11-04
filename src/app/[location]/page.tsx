import HomeButton from "@/component/homButton";
import { ForecastWeather } from "@/utils/forecastWeather";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ params, searchParams }: Props) {
  return { title: params.location, description: searchParams.name };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const weather = await ForecastWeather(params.location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      {weather.forecast.forecastday.map((day) => (
        <li key={day.date}>{day.day.condition.text}</li>
      ))}
      <HomeButton />
    </>
  );
}
