<script>
  import TransactionForm from "./TransactionForm.svelte";
</script>

<div class="d-flex flex-column mt-3 rounded p-3 bg-c5">
  <div class="d-flex flex-sm-column justify-content-around">
    <div class="mb-2 cursor-pointer">Card View</div>
    <div class="mb-2 cursor-pointer">Table View</div>
  </div>

  <div>
    <div class="mt-3">
      <input
        type="search"
        class="form-control"
        placeholder="Search for Transactions"
      />
    </div>

    <select class="form-select mt-3">
      <option value="all" selected>All</option>
      <option value="Income" selected>Incomes</option>
      <option value="Expense" selected>Expenses</option>
      <option value="Investment" selected>Investments</option>
    </select>
  </div>

  <TransactionForm />
</div>

<style>
  .cursor-pointer {
    cursor: pointer;
  }

  .bg-c5 {
    background-color: #c5cbd8;
  }
</style>
