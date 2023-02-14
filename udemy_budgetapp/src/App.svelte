<script>
  import Header from "./lib/components/Header.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
  import TransactionCardList from "./lib/components/TransactionCardList.svelte";
  import TransactionHeader from "./lib/components/TransactionHeader.svelte";
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
      <div>
        <!-- Transaction Card List -->
        <TransactionCardList />
      </div>
      <div>
        <!-- Transaction Table List -->
      </div>
    </div>
  </div>
</div>

<style>
</style>
