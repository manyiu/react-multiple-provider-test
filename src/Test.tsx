import { useTest } from "./testContext";

const Test = () => {
  const { title, setTitle } = useTest();

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle(new Date().toISOString())}>
        change!
      </button>
    </div>
  );
};

export default Test;
