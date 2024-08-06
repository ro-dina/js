// app.js

// DOM要素の取得
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// タスクを追加する関数
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // 空の入力は無視

  // 新しいリストアイテムを作成
  const li = document.createElement('li');
  li.textContent = taskText;

  // 削除ボタンを作成してリストアイテムに追加
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    taskList.removeChild(li);
    saveTasks(); // 削除後に保存
  };
  li.appendChild(deleteButton);

  // リストに新しいタスクを追加
  taskList.appendChild(li);

  // 入力フィールドをクリア
  taskInput.value = '';

  // タスクを保存
  saveTasks();
}

// タスクを保存する関数
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push(li.textContent.replace('Delete', '').trim());
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// タスクを読み込む関数
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskText => {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      taskList.removeChild(li);
      saveTasks();
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

// イベントリスナーの追加
addTaskButton.addEventListener('click', addTask);

// ページ読み込み時にタスクを読み込む
loadTasks();
