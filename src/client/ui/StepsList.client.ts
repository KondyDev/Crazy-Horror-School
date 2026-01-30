import { getRitualPanel } from "client/utils/getRitualPanel";
import { RitualCreated } from "shared/events/RitualEvents";
import { StepType } from "shared/types/StepType";

const panel = getRitualPanel();

const stepsList = panel.WaitForChild("StepsList") as Frame;

function clearSteps() {
	for (const child of stepsList.GetChildren()) {
		if (child.IsA("TextLabel")) child.Destroy();
	}
}

function renderSteps(steps: StepType[]) {
	clearSteps();

	for (const step of steps) {
		const label = new Instance("TextLabel");
		label.Name = "StepLabel";
		drawLineThrough(label);

		label.Size = new UDim2(1, -12, 0, 32);
		label.BackgroundTransparency = 1;
		label.TextXAlignment = Enum.TextXAlignment.Left;
		label.TextYAlignment = Enum.TextYAlignment.Center;

		label.Font = Enum.Font.Gotham;
		label.TextSize = 20;
		label.TextColor3 = Color3.fromRGB(230, 230, 230);

		label.AutomaticSize = Enum.AutomaticSize.Y;
		label.TextWrapped = true;

		label.Text = humanizeStep(step);
		label.Parent = stepsList;
	}
}

function markStepDone(label: TextLabel) {
	const strike = label.FindFirstChild("Strike");
	if (strike && strike.IsA("Frame")) strike.Visible = true;

	label.TextTransparency = 0.4;
}

function drawLineThrough(label: TextLabel) {
	const line = new Instance("Frame");
	line.Name = "Strike";
	line.Size = new UDim2(1, 0, 0, 2);
	line.Position = new UDim2(0, 0, 0.5, 0);
	line.BackgroundColor3 = Color3.fromRGB(240, 240, 240);
	line.BorderSizePixel = 0;
	line.Visible = false;
	line.Parent = label;
}

function humanizeStep(step: StepType): string {
	const value = StepType[step];

	return value
		.lower()
		.gsub("_", " ")[0]
		.gsub("^%l", (c) => c.upper())[0];
}

RitualCreated.OnClientEvent.Connect((steps: StepType[]) => {
	renderSteps(steps);
});
