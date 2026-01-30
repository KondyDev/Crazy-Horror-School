import { RitualCreated } from "shared/events/RitualEvents";
import RitualManager from "./ritual/RitualManager";

const ritualManager = new RitualManager();
const ritual = ritualManager.createRandomRitual();

task.wait(5);
RitualCreated.FireAllClients(ritual.steps);
