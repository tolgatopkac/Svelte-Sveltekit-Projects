<script lang="ts">
  import type { Task } from "../../model";
  import TodoItem from "./TodoItem.svelte";

  function onDelete(task: Task) {
    items = items.filter((t: Task) => t.id !== task.id);
  }

  let items: Task[] = [
    {
      id: "1",
      title: "Task 1",
      completed: false,
    },
    {
      id: "2",
      title: "Task 2",
      completed: false,
    },
    {
      id: "3",
      title: "Task 3",
      completed: false,
    },
  ];
</script>

<div>
  {#each items as task (task.id)}
    <TodoItem bind:data={task} on:delete={() => onDelete(task)} />
  {/each}
</div>

<style>
  div {
    display: flex;
    gap: 15px;
    flex-direction: column;
  }
</style>
