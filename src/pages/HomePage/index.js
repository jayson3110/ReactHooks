import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import PostList from './components/PostList';
import TodoList from './components/TodoList';
import TodoForm from  './components/TodoForm';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFilterForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';


function HomePage() {

  const [todoList, setTodoList] = useState([
  	  {id: 1, title: "I Love Easy Frontend :3"},
  	  {id: 2, title: 'We love Easy Frontend :))'},
  	  {id: 3, title: 'They love Easy Frontend!!!'}]
  	);


  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,

  })

  useEffect(() => {
      async function fetchPostList(){
        //..

      try {

        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        console.log(responseJson);

        const {data, pagination} = responseJson;

        setPostList(data);
        setPagination(pagination);
      }catch (error){
        console('Fail to fetch post list', error.message);
      }

    }

      fetchPostList();
  }, [filters])


function handlePageChange(newPage){
  console.log("NewPage", newPage);
  setFilters({
    ...filters,
    _page: newPage,
    title_like: '',

  })
}
  


  function handleTodoClick(todo){
  	console.log(todo);
  	const index = todoList.findIndex(x => x.id === todo.id);
  	if (index < 0) {
  		return;
  	}
  	const newTodoList = [...todoList];

  	newTodoList.splice(index, 1);

  	setTodoList(newTodoList);
  }
  
  function handleTodoFormSubmit(formValues){
    console.log('Form submit:', formValues);
    //add new todo to current todo list

    const newTodo = {
      id: todoList.length + 1,

      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
      setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm,
      });
  }


  const [showClock, setShowClock] = useState(true);




  return (
    <div className="App">
      <h1> React Hooks</h1>
      


     {/* {showClock && <Clock />}*/}

     {/* <button onClick={()=> setShowClock(false)}>Hide clock</button>*/}
      

      {/*{showClock && <BetterClock />} */}


      <MagicBox />
   

       {/*<PostFiltersForm onSubmit={handleFiltersChange}/>*/}
       
      {/* <PostList posts={postList}/>*/}
      {/* <Pagination pagination={pagination}
                   onPageChange={handlePageChange} />*/}
      {/*<TodoForm  onSubmit={handleTodoFormSubmit}/>*/}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} />*/}
    </div>
  );
}

export default HomePage;
