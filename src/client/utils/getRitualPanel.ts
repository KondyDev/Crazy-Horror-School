import { Players } from "@rbxts/services";

export function getRitualPanel(): Frame {
	const player = Players.LocalPlayer;
	const playerGui = player.WaitForChild("PlayerGui") as ScreenGui;

	const gui = playerGui.WaitForChild("RitualGui") as ScreenGui;
	const panel = gui.WaitForChild("SidePanel") as Frame;

	return panel;
}
