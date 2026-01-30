import { ConsequenceType } from "shared/types/ConsequenceType";
import { jumpscare } from "./jumpscare";

export const ConsequenceExecutors: Record<ConsequenceType, () => void> = {
	[ConsequenceType.JUMPSCARE]: jumpscare,
};
