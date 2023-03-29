import styled from "styled-components";

import { TranslateApp } from "./UI/pages";

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

function App() {
  return (
    <AppStyle>
      <TranslateApp />
    </AppStyle>
  );
}

export default App;
