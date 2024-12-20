import { useRef, useState } from "react";

/**
 * useRef
 * useRef(initialValue)
 * 컴포넌트에서 라이프사이클에 영향 받지 않는 데이터 저장 요소를 생성
 * 값이 변경되더라도 라이프사이클에 영향을 주지 않는다.
 * 할당된 변수에 current 프로퍼티를 사용해서 접근 및 제어
 * count {current} = useRef(initialValue)
 */

export default function Ref() {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const inputPasswordRef = useRef(null);

  // const [, setChange] = useState(false);
  // let num = 0;
  // const count = useRef(0);

  // const handleClickIncrement = () => {
  //   setChange((currentChange) => !currentChange);
  //   num += 1;
  //   count.current += 1;

  //   console.log("count", count.current);
  //   console.log("num", num);
  // };

  const handleChangeId = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      id: value,
    }));
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      password: value,
    }));
  };

  const handleKeyDownFocus = (e) => {
    if (e.keyCode !== 13) return;
    inputPasswordRef.current.focus();
    console.log("inputPasswordRef", inputPasswordRef.current.value);
  };

  return (
    <>
      <input
        type="text"
        value={formData.id}
        onChange={handleChangeId}
        onKeyDown={handleKeyDownFocus}
      />
      <input
        ref={inputPasswordRef}
        type="password"
        value={formData.password}
        onChange={handleChangePassword}
      />
      {/* <div>{count.current}</div>
      <CounterButton onClick={handleClickIncrement} /> */}
    </>
  );
}

function CounterButton({ onClick: handleClick }) {
  return <button onClick={handleClick}>increment</button>;
}
