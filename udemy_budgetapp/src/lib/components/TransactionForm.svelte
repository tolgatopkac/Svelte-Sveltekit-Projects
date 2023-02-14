<script>
  import { transactionStore } from "../../store";

  let tName = "";
  let tType = "";
  let tDate = "";
  let tAmount = "";
  let message = "";

  const handleSubmit = () => {
    if (tName.trim().length > 3 && tName.trim().length < 20) {
      const newTransaction = {
        id: Date.now(),
        name: tName.toLocaleLowerCase(),
        type: tType,
        amount: tAmount,
        date: tDate,
      };

      transactionStore.update((currentTransactions) => {
        return [newTransaction, ...currentTransactions];
      });
      tName = "";
      tType = "Income";
      tDate = "";
      tAmount = "";
      message = "Success";
    } else if (tName.trim().length < 4 || tName.trim().length > 20) {
      message = "The  name should be between 3 and 20 characters";
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-3 p-1">
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
      bind:value={tName}
      on:input={() => (message = "")}
    />
  </div>
  <div class="mb-2">
    <input
      type="number"
      required
      autocomplete="off"
      class="form-control"
      placeholder="Transaction Amount"
      bind:value={tAmount}
    />
  </div>
  <select bind:value={tType} class="mb-2 form-select" required>
    <option value="Income" selected>Income</option>
    <option value="Expense">Expense</option>
    <option value="Investment">Investment</option>
  </select>

  <div class="mb-2">
    <input bind:value={tDate} type="date" required class="form-control" />
  </div>

  <div class="form-text text-wrap text-danger">{message}</div>

  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
