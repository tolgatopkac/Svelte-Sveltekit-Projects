<script>
  import {
    transactionStore,
    SelectedTypeStore,
    IncomeStore,
    ExpenseStore,
    InvestmentStore,
  } from "../../store";

  $: transactionList = $transactionStore;

  $: if ($SelectedTypeStore === "all") {
    transactionList = $transactionStore;
  } else if ($SelectedTypeStore === "Income") {
    transactionList = $IncomeStore;
  } else if ($SelectedTypeStore === "Expense") {
    transactionList = $ExpenseStore;
  } else if ($SelectedTypeStore === "Investment") {
    transactionList = $InvestmentStore;
  }

  const handleDelete = (id) => {
    $transactionStore = $transactionStore.filter(
      (transaction) => transaction.id != id
    );
  };
</script>

<table class="table table-hover table-bordered bg-c5">
  <thead>
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Date</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {#each transactionList as transaction (transaction.id)}
      <tr>
        <td>{transaction.name}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>{transaction.date}</td>
        <td class="text-center"
          ><button
            on:click={() => handleDelete(transaction.id)}
            class="delete-btn">X</button
          ></td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .bg-c5 {
    background-color: #c5cbd8;
  }

  .delete-btn {
    border: none;
    background: none;
    color: rgb(117, 115, 115);
  }

  .delete-btn:hover {
    color: #fff;
  }
</style>
