import {
    getSum,
    getDivide,
    getRemainderDivide,
    getPrimeNumber
} from "../utils/operatorsUtils";

export const OperationsTypes = {
    SUM: "sum",
    DIVIDE: "divide",
    REMAINDER_DEVIDE: "remainder devide",
    PRIME_NUMBER: "prime number"
};
export const Operations = {
    [OperationsTypes.SUM]: getSum,
    [OperationsTypes.DIVIDE]: getDivide,
    [OperationsTypes.REMAINDER_DEVIDE]: getRemainderDivide,
    [OperationsTypes.PRIME_NUMBER]: getPrimeNumber
};
