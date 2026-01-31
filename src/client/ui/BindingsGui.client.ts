import { Players } from "@rbxts/services";
import { ToggleRitualPanelKey } from "shared/inputBindings";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as ScreenGui;
const gui = playerGui.WaitForChild("BindingsGui") as ScreenGui;
const toggleHint = gui.WaitForChild("ToggleHint") as ScreenGui;
const keyFrame = toggleHint.WaitForChild("KeyFrame") as Frame;
const keyLabel = keyFrame.WaitForChild("ToggleKeyLabel") as TextLabel;

keyLabel.Text = `[${ToggleRitualPanelKey.Name}]`;
