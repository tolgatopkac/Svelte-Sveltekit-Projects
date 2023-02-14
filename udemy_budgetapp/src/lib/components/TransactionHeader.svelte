<script>
  import { Progress } from "sveltestrap";
  import {
    transactionStore,
    countOfExpense,
    countOfIncome,
    countOfInvestment,
    amountOfIncome,
    amountOfExpense,
    amountOfInvestment,
  } from "../../store";
</script>

<div class="d-flex flex-column flex-md-row justify-content-around">
  <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded card-color2">
    <div class="card-text fs-3 fw-bolder text-color2">
      Income: <span class="text-danger">$ {$amountOfIncome}</span>
    </div>
    <div class="card-text fs-3 fw-bolder text-color2">
      Transaction: <span class="text-danger"
        >{$countOfExpense + $countOfIncome + $countOfInvestment}</span
      >
    </div>
    <div class="card-text fs-3 fw-bolder text-color2">
      Budget: <span class="text-danger"
        >$ {$amountOfIncome - $amountOfExpense - $amountOfInvestment}</span
      >
    </div>
  </div>

  <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded card-color2">
    <div class="card-text fs-2 fw-bolder text-color2">Investment</div>
    <div class="d-flex flex-column ms-1">
      <div class="d-flex align-items-center">
        <div class="bg-primary rounded-circle w-10-h-10 " />
        <div class="ms-2 card-text">{$countOfInvestment} transactions</div>
      </div>
      <div class="d-flex align-items-center">
        <div class="bg-warning rounded-circle w-10-h-10 " />
        <div class="ms-2 card-text">${$amountOfInvestment}</div>
      </div>
      <Progress
        value={($amountOfInvestment / $amountOfIncome) * 100}
        color="danger"
        class="mt-1 mb-1"
      />
      <span style="font-size:12px;"
        >Investment / Incomes <span class="fw-bolder"
          >{$amountOfIncome
            ? (($amountOfInvestment / $amountOfIncome) * 100).toFixed(2)
            : "0"}%</span
        ></span
      >
    </div>
  </div>

  <div class="t-card d-flex flex-column shadow p-3 mb-5 rounded card-color2">
    <div class="card-text fs-2 fw-bolder text-color2">Expenses</div>
    <div class="d-flex align-items-center">
      <div class="bg-primary rounded-circle w-10-h-10 " />
      <div class="ms-2 card-text">{$countOfExpense} transactions</div>
    </div>
    <div class="d-flex align-items-center">
      <div class="bg-warning rounded-circle w-10-h-10 " />
      <div class="ms-2 card-text">${$amountOfExpense}</div>
    </div>
    <Progress
      value={($amountOfExpense / $amountOfIncome) * 100}
      color="danger"
      class="mt-1 mb-1"
    />
    <span style="font-size:12px;"
      >Expenses / Incomes <span class="fw-bolder"
        >{$amountOfIncome
          ? (($amountOfExpense / $amountOfIncome) * 100).toFixed(2)
          : "0"}%</span
      ></span
    >
  </div>
</div>

<style>
  .card-color2 {
    background-color: #c5cbd8;
    max-width: 75%;
  }
  .text-color2 {
    color: #3b5998;
  }

  .w-10-h-10 {
    width: 10px;
    height: 10px;
  }

  .t-card {
    min-width: 25%;
  }

  @media (max-width: 768px) {
    .t-card {
      min-width: 75%;
      margin: auto;
    }
  }

  @media (max-width: 801px) {
    .card-text {
      font-size: 15px;
    }
  }
</style>
