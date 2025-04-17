import { useEffect, useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  const sortedTodos = todos.slice().sort((a,b)=> Number(a.completed) - Number(b.completed) )
  const completed = todos.filter((t) => t.completed).length;
  const active = todos.filter((t) => !t.completed).length;
  const total = todos.length;

  const [nextId, setNextId] = useState(1); 

  const addTodo = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
  };
  setTodos([...todos, newTodo]);
  setNextId(nextId + 1); 
};


  useEffect(() => {
    if (total > 0) {
      setShowFooter(true);
    } else {
      setTimeout(() => setShowFooter(false), 500);
    }
  }, [total]);

  return (
    <>
      <Header />
      <Todo todos={sortedTodos} setTodos={setTodos} />
      <Footer
        completedTodos={completed}
        active={active}
        total={total}
        visible={total > 0}
        showFooter={showFooter}
      />
    </>
  );
}

export default App;
