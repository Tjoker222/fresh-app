import { useState } from "preact/hooks";
import { Input } from "../components/Input.tsx";

interface PreviewProps {
  data: {
    location: {
      name: string;
      region: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: string;
      condition: {
        text: string;
        icon: string;
      };
      humidity: number;
      feelslike_c: number;
    };
  };
}

export default function Preview(props: PreviewProps) {
  const [weather, setWeather] = useState(props.data);
  console.log(typeof weather.location);
  if (!weather.location) {
    return <></>;
  }
  return (
    <div className="flex flex-row gap-x-[10rem] w-fit items-center justify-center">
      <div className="flex flex-col gap-y-[4rem]">
        <p>City: {weather.location.name}</p>
        <p>State: {weather.location.region}</p>
        <p>Country: {weather.location.country}</p>
      </div>
      <div className="bg-black h-[14rem] w-[0.05rem]" />
      <div className="flex flex-col gap-y-[4rem]">
        <p>Current Temp: {weather.current.temp_c}°C</p>
        <p>Humidity: {weather.current.humidity}</p>
        <p>Thermal sensation: {weather.current.feelslike_c}°C</p>
      </div>
    </div>
  );
}
