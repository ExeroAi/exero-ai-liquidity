import { monitorLaunches } from "./monitor/pumpfun-stream";

async function main() {
  console.log("Exero AI Started");

  await monitorLaunches();
}

main();
