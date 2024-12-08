import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const useData = () => {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
};

export { useData };
