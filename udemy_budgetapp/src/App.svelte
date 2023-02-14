<script>
  import Header from "./lib/components/Header.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
  import TransactionCardList from "./lib/components/TransactionCardList.svelte";
  import TransactionHeader from "./lib/components/TransactionHeader.svelte";
  import TransactionTableList from "./lib/components/TransactionTableList.svelte";
</script>

<div class="p-1">
  <!-- <Header/> -->
  <Header />
  <div class="d-flex flex-column flex-sm-row">
    <!-- Side -->
    <Sidebar />
    <div class="flex-grow-1 pt-3">
      <!-- Transaction Header -->
      <TransactionHeader />
      <div class="w-75 m-auto">
        <!-- Transaction Card List -->
        <TransactionTableList />
      </div>
      <div>
        <!-- Transaction Table List -->
      </div>
    </div>
  </div>
</div>

<style>
</style>
