import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "stat-auto",
  apiKey: process.env.TRIGGER_API_KEY!, // clé secrète Trigger.dev
});