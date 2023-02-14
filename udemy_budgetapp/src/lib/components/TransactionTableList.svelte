<script>
  import { fly, fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  import {
    SearchStore,
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

  $: visibleTransactionLists = $SearchStore
    ? transactionList.filter((transaction) => {
        return (
          transaction.name.match(`${$SearchStore.toLowerCase()}.*`) ||
          transaction.date.match(`${$SearchStore.toLowerCase()}.*`)
        );
      })
    : transactionList;

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
    {#each visibleTransactionLists as transaction (transaction.id)}
      <tr
        in:fade
        out:scale|local={{ duration: 1000 }}
        animate:flip={{ duration: 1000 }}
      >
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
