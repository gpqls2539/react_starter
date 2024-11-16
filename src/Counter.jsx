import { useState } from "react";
import "./Counter.css";
// css module 방식

function Counter() {
  // react jsx rerending
  // 오직 state나 props가 변경될 때만 화면이 다시 그려진다.
  // lifecycle은 react component의 생명주기를 말한다.
  // react component는 mount, update, destroy의 세 가지 생명주기를 가진다.
  // update 과정을 거쳐야 화면이 다시 그려진다.
  // 화면을 다시 그리는 조건은 state나 props가 변경될 때이다.
  // react useState를 통해서 state를 사용할 수 있다. (가장 기본적인 방식)

  // useState
  // const [getter, setter] = useState(initialValue);
  // setter는 getter를 변경할 때 사용한다. (함수이다)
  // 1. setter를 사용할 때 setter(newValue) 형태로 사용한다.
  // 2. setter를 사용할 때 원래 있는 값을 활용하기 위해 setter((prev) => {}) 형태로 사용한다.

  const [count, setCount] = useState(0);

  console.log("rerender");

  const increase = () => {
    // setCount(count + 1);
    // console.log(count);
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button id="plus" className="counter-button" onClick={increase}>
        +1
      </button>
      {/* class 키워드는 자바스크립트에서 예약어라서 사용 불가 - className으로 사용 */}
      {/* bind: 데이터를 문법 내에 삽입하고자 할 때 쓰는 방식 mustache {} 기호를 사용한다. */}
      {/* bind 방식은 string을 제외한 모든 데이터 타입에 사용한다. */}
      {/* style을 적욜할 때는 object 객체 형태로 지정해야 한다. */}
      <span
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {count}
      </span>
      <button id="minus" className="counter-button" onClick={decrease}>
        -1
      </button>
    </div>
  );
}

export default Counter;
