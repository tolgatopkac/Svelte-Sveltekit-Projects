<script>
  import Header from "./lib/components/Header.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
</script>

<div class="p-1">
  <!-- <Header/> -->
  <Header />
  <div class="d-flex flex-column flex-sm-row">
    <!-- Side -->
    <Sidebar />
    <div class="flex-grow-1 pt-3">
      <!-- Transaction Header -->
      <div>
        <!-- Transaction Card List -->
      </div>
      <div>
        <!-- Transaction Table List -->
      </div>
    </div>
  </div>
</div>

<style>
</style>
