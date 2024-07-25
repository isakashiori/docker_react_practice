import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 分割代入で下記の変数を宣言する
  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値)
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 下記で型宣言を行う
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // 入力した時のイベントハンドラが呼び出す関数
  // 入力値をsetInputValueの変数に格納する
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // リロードを回避するために下記を追加、下記がなければエンターキーを押した後に入力値がフォームから消える
    e.preventDefault();
    // 新しいTodoを作成
    // 追加ボタンを押下した後、入力値であるinputValueをnewTodoのinputValueの値としてセットする
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false
    }
    // 新しいtodoと今まで作成されたtodoをスプレッド構文で１つ１つの項目に展開してsetTodosに渡す
    setTodos([newTodo, ...todos])
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div>
        <h2>
          Todoリスト with Typescript
        </h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input type="text" onChange={(e) => handleChange(e)} className='inputText' />
          <input type="submit" value="追加" className='submitButton'/>
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                className='inputText'
                value={todo.inputValue}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
