export async function monitorLaunches() {
  console.log("Monitoring new pump.fun launches...");

  setInterval(async () => {
    const token = {
      symbol: "EXR",
      address: "xxxx"
    };

    console.log("New Token:", token);

  }, 5000);
}
