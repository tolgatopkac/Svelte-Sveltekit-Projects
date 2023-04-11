<script lang="ts">
  import type { Task } from "../../model";
  import TodoItemActions from "./TodoItemActions.svelte";

  let data: Task = {
    id: "1",
    title: "Buy some cookies",
    completed: false,
  };
</script>

<div>
  <span>{data.title}</span>
  <TodoItemActions on:delete />
</div>

<style>
  div {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
