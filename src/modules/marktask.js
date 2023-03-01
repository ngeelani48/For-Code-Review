const markTask = (event, ListArray) => {
  const clickedCheckbox = event.target.closest('.list-li-checkbox');
  const clickedTask = clickedCheckbox.nextElementSibling;
  const taskIndex = ListArray.findIndex((task) => task.task === clickedTask.value);
  ListArray[taskIndex].completed = !ListArray[taskIndex].completed;
  return ListArray;
};
export default markTask;