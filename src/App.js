import logo from "./logo.svg";
import "./App.css";

// function Header(props) {
//   console.log('props', props, props.title);
//   return (
//     <header>
//       <h1>
//         <a href="/">{props.title}</a>
//       </h1>
//     </header>
//   );
// }
function Nav(props) {
    const lis = [
    ]
    for(let i =0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>
          <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(event.target.id);//event를 유발시키는 tag
            
          }}>{t.title}</a></li>)
    }
    return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    );
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props){
  return <header>
    <h1>
      <a href = "/" onClick={(event)=>{
        event.preventDefault(); //click해도 태그의 기본 동작을 방지한다.
        props.onChangeMode(); //header가 출력된다.
      }}>{props.title}</a>
    </h1>
  </header>
}

function App() {
    const topics =[
    {id : 1, title:'html', body:'html is ...'},
    {id : 2, title:'css', body:'css is .....'},
    {id : 3, title:'js', body:'js is ......'}
]

  return (
    <div>
      <Header title="REACT" onChangeMode = {()=>{
      alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title = "Welcome" body = "Hello WEB"></Article>
    </div>
  );
}

export default App;
