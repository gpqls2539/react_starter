import "./NestingBox.css";

function NestingBox() {
  return (
    <div className="nested-root">
      <NestedBox01 color="blue">1</NestedBox01>
      <NestedBox01 color="red">2</NestedBox01>
      <NestedBox01 color="green">3</NestedBox01>
      <NestedBox01 color="pink">4</NestedBox01>
    </div>
  );
}

export default NestingBox;

// 단방향 제어: props를 통한...
// 외부에서 공통된 규격의 component의 내용을 제어하고 싶을 때
// component는 기본적으로 children props를 가지고 있다.
// props는 항시 매개변수 영역에 객체 형태로 제공된다.
function NestedBox01({ children, color }) {
  return (
    <div className="nested-box-01" style={{ backgroundColor: color }}>
      <NestedBox02>{children}</NestedBox02>
    </div>
  );
}

function NestedBox02({ children }) {
  return <div className="nested-box-02">{children}</div>;
}
