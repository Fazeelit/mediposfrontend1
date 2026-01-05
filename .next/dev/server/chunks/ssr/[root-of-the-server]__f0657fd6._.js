module.exports = [
"[project]/app/components/test/TestStatsCards.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/test-tube.js [app-ssr] (ecmascript) <export default as TestTube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CircleCheckBig>");
"use client";
;
;
;
const TestStatsCards = ({ tests })=>{
    const completed = tests.filter((t)=>t.status === "Completed").length;
    const pending = tests.filter((t)=>t.status === "Pending").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Total Tests",
                value: tests.length,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__["TestTube"], {}, void 0, false, {
                    fileName: "[project]/app/components/test/TestStatsCards.jsx",
                    lineNumber: 12,
                    columnNumber: 60
                }, void 0),
                color: "purple"
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestStatsCards.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Pending",
                value: pending,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
                    fileName: "[project]/app/components/test/TestStatsCards.jsx",
                    lineNumber: 13,
                    columnNumber: 51
                }, void 0),
                color: "amber"
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestStatsCards.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Completed",
                value: completed,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__["CircleCheckBig"], {}, void 0, false, {
                    fileName: "[project]/app/components/test/TestStatsCards.jsx",
                    lineNumber: 14,
                    columnNumber: 55
                }, void 0),
                color: "emerald"
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestStatsCards.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/test/TestStatsCards.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const colorClasses = {
    purple: {
        text: "text-purple-600",
        bg: "from-purple-500 to-purple-600"
    },
    amber: {
        text: "text-amber-600",
        bg: "from-amber-500 to-amber-600"
    },
    emerald: {
        text: "text-emerald-600",
        bg: "from-emerald-500 to-emerald-600"
    }
};
const Card = ({ title, value, icon, color })=>{
    const classes = colorClasses[color] || colorClasses["purple"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-lg bg-white/80 backdrop-blur p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestStatsCards.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-2xl font-bold mt-1 ${classes.text}`,
                            children: value
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestStatsCards.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestStatsCards.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-12 h-12 rounded-xl bg-gradient-to-br ${classes.bg} flex items-center justify-center text-white`,
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/app/components/test/TestStatsCards.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/test/TestStatsCards.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/test/TestStatsCards.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TestStatsCards;
}),
"[project]/app/components/test/TestTable.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TestsTable = ({ tests, renderActionColumn, renderPrintColumn })=>{
    const headers = [
        "Patient",
        "Age",
        "Gender",
        "Doctor",
        "Test Name",
        "Date",
        "Fee (Rs.)",
        "Status",
        "Payment Status",
        "Parameters",
        "Actions"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full min-w-[1400px] text-sm whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-50 border-b border-gray-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-left font-semibold text-slate-600",
                                    children: h
                                }, h, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            renderPrintColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left font-semibold text-slate-600",
                                children: "Print Report"
                            }, void 0, false, {
                                fileName: "[project]/app/components/test/TestTable.jsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/test/TestTable.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/test/TestTable.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: tests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: headers.length + (renderPrintColumn ? 1 : 0),
                            className: "p-4 text-center text-slate-500",
                            children: "No tests available"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestTable.jsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/test/TestTable.jsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : tests.map((test, index)=>{
                        const rowKey = test._id || `${test.name}-${test.date}-${index}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-gray-200 hover:bg-slate-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.patient || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 59,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.age || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.gender || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.doctor || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 62,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2 font-medium",
                                    children: test.name || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.date ? new Date(test.date).toLocaleDateString("en-GB") : "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2 font-semibold",
                                    children: [
                                        "Rs. ",
                                        test.fee || 0
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 69,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.status || "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.paymentStatus || "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.parameters?.length ? test.parameters.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600",
                                            children: [
                                                p.name,
                                                ": ",
                                                p.result || "-",
                                                " (",
                                                p.min || "-",
                                                "–",
                                                p.max || "-",
                                                " ",
                                                p.unit || "-",
                                                ")"
                                            ]
                                        }, `${rowKey}-param-${i}`, true, {
                                            fileName: "[project]/app/components/test/TestTable.jsx",
                                            lineNumber: 75,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))) : "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 72,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: renderActionColumn && renderActionColumn(test)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                renderPrintColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: renderPrintColumn(test)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 93,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, rowKey, true, {
                            fileName: "[project]/app/components/test/TestTable.jsx",
                            lineNumber: 55,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/test/TestTable.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/test/TestTable.jsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/test/TestTable.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TestsTable;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/app/authservice/api.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/authservice/page.jsx
__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mediposbackend.onrender.com/api";
async function apiRequest(endpoint, { method = "GET", data = null, headers = {}, includeAuth = false, formData = false, successMessage = null, timeout = 30 * 60 * 1000, params = null, onUploadProgress = null } = {}) {
    try {
        let finalHeaders = {
            ...headers
        };
        // ---------------------------------------------------------
        // Handle Content-Type logic
        // ---------------------------------------------------------
        if (formData) {
            // VERY IMPORTANT: Do NOT set Content-Type here
            // Browser will generate correct boundary
            delete finalHeaders["Content-Type"];
        } else if (data && typeof data === "object") {
            finalHeaders["Content-Type"] = "application/json";
            data = JSON.stringify(data);
        }
        // ---------------------------------------------------------
        // Authorization Header
        // ---------------------------------------------------------
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // ---------------------------------------------------------
        // Create Request URL
        // ---------------------------------------------------------
        const url = `${BASE_URL}${endpoint.startsWith("/") ? endpoint : "/" + endpoint}`;
        console.log("API Request:", {
            url,
            method,
            sendingFormData: formData,
            headers: finalHeaders,
            params,
            data
        });
        // ---------------------------------------------------------
        // Axios Config
        // ---------------------------------------------------------
        const config = {
            url,
            method: method.toUpperCase(),
            headers: finalHeaders,
            timeout,
            maxBodyLength: Infinity,
            maxContentLength: Infinity
        };
        if (params) config.params = params;
        if (typeof onUploadProgress === "function") {
            config.onUploadProgress = onUploadProgress;
        }
        // Attach body only for non-GET/HEAD
        if (![
            "GET",
            "HEAD"
        ].includes(config.method)) {
            config.data = data;
        }
        // ---------------------------------------------------------
        // Make Request
        // ---------------------------------------------------------
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(config);
        // ---------------------------------------------------------
        // Success Toast
        // ---------------------------------------------------------
        const msg = successMessage || response.data?.message;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response.data;
    } catch (error) {
        console.error("API Request Error:", error);
        const errorMessage = error.response?.data?.message || error.response?.data?.error || (error.code === "ECONNABORTED" ? "Request timed out. Please try again." : null) || (error.message?.includes("Network Error") ? "Network error — check your internet connection." : null) || error.message || "Something went wrong";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        throw new Error(errorMessage);
    }
}
}),
"[project]/app/components/test/tests.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/data/tests.js
__turbopack_context__.s([
    "testData",
    ()=>testData
]);
const testData = [
    {
        name: "Hemoglobin (Hb) Test",
        parameters: [
            {
                name: "Hemoglobin (Hb)",
                min: "13.5",
                max: "17.5",
                unit: "g/dL"
            },
            {
                name: "Hematocrit (Hct)",
                min: "41",
                max: "53",
                unit: "%"
            },
            {
                name: "RBC Count",
                min: "4.7",
                max: "6.1",
                unit: "million/µL"
            }
        ]
    },
    {
        name: "HbA1c Test",
        parameters: [
            {
                name: "HbA1c",
                min: "4",
                max: "5.6",
                unit: "%"
            }
        ]
    },
    {
        name: "Liver Function Test (LFT)",
        parameters: [
            {
                name: "Total Bilirubin",
                min: "0.1",
                max: "1.2",
                unit: "mg/dL"
            },
            {
                name: "Direct Bilirubin",
                min: "0",
                max: "0.3",
                unit: "mg/dL"
            },
            {
                name: "Indirect Bilirubin",
                min: "0.2",
                max: "0.8",
                unit: "mg/dL"
            },
            {
                name: "SGOT / AST",
                min: "8",
                max: "48",
                unit: "U/L"
            },
            {
                name: "SGPT / ALT",
                min: "7",
                max: "55",
                unit: "U/L"
            },
            {
                name: "ALP",
                min: "45",
                max: "115",
                unit: "U/L"
            },
            {
                name: "Total Protein",
                min: "6.0",
                max: "8.3",
                unit: "g/dL"
            },
            {
                name: "Albumin",
                min: "3.5",
                max: "5.0",
                unit: "g/dL"
            },
            {
                name: "Globulin",
                min: "2.0",
                max: "3.5",
                unit: "g/dL"
            },
            {
                name: "Albumin/Globulin Ratio",
                min: "1.0",
                max: "2.0",
                unit: ""
            }
        ]
    },
    {
        name: "Renal Function Test (RFT)",
        parameters: [
            {
                name: "Blood Urea",
                min: "7",
                max: "20",
                unit: "mg/dL"
            },
            {
                name: "Serum Creatinine",
                min: "0.6",
                max: "1.3",
                unit: "mg/dL"
            },
            {
                name: "Uric Acid",
                min: "3.4",
                max: "7.0",
                unit: "mg/dL"
            },
            {
                name: "Sodium (Na⁺)",
                min: "135",
                max: "145",
                unit: "mEq/L"
            },
            {
                name: "Potassium (K⁺)",
                min: "3.5",
                max: "5.0",
                unit: "mEq/L"
            },
            {
                name: "Chloride (Cl⁻)",
                min: "96",
                max: "106",
                unit: "mEq/L"
            },
            {
                name: "Bicarbonate (HCO₃⁻)",
                min: "22",
                max: "29",
                unit: "mEq/L"
            },
            {
                name: "eGFR",
                min: "90",
                max: "120",
                unit: "mL/min/1.73m²"
            }
        ]
    },
    {
        name: "Lipid Profile",
        parameters: [
            {
                name: "Total Cholesterol",
                min: "0",
                max: "200",
                unit: "mg/dL"
            },
            {
                name: "HDL Cholesterol",
                min: "40",
                max: "60",
                unit: "mg/dL"
            },
            {
                name: "LDL Cholesterol",
                min: "0",
                max: "100",
                unit: "mg/dL"
            },
            {
                name: "VLDL",
                min: "5",
                max: "40",
                unit: "mg/dL"
            },
            {
                name: "Triglycerides",
                min: "0",
                max: "150",
                unit: "mg/dL"
            }
        ]
    },
    {
        name: "Thyroid Function Test (TFT)",
        parameters: [
            {
                name: "T3",
                min: "0.8",
                max: "2.0",
                unit: "ng/dL"
            },
            {
                name: "T4",
                min: "4.5",
                max: "11.2",
                unit: "µg/dL"
            },
            {
                name: "TSH",
                min: "0.4",
                max: "4.0",
                unit: "µIU/mL"
            }
        ]
    },
    {
        name: "Complete Blood Count (CBC)",
        parameters: [
            {
                name: "Hemoglobin (Hb)",
                min: "13.5",
                max: "17.5",
                unit: "g/dL"
            },
            {
                name: "Hematocrit (Hct)",
                min: "41",
                max: "53",
                unit: "%"
            },
            {
                name: "RBC Count",
                min: "4.7",
                max: "6.1",
                unit: "million/µL"
            },
            {
                name: "WBC Count",
                min: "4000",
                max: "11000",
                unit: "/µL"
            },
            {
                name: "Platelet Count",
                min: "150000",
                max: "450000",
                unit: "/µL"
            },
            {
                name: "MCV",
                min: "80",
                max: "100",
                unit: "fL"
            },
            {
                name: "MCH",
                min: "27",
                max: "33",
                unit: "pg"
            },
            {
                name: "MCHC",
                min: "32",
                max: "36",
                unit: "g/dL"
            }
        ]
    },
    {
        name: "Urine Routine / Urinalysis",
        parameters: [
            {
                name: "Color",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "Appearance",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "pH",
                min: "4.5",
                max: "8",
                unit: ""
            },
            {
                name: "Specific Gravity",
                min: "1.005",
                max: "1.030",
                unit: ""
            },
            {
                name: "Protein",
                min: "Negative",
                max: "Negative",
                unit: ""
            },
            {
                name: "Glucose",
                min: "Negative",
                max: "Negative",
                unit: ""
            },
            {
                name: "RBC",
                min: "0",
                max: "2",
                unit: "/HPF"
            },
            {
                name: "WBC",
                min: "0",
                max: "5",
                unit: "/HPF"
            },
            {
                name: "Epithelial Cells",
                min: "0",
                max: "5",
                unit: "/HPF"
            }
        ]
    },
    {
        name: "Cardiac Markers",
        parameters: [
            {
                name: "Troponin I",
                min: "0",
                max: "0.04",
                unit: "ng/mL"
            },
            {
                name: "CK-MB",
                min: "0",
                max: "5",
                unit: "ng/mL"
            },
            {
                name: "BNP",
                min: "0",
                max: "100",
                unit: "pg/mL"
            }
        ]
    },
    {
        name: "Vitamin / Mineral Tests",
        parameters: [
            {
                name: "Vitamin D (25 OH)",
                min: "30",
                max: "100",
                unit: "ng/mL"
            },
            {
                name: "Vitamin B12",
                min: "200",
                max: "900",
                unit: "pg/mL"
            },
            {
                name: "Iron",
                min: "50",
                max: "170",
                unit: "µg/dL"
            },
            {
                name: "Calcium",
                min: "8.5",
                max: "10.5",
                unit: "mg/dL"
            },
            {
                name: "Phosphate",
                min: "2.5",
                max: "4.5",
                unit: "mg/dL"
            },
            {
                name: "Magnesium",
                min: "1.7",
                max: "2.2",
                unit: "mg/dL"
            }
        ]
    },
    {
        name: "Coagulation Test",
        parameters: [
            {
                name: "Prothrombin Time (PT)",
                min: "11",
                max: "13.5",
                unit: "seconds"
            },
            {
                name: "INR",
                min: "0.8",
                max: "1.2",
                unit: ""
            },
            {
                name: "aPTT",
                min: "25",
                max: "35",
                unit: "seconds"
            },
            {
                name: "Fibrinogen",
                min: "200",
                max: "400",
                unit: "mg/dL"
            },
            {
                name: "D-Dimer",
                min: "0",
                max: "500",
                unit: "ng/mL"
            }
        ]
    },
    {
        name: "Hormone Test",
        parameters: [
            {
                name: "Serum Testosterone",
                min: "300",
                max: "1000",
                unit: "ng/dL"
            },
            {
                name: "Estradiol (E2)",
                min: "15",
                max: "350",
                unit: "pg/mL"
            },
            {
                name: "Progesterone",
                min: "0.1",
                max: "25",
                unit: "ng/mL"
            },
            {
                name: "Cortisol",
                min: "5",
                max: "25",
                unit: "µg/dL"
            },
            {
                name: "LH",
                min: "1.8",
                max: "12",
                unit: "mIU/mL"
            },
            {
                name: "FSH",
                min: "1.5",
                max: "20",
                unit: "mIU/mL"
            }
        ]
    },
    {
        name: "Serology Test",
        parameters: [
            {
                name: "HBsAg",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "Anti-HCV",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "HIV 1/2",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "VDRL / RPR",
                min: "",
                max: "",
                unit: ""
            },
            {
                name: "Dengue IgM/IgG",
                min: "",
                max: "",
                unit: ""
            }
        ]
    },
    {
        name: "Pancreatic Function Test",
        parameters: [
            {
                name: "Serum Amylase",
                min: "30",
                max: "110",
                unit: "U/L"
            },
            {
                name: "Serum Lipase",
                min: "23",
                max: "300",
                unit: "U/L"
            }
        ]
    },
    {
        name: "Iron Studies",
        parameters: [
            {
                name: "Serum Iron",
                min: "50",
                max: "170",
                unit: "µg/dL"
            },
            {
                name: "TIBC (Total Iron Binding Capacity)",
                min: "250",
                max: "450",
                unit: "µg/dL"
            },
            {
                name: "Transferrin Saturation",
                min: "20",
                max: "50",
                unit: "%"
            },
            {
                name: "Ferritin",
                min: "30",
                max: "400",
                unit: "ng/mL"
            }
        ]
    },
    {
        name: "Inflammatory Marker",
        parameters: [
            {
                name: "C-Reactive Protein (CRP)",
                min: "0",
                max: "5",
                unit: "mg/L"
            },
            {
                name: "ESR (Erythrocyte Sedimentation Rate)",
                min: "0",
                max: "20",
                unit: "mm/hr"
            }
        ]
    },
    {
        name: "Electrolyte Panel",
        parameters: [
            {
                name: "Sodium (Na⁺)",
                min: "135",
                max: "145",
                unit: "mEq/L"
            },
            {
                name: "Potassium (K⁺)",
                min: "3.5",
                max: "5",
                unit: "mEq/L"
            },
            {
                name: "Chloride (Cl⁻)",
                min: "96",
                max: "106",
                unit: "mEq/L"
            },
            {
                name: "Bicarbonate (HCO₃⁻)",
                min: "22",
                max: "29",
                unit: "mEq/L"
            },
            {
                name: "Calcium (Ca²⁺)",
                min: "8.5",
                max: "10.5",
                unit: "mg/dL"
            },
            {
                name: "Magnesium (Mg²⁺)",
                min: "1.7",
                max: "2.2",
                unit: "mg/dL"
            },
            {
                name: "Phosphate (PO₄³⁻)",
                min: "2.5",
                max: "4.5",
                unit: "mg/dL"
            }
        ]
    },
    {
        name: "Special Biochemistry",
        parameters: [
            {
                name: "Lactate Dehydrogenase (LDH)",
                min: "140",
                max: "280",
                unit: "U/L"
            },
            {
                name: "Creatine Kinase (CK)",
                min: "24",
                max: "170",
                unit: "U/L"
            },
            {
                name: "Ammonia",
                min: "15",
                max: "45",
                unit: "µmol/L"
            }
        ]
    }
];
}),
"[project]/app/components/test/TestParametersModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$tests$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/tests.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TestParametersModal = ({ tests: propTests, setTests: propSetTests, onClose })=>{
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(propTests || []);
    const setTestsSafe = propSetTests || setTests;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        testname: "",
        parameters: [
            {
                name: "",
                min: "",
                max: "",
                unit: "",
                duration: "",
                cost: ""
            }
        ]
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableTests, setAvailableTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [successModal, setSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorModal, setErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAvailableTests(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$tests$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testData"]);
    }, []);
    const handleTestSelect = (testName)=>{
        const selectedTest = availableTests.find((t)=>t.name === testName);
        if (selectedTest) {
            setForm({
                testname: selectedTest.name,
                parameters: selectedTest.parameters.length ? selectedTest.parameters.map((p)=>({
                        name: p.name || "",
                        min: p.min || "",
                        max: p.max || "",
                        unit: p.unit || "",
                        duration: p.duration || "",
                        cost: p.cost || ""
                    })) : [
                    {
                        name: "",
                        min: "",
                        max: "",
                        unit: "",
                        duration: "",
                        cost: ""
                    }
                ]
            });
        } else {
            setForm({
                testname: "",
                parameters: [
                    {
                        name: "",
                        min: "",
                        max: "",
                        unit: "",
                        duration: "",
                        cost: ""
                    }
                ]
            });
        }
    };
    const updateParameter = (index, field, value)=>{
        const updatedParams = form.parameters.map((param, i)=>i === index ? {
                ...param,
                [field]: value
            } : param);
        setForm((prev)=>({
                ...prev,
                parameters: updatedParams
            }));
    };
    const addParameterRow = ()=>{
        setForm((prev)=>({
                ...prev,
                parameters: [
                    ...prev.parameters,
                    {
                        name: "",
                        min: "",
                        max: "",
                        unit: "",
                        duration: "",
                        cost: ""
                    }
                ]
            }));
    };
    const removeParameterRow = (index)=>{
        setForm((prev)=>({
                ...prev,
                parameters: prev.parameters.filter((_, i)=>i !== index)
            }));
    };
    const submitTest = async ()=>{
        if (!form.testname) {
            setErrorModal({
                show: true,
                message: "Please enter the Test Name"
            });
            return;
        }
        for (const param of form.parameters){
            if (!param.name) {
                setErrorModal({
                    show: true,
                    message: "Parameter name cannot be empty"
                });
                return;
            }
        }
        setLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters/createTestparameter", {
                method: "POST",
                data: {
                    name: form.testname,
                    parameters: form.parameters
                }
            });
            if (response?.success) {
                setTestsSafe([
                    ...propTests || tests,
                    response.data
                ]);
                setForm({
                    testname: "",
                    parameters: [
                        {
                            name: "",
                            min: "",
                            max: "",
                            unit: "",
                            duration: "",
                            cost: ""
                        }
                    ]
                });
                setSuccessModal(true);
            } else {
                setErrorModal({
                    show: true,
                    message: response?.message || "Failed to add test"
                });
            }
        } catch (error) {
            setErrorModal({
                show: true,
                message: error.message || "Something went wrong"
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[550px] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Add Test with Parameters"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 px-3 hover:bg-white/20 rounded-lg",
                                    disabled: loading,
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Select Test"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "input",
                                            value: form.testname,
                                            onChange: (e)=>handleTestSelect(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Select a Test --"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                availableTests.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.name,
                                                        children: t.name
                                                    }, idx, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                form.parameters.map((param, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-6 gap-3 items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Parameter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input bg-gray-100",
                                                        value: param.name,
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Min"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input",
                                                        value: param.min,
                                                        onChange: (e)=>updateParameter(index, "min", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Max"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input",
                                                        value: param.max,
                                                        onChange: (e)=>updateParameter(index, "max", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Unit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input",
                                                        value: param.unit,
                                                        onChange: (e)=>updateParameter(index, "unit", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input",
                                                        placeholder: "HH:MM",
                                                        value: param.duration,
                                                        onChange: (e)=>updateParameter(index, "duration", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "input",
                                                        value: param.cost,
                                                        onChange: (e)=>updateParameter(index, "cost", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeParameterRow(index),
                                                className: "text-red-500 col-span-6 text-left mt-1",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addParameterRow,
                                    className: "px-4 py-2 bg-gray-200 rounded-md",
                                    children: "+ Add Parameter"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 border-t px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 border rounded-md text-gray-500",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: submitTest,
                                    className: "px-5 py-2 bg-teal-600 text-white rounded-md",
                                    children: loading ? "Adding..." : "Add Test"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            successModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-green-600 text-xl font-bold mb-2",
                            children: "Success"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: "Test added successfully."
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSuccessModal(false),
                            className: "px-4 py-2 bg-teal-600 text-white rounded",
                            children: "OK"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                lineNumber: 201,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            errorModal.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-red-600 text-xl font-bold mb-2",
                            children: "Unsuccessful"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: errorModal.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setErrorModal({
                                    show: false,
                                    message: ""
                                }),
                            className: "px-4 py-2 bg-red-600 text-white rounded",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                lineNumber: 217,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .input {
          height: 40px;
          border: 2px solid #14b8a6;
          border-radius: 6px;
          padding: 0 10px;
          font-size: 14px;
          width: 100%;
        }
        .label {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 4px;
          display: block;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestParametersModal.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = TestParametersModal;
}),
"[project]/app/components/pages/MedicalTestsPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestStatsCards$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestStatsCards.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestTable.jsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/test/TestModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/test/TestUpdateModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestParametersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestParametersModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const MedicalTestsPage = ()=>{
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [parameters, setParameters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openTest, setOpenTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openUpdate, setOpenUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openParams, setOpenParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTestId, setEditTestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ================= FETCH ALL TEST RECORDS ================= */ const fetchTests = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/tests");
            const data = Array.isArray(res) ? res : res?.data || [];
            const mappedTests = data.map((t)=>{
                const totalFee = t.parameters?.reduce((sum, p)=>sum + Number(p.cost || 0), 0) || 0;
                return {
                    ...t,
                    id: t._id || `TEST-${Date.now()}-${Math.random()}`,
                    fee: totalFee
                };
            }).sort((a, b)=>new Date(b.createdAt || b.date || 0) - new Date(a.createdAt || a.date || 0));
            setTests(mappedTests);
        } catch (err) {
            console.error("Failed to fetch tests:", err);
        }
    };
    /* ================= FETCH ALL PARAMETERS ================= */ const fetchParameters = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters");
            const data = Array.isArray(res) ? res : res?.data || [];
            setParameters(data);
        } catch (err) {
            console.error("Failed to fetch parameters:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTests();
        fetchParameters();
    }, []);
    /* ================= HANDLE SAVE TEST ================= */ const handleSaveTest = (data)=>{
        let totalFee = 0;
        data.parameters?.forEach((p)=>{
            totalFee += Number(p.cost || 0);
        });
        const newTest = {
            ...data,
            fee: totalFee,
            id: data.id || `TEST-${Date.now()}`
        };
        setTests((prev)=>{
            const idx = prev.findIndex((t)=>t.id === newTest.id);
            if (idx !== -1) prev[idx] = newTest;
            else prev.unshift(newTest);
            return [
                ...prev
            ];
        });
        setOpenTest(false);
        setOpenUpdate(false);
        setEditTestId(null);
    };
    /* ================= DELETE TEST ================= */ const handleDeleteTest = (id)=>{
        if (!confirm("Are you sure you want to delete this test?")) return;
        setTests((prev)=>prev.filter((t)=>t.id !== id));
    };
    /* ================= CALCULATE GROSS TOTAL ================= */ const grossTotalFee = tests.reduce((sum, t)=>sum + Number(t.fee || 0), 0);
    /* ================= PRINT TEST REPORT ================= */ const handlePrintReport = (test)=>{
        const printWindow = window.open("", "", "width=800,height=600");
        printWindow.document.write(`<h2 style="text-align:center;">Test Report</h2>`);
        printWindow.document.close();
        printWindow.print();
    };
    /* ================= FIND EDIT TEST DATA ================= */ const editTestData = tests.find((t)=>t.id === editTestId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-slate-900",
                                children: "Medical Tests"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600",
                                children: "Manage diagnostic tests & reports"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenTest(true),
                                className: "flex items-center gap-2 h-9 px-4 rounded-md text-sm bg-gradient-to-r from-teal-500 to-teal-600 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "New Test"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenParams(true),
                                className: "h-9 px-4 rounded-md border border-gray-300 text-teal-700 bg-white hover:bg-slate-100",
                                children: "+ Add Parameters"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestStatsCards$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                tests: tests
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                tests: tests,
                renderActionColumn: (test)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                title: "Edit",
                                className: "p-1 bg-blue-600 text-white rounded",
                                onClick: ()=>{
                                    setEditTestId(test.id);
                                    setOpenUpdate(true);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                title: "Delete",
                                className: "p-1 bg-red-600 text-white rounded",
                                onClick: ()=>handleDeleteTest(test.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, void 0),
                renderPrintColumn: (test)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Print",
                            className: "p-1 bg-teal-600 text-white rounded",
                            onClick: ()=>handlePrintReport(test),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-right font-bold text-lg",
                children: [
                    "Gross Total Fee: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-teal-600",
                        children: grossTotalFee
                    }, void 0, false, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 181,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestModal, {
                parameters: parameters,
                onSave: handleSaveTest,
                onClose: ()=>setOpenTest(false)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            openUpdate && editTestData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestUpdateModal, {
                editData: editTestData,
                parameters: parameters,
                onSave: handleSaveTest,
                onClose: ()=>{
                    setOpenUpdate(false);
                    setEditTestId(null);
                }
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            openParams && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestParametersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                parameters: parameters,
                setParameters: setParameters,
                onClose: ()=>setOpenParams(false)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MedicalTestsPage;
}),
"[project]/app/tests/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>Test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$MedicalTestsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pages/MedicalTestsPage.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Test() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$MedicalTestsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/tests/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f0657fd6._.js.map