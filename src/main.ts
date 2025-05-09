import { signal } from "@preact/signals-core";

const counter = signal(0);

// Read value from signal, logs: 0
console.log(counter.value);

// Write to a signal
counter.value = 1;

