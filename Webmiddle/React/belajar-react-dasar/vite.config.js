import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        todolist: "todolist.html",
        table: "table.html",
        event: "event.html",
        contact: "contact.html",
        task: "task.html",
        counter: "counter.html",
      },
    },
  },
});
