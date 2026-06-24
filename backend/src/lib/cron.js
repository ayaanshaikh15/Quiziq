import { CronJob } from "cron";
import http from "node:http";
import https from "node:https";

const job = new CronJob("*/14 * * * *", () => {
  const base = process.env.FRONTEND_URL;

  if (!base) return;

  const url = new URL("/", base).href;
  const client = url.startsWith("https") ? https : http;

  client
    .get(url, (res) => {
      console.log(`Pinged ${url} - ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error("Cron Error:", err.message);
    });
});

export default job;