import { StepType } from "shared/types/StepType";
import { drawOnBoard } from "./drawOnBoard";
import { turnOffLight } from "./turnOffLight";

export const StepExecutors: Record<StepType, () => void> = {
	[StepType.DRAW_ON_BOARD]: drawOnBoard,
	[StepType.TURN_OFF_LIGHT]: turnOffLight,
};
