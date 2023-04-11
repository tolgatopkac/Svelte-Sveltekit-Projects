<script>
  import TodoItem from "./TodoItem.svelte";

  function onDelete() {
    alert("delete");
  }
</script>

<div>
  <TodoItem on:delete={onDelete} />
</div>

<style>
  div {
    display: flex;
    gap: 15px;
    flex-direction: column;
  }
</style>
