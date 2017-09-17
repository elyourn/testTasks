import { OperationsTypes } from "../../../../constants/Operators";
import { getFirstObjectVal } from "../../../../utils/utils";

export const MathFormStorage = {
    firstValue: null,
    secondValue: null,
    operation: getFirstObjectVal(OperationsTypes)
};