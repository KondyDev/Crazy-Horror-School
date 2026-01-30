import { ContextActionService, TweenService } from "@rbxts/services";
import { getRitualPanel } from "client/utils/getRitualPanel";
import { ToggleRitualPanelKey } from "shared/inputBindings";

const SHOWN_POS = new UDim2(1, 0, 0.1, 0);
const HIDDEN_POS = new UDim2(1.25, 0, 0.1, 0);

const panel = getRitualPanel();

let open: boolean = true;
let tween: Tween | undefined;

const tweenInfo = new TweenInfo(0.25, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);

// toggle panel (crazy shit)
function toggleRitualPanel() {
	open = !open;

	if (tween) tween.Cancel();

	tween = TweenService.Create(panel, tweenInfo, {
		Position: open ? SHOWN_POS : HIDDEN_POS,
	});

	tween.Play();
}

// wyłącza TAB domyslny i ble ble ble dziala jak ja chce
ContextActionService.BindAction(
	"ToggleRitualAction",
	(_, state) => {
		if (state === Enum.UserInputState.Begin) toggleRitualPanel();
		return Enum.ContextActionResult.Sink;
	},
	false,
	ToggleRitualPanelKey,
);
