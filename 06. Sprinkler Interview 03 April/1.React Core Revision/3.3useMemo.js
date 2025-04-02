// useMemo (Optimize Expensive Calculations)

/*Definition:
useMemo memoizes a computed value so React doesn’t recompute it unnecessarily.*/

import { useState, useMemo } from  React;

const ExpensiveComponent = ({ num }) => {
    const squaredValue = useMemo(() => {
        console.log("Calculating square...");
        return num*num;
    }, [num]);

    return <p>squared value: {squaredValue} </p>
}

// 📌 Key Points:
// ✅ Prevents unnecessary re-computation.
// ✅ Runs only if dependencies change (like num).

