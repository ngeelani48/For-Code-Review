import './style.css';
import {
  FnToDoList,
  addTask,
  editTask,
  deleteTask,
} from './modules/UI.js';
import clearCompleted from './modules/clearCompleted.js';
import markTask from './modules/marktask.js';
import { updateLocalStorage, getLocalStorage } from './modules/storage.js';

const input = document.querySelector('.input');
const List = document.querySelector('.list-ul');
const clearCompletedBtn = document.querySelector('.clear-btn');
const addTaskBtn = document.querySelector('.add-btn');

let Tasks = getLocalStorage();

FnToDoList(Tasks);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    addTask(Tasks, input.value);
    input.value = '';
    updateLocalStorage(Tasks);
    FnToDoList(Tasks);
  }
});

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(Tasks, input.value);
    input.value = '';
    updateLocalStorage(Tasks);
    FnToDoList(Tasks);
  }
});

List.addEventListener('click', (event) => {
  if (event.target.closest('.list-li-checkbox')) {
    markTask(event, Tasks);
  }
  updateLocalStorage(Tasks);
  FnToDoList(Tasks);
});

clearCompletedBtn.addEventListener('click', () => {
  Tasks = clearCompleted(Tasks);
  updateLocalStorage(Tasks);
  FnToDoList(Tasks);
});

List.addEventListener('dblclick', (event) => {
  if (event.target.closest('.list-li-text')) {
    editTask(event, Tasks);
  }
});

List.addEventListener('click', (event) => {
  if (event.target.closest('.cross-sign')) {
    deleteTask(event, Tasks);
  }
});