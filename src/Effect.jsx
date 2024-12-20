import { useState, useEffect } from "react";

/**
 * useEffect
 * useEffect(callback, [dependencies])
 * dependencies: 추적할 상태를 배열로 전달
 * callback: 추적하는 상태가 변경되면 실행되는 함수
 * dependencies는 빈 배열로 할당 가능: 컴포넌트가 처음 생성될 때만 한번 실행된다.
 * return () => {}: 함수를 리턴하면 컴포넌트가 제거되는 시점을 파악 가능
 * 결론적으로는 컴포넌트의 생명주기(Life Cycle)을 관리하는데 사용한다.
 */

function Effect() {
  const [toggle, setToggle] = useState(false);
  // return [getter, setter]

  const handleToggle = () => {
    // console.log("toggle");
    setToggle((currentToggle) => !currentToggle);
  };

  useEffect(() => {
    console.log("Effect Mounted");
    return () => {
      console.log("Effect Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Toggle Updated");
  }, [toggle]);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {toggle && (
          <Box bgColor="#b85c5c" size={150} toggle={toggle}>
            Box1
          </Box>
        )}
      </div>
      <div>
        <Button onClick={handleToggle}>toggle</Button>
      </div>
    </>
  );
}

export default Effect;

function Box({ children, bgColor, size, toggle }) {
  useEffect(() => {
    console.log("Box Mounted");
    return () => {
      console.log("Box Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Box Toggle Updated");
  }, [toggle]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        // visibility: toggle ? "visible" : "hidden",
        // display: toggle ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
}

function Button({ children, onClick: handleClick }) {
  useEffect(() => {
    console.log("Button Mounted");
  }, []);

  return <button onClick={handleClick}>{children}</button>;
}
