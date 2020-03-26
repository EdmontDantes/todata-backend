/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo) {
  return todo.text;

}

const getPriority = function(todo) {
  return todo.priority;
}
const isComplete = function(todo) {
  return todo.complete === true;
}
const notComplete = function(todo) {
  return todo.complete === false;
}

const isHighPriority = function(todo) {
  return todo.priority === 2;
}

const isLowPriority = function(todo) {
  return todo.priority === 1;
}

const highOrLowStrReturn = function(todo) {
  if (todo.priority > 1) {
    return 'High';
  } else {
    return 'Low';
  }
}

const nameAndPriority = function(todo) {
  return getTodoName(todo) + ' - ' + highOrLowStrReturn(todo);
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) {
  return todos.map(getTodoName);
}
const priorities = function(todos) {
  return todos.map(getPriority);
}

const namesAndPriorities = function(todos) {
  return todos.map(nameAndPriority);

  //This commented code doesn't work; tried to do it without helper functions first;
  // const newNamesAndPriority = [];
  // for (const todo of todos) {
  //   if (isLowPriority(todo)) {
  //     newNamesAndPriority.push(names(todos) + ' - ' + 'Low')
  //   } else {
  //     newNamesAndPriority.push(todo.text + ' - ' + 'High')
  //   }
  //   return newNamesAndPriority;
  // }

}

const justNotComplete = function(todos) {
  return todos.filter(notComplete);
}
const justComplete = function(todos) {
  return todos.filter(isComplete);
}
const priority2Only = function(todos) {
  return todos.filter(isHighPriority);
}
const priority1Only = function(todos) {
  return todos.filter(isLowPriority);
}


module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
