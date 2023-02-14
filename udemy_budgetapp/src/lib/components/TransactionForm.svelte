<script></script>

<form class="mt-3 p-1">
  <div class="mt-2 mb-2 text-center text-danger fw-boler fs-4">
    Add New Transaction
  </div>

  <div class="mb-2">
    <input
      type="text"
      required
      autocomplete="off"
      class="form-control"
      placeholder="Transaction Name"
    />
  </div>
  <div class="mb-2">
    <input
      type="number"
      required
      autocomplete="off"
      class="form-control"
      placeholder="Transaction Amount"
    />
  </div>
  <select class="mb-2 form-select" required>
    <option value="Income" selected>Income</option>
    <option value="Expense" selected>Expense</option>
    <option value="Investment" selected>Investment</option>
  </select>

  <div class="mb-2">
    <input type="date" required class="form-control" />
  </div>

  <div class="form-text text-wrap text-danger">Success or Error Message</div>

  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
