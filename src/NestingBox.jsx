import { Fragment, useState, useCallback, useMemo, memo } from "react";
import "./NestingBox.css";

const createArray = () => {
  console.log("createArray");
  return Array.from({ length: 10 }).map((_, index) => index + 1);
};

// <Fragment></Fragment> === <></>
function NestingBox() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  // useMemo: 메모리에 저장함
  // 함수의 결과값을 저장함ㄴ
  const array = useMemo(() => createArray(count), [count]);

  const handleClickIncrease = useCallback(() => {
    // ax0000 -> re-render -> ax0000(가비지컬렉션) -> dx0000
    setCount((prev) => prev + 1);
  }, []);

  const handleClickDecrease = useCallback(() => {
    // ax0001
    setCount((prev) => prev - 1);
  }, []);

  // useCallback: 함수를 메모리에 저장함
  // 조건은 의존성 배열에 있는 상태가 변경되지 않은 경우에만
  // 의존성 배열에 있는 상태가 갱신되면 함수의 참조 주소를 새로 생성함
  // setter로 활용할 때 callback 방식으로 사용해야 동작에 사이드 이펙트가 발생하지 않음
  const handleClickIncrease2 = useCallback(() => {
    // bx0000
    setCount2((prev) => prev + 1);
  }, []);

  const handleClickDecrease2 = useCallback(() => {
    // bx0001
    setCount2((prev) => prev - 1);
  }, []);

  const handleClickIncrease3 = useCallback(() => {
    // cx0000
    setCount3((prev) => prev + 1);
  }, []);

  const handleClickDecrease3 = useCallback(() => {
    // cx0001
    setCount3((prev) => prev - 1);
  }, []);

  return (
    <Fragment>
      <div style={{ padding: "20px" }}>
        <NoRerenderArea />
      </div>
      <ul>
        {array.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
      <div className="nested-root">
        <NestedBox01
          color="blue"
          onClickIncrease={handleClickIncrease}
          onClickDecrease={handleClickDecrease}
        >
          {count}
        </NestedBox01>
        <NestedBox01
          color="red"
          onClickIncrease={handleClickIncrease2}
          onClickDecrease={handleClickDecrease2}
        >
          {count2}
        </NestedBox01>
        <NestedBox01
          color="green"
          onClickIncrease={handleClickIncrease3}
          onClickDecrease={handleClickDecrease3}
        >
          {count3}
        </NestedBox01>
      </div>
    </Fragment>
  );
}

export default NestingBox;

/**
 * memo: 렌더링 최적화를 위해 컴포넌트 형태를 저장함
 * 조건은 props의 변화가 없는 경우에만 형태를 저장함(props가 갱신되면 리렌더링)
 * 항시 props가 변경되는 컴포넌트라면 memo를 적용하면 오히려 느릴 수 있다.
 */
const NoRerenderArea = memo(function NoRerenderArea() {
  return (
    <div style={{ marginBottom: "20px", border: "solid 1px #333" }}>
      no re-render area
    </div>
  );
});

// NoRerenderArea.displayName = "NoRerenderArea";

// 단방향 제어: props를 통한...
// 외부에서 공통된 규격의 component의 내용을 제어하고 싶을 때
// component는 기본적으로 children props를 가지고 있다.
// props는 항시 매개변수 영역에 객체 형태로 제공된다.
const NestedBox01 = memo(function NestedBox01({
  children, // 0 -> 0 (re-render x)
  color, // blue -> blue (re-render X)
  onClickIncrease: handleClickIncrease, // ax0000 -> bx0000
  onClickDecrease: handleClickDecrease, // ax0001 -> bx0001
}) {
  return (
    <div className="nested-box-01" style={{ backgroundColor: color }}>
      <button onClick={handleClickIncrease}>+1</button>
      <button onClick={handleClickDecrease}>-1</button>
      <NestedBox02>{children}</NestedBox02>
    </div>
  );
});

function NestedBox02({ children }) {
  return <div className="nested-box-02">{children}</div>;
}
