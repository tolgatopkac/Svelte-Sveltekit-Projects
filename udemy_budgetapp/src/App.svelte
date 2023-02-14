<script>
  import Header from "./lib/components/Header.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
  import TransactionCardList from "./lib/components/TransactionCardList.svelte";
  import TransactionHeader from "./lib/components/TransactionHeader.svelte";
  import TransactionTableList from "./lib/components/TransactionTableList.svelte";

  let view = "table";
</script>

<div class="p-1">
  <!-- <Header/> -->
  <Header />
  <div class="d-flex flex-column flex-sm-row">
    <!-- Side -->
    <Sidebar {view} on:handleViewSelect={(e) => (view = e.detail)} />
    <div class="flex-grow-1 pt-3">
      <!-- Transaction Header -->
      <TransactionHeader />
      <div class:hide={view === "table"}>
        <!-- Transaction Card List -->
        <TransactionCardList />
      </div>
      <div class:hide={view === "card"} class="w-75 m-auto">
        <!-- Transaction Table List -->
        <TransactionTableList />
      </div>
    </div>
  </div>
</div>

<style>
  .hide {
    display: none;
  }
</style>
