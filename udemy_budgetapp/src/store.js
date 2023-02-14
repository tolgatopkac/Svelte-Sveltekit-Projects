import { writable } from "svelte/store";
import { persistStore } from "./persistStore";

const initial = [
  {
    id: 1,
    name: "maas",
    type: "Income",
    amount: "5000",
    date: "01-05-2022",
  },
  {
    id: 2,
    name: "kira",
    type: "Expense",
    amount: "5000",
    date: "01-01-2022",
  },
  {
    id: 3,
    name: "altın",
    type: "Investment",
    amount: "3000",
    date: "03-07-2022",
  },
];

export const transactionStore = persistStore("transactionValues", initial);
