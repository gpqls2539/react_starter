import "./App.css";

// esm: ecmascript module
// module 방식은 대표적으로 esm, common.js가 있다.
// esm는 import, export를 사용할 수 있다.
// export로 내보낸 모듈을 import로 가져올 수 있다.
// default export, named export가 있다.

// default export
// default export는 한 파일에서 한 번만 사용할 수 있다. (export default 모듈명)
// default export는 import 할 때 이름을 바꿀 수 있다. (import 이름 from 모듈명)

// named export
// named export는 한 파일에서 여러 번 사용할 수 있다. (export 모듈명)
// default export와 named export를 같이 사용할 수 있다.
// import로 가져올 때는 {}를 사용한다. (import {모듈명, 모듈명} from 모듈명)
// named export는 import할 때 이름을 바꿀 수 없다.
// as 키워드를 사용하여 이름을 바꿀 수 있다. (import { 모듈명 as 이름 } from 모듈명)

// * (와일드카드)를 사용하여 한 번에 모든 named export를 가져올 수 있다.

// Component
// Component는 UI를 구성하는 블록을 말한다.
// Component는 반드시 jsx 파일에서 반환값으로 작성해야한다.
// return 이후로 작성되는 html 문법은 jsx 문법이다.
// 암묵적으로 Component의 첫 글라는 대문자로 작성한다.

function App() {
  // fragment
  // fragment는 여러 요소를 묶어주는 역할을 한다.
  // jsx 문법에서 반드시 상위 root 요소는 하나여야 한다.
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
