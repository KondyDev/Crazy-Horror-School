import { ReplicatedStorage } from "@rbxts/services";

const events = ReplicatedStorage.WaitForChild("Events");

export const RitualCreated = events.WaitForChild("RitualCreated") as RemoteEvent;
export const StepCompleted = events.WaitForChild("StepCompleted") as RemoteEvent;
