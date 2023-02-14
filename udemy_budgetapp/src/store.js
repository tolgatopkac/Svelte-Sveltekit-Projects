import { writable, derived } from "svelte/store";
import { persistStore } from "./persistStore";

const initial = [];

export const transactionStore = persistStore("transactionValues", initial);

export const countOfIncome = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Income")
      .length
);

export const countOfExpense = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Expense")
      .length
);
export const countOfInvestment = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Investment")
      .length
);

export const amountOfIncome = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore
      .filter((transaction) => transaction.type === "Income")
      .reduce((a, item) => a + item.amount, 0)
);

export const amountOfExpense = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore
      .filter((transaction) => transaction.type === "Expense")
      .reduce((a, item) => a + item.amount, 0)
);

export const amountOfInvestment = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore
      .filter((transaction) => transaction.type === "Investment")
      .reduce((a, item) => a + item.amount, 0)
);

export const IncomeStore = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Income")
);

export const ExpenseStore = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Expense")
);

export const InvestmentStore = derived(
  transactionStore,
  // @ts-ignore
  ($transactionStore) =>
    $transactionStore.filter((transaction) => transaction.type === "Investment")
);

const initialSelectedType = "all";

export const SelectedTypeStore = persistStore("type", initialSelectedType);
