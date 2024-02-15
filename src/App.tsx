import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;


// 3.3 Optional Props 
/*
function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor='yello' />
      <Circle bgColor="tomato" text="im here" />
    </div>
  );
}
*/


// 3.5 Forms
/*
function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    ES6 문법 
    const value = event.currentTarget.value
    const {value} = event.currentTarget
    const {currentTarget:{value}} = event
    const { currentTarget: { value } } = event;
    setValue(value);
    console.log("hello", value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange}  type='text' placeholder='username' />
        <button>Log in</button>
      </form>
    </div>
  );
}
*/
