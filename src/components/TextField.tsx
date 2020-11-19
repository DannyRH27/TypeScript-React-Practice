import React, {useState, useRef} from "react";
interface Person {
  first: string;
  last: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj?: {f1: string}
  person: Person
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void)
}

interface TextNode {
  text: string
}
export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  

  setCount(12)


  return (
    <div>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}