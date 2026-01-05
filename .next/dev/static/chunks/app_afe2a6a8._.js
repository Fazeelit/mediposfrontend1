(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/test/TestStatsCards.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/test-tube.js [app-client] (ecmascript) <export default as TestTube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CircleCheckBig>");
"use client";
;
;
;
const TestStatsCards = ({ tests })=>{
    const completed = tests.filter((t)=>t.status === "Completed").length;
    const pending = tests.filter((t)=>t.status === "Pending").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Total Tests",
                value: tests.length,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__["TestTube"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Pending",
                value: pending,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Completed",
                value: completed,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleCheckBig$3e$__["CircleCheckBig"], {}, void 0, false, {
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
_c = TestStatsCards;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-lg bg-white/80 backdrop-blur p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestStatsCards.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c1 = Card;
const __TURBOPACK__default__export__ = TestStatsCards;
var _c, _c1;
__turbopack_context__.k.register(_c, "TestStatsCards");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/test/TestTable.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
        "Actions",
        "Print Report"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full min-w-[1400px] text-sm whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-50 border-b border-gray-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "p-3 text-left font-semibold text-slate-600",
                                    children: h
                                }, h, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            renderPrintColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left font-semibold text-slate-600",
                                children: "Print Report"
                            }, void 0, false, {
                                fileName: "[project]/app/components/test/TestTable.jsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/test/TestTable.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/test/TestTable.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: tests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: headers.length + (renderPrintColumn ? 1 : 0),
                            className: "p-4 text-center text-slate-500",
                            children: "No tests available"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestTable.jsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/test/TestTable.jsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : tests.map((test, index)=>{
                        const rowKey = test._id || `${test.name}-${test.date}-${index}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b border-gray-200 hover:bg-slate-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.patient || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 60,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.age || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 61,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.gender || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 62,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.doctor || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2 font-medium",
                                    children: test.name || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 64,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.date ? new Date(test.date).toLocaleDateString("en-GB") : "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 65,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2 font-semibold",
                                    children: [
                                        "Rs. ",
                                        test.fee || 0
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.status || "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 71,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.paymentStatus || "Pending"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 72,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: test.parameters?.length ? test.parameters.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 76,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))) : "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 73,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: renderActionColumn && renderActionColumn(test)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                renderPrintColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-2",
                                    children: renderPrintColumn(test)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestTable.jsx",
                                    lineNumber: 94,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, rowKey, true, {
                            fileName: "[project]/app/components/test/TestTable.jsx",
                            lineNumber: 56,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/test/TestTable.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/test/TestTable.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/test/TestTable.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TestsTable;
const __TURBOPACK__default__export__ = TestsTable;
var _c;
__turbopack_context__.k.register(_c, "TestsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/authservice/api.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/authservice/page.jsx
__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "https://mediposbackend.onrender.com/api";
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
        if (includeAuth && ("TURBOPACK compile-time value", "object") !== "undefined") {
            const token = localStorage.getItem("authToken");
            if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
        }
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
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        // ---------------------------------------------------------
        // Success Toast
        // ---------------------------------------------------------
        const msg = successMessage || response.data?.message;
        if (msg && ("TURBOPACK compile-time value", "object") !== "undefined") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(msg);
        }
        return response.data;
    } catch (error) {
        console.error("API Request Error:", error);
        const errorMessage = error.response?.data?.message || error.response?.data?.error || (error.code === "ECONNABORTED" ? "Request timed out. Please try again." : null) || (error.message?.includes("Network Error") ? "Network error — check your internet connection." : null) || error.message || "Something went wrong";
        if ("TURBOPACK compile-time truthy", 1) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage);
        throw new Error(errorMessage);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/test/TestModel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TestModal = ({ onClose, editData })=>{
    _s();
    const [patients, setPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patient: "",
        age: "",
        gender: "",
        doctor: "",
        name: "",
        date: "",
        mobile: "",
        status: "Pending",
        paymentStatus: "Pending",
        parameters: [],
        fee: 0,
        discount: 0,
        totalfee: 0
    });
    const [successModal, setSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorModal, setErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ""
    });
    /* ================= FETCH DATA ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestModal.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/patients").then({
                "TestModal.useEffect": (res)=>{
                    if (res?.success) setPatients(res.data);
                }
            }["TestModal.useEffect"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters").then({
                "TestModal.useEffect": (res)=>{
                    if (res?.success) setTests(res.data);
                }
            }["TestModal.useEffect"]);
        }
    }["TestModal.useEffect"], []);
    /* ================= LOAD EDIT DATA ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestModal.useEffect": ()=>{
            if (editData) setForm(editData);
        }
    }["TestModal.useEffect"], [
        editData
    ]);
    /* ================= HANDLE TEST SELECTION ================= */ const handleTestChange = (name)=>{
        const selectedTest = tests.find((t)=>t.name === name);
        if (!selectedTest) return;
        // prevent duplicate test
        const alreadyAdded = form.parameters.some((p)=>p.testName === name);
        if (alreadyAdded) return;
        const newParams = selectedTest.parameters?.map((p)=>({
                testName: name,
                name: p.name || "",
                min: p.min || "",
                max: p.max || "",
                unit: p.unit || "",
                cost: p.cost || 0,
                duration: p.duration || "",
                result: ""
            })) || [];
        const updatedParams = [
            ...form.parameters,
            ...newParams
        ];
        const totalFee = updatedParams.reduce((sum, p)=>sum + Number(p.cost || 0), 0);
        setForm((prev)=>({
                ...prev,
                name,
                parameters: updatedParams,
                fee: totalFee,
                totalfee: Math.max(totalFee - (prev.discount || 0), 0)
            }));
    };
    /* ================= HANDLE FORM CHANGES ================= */ const handleChange = (key, value)=>{
        if (key === "mobile") {
            const digits = value.replace(/\D/g, "").slice(0, 11);
            setForm((prev)=>({
                    ...prev,
                    mobile: digits
                }));
        } else {
            setForm((prev)=>({
                    ...prev,
                    [key]: value
                }));
        }
    };
    const handleParamChange = (index, key, value)=>{
        const updated = [
            ...form.parameters
        ];
        updated[index][key] = value;
        const totalFee = updated.reduce((sum, p)=>sum + Number(p.cost || 0), 0);
        setForm((prev)=>({
                ...prev,
                parameters: updated,
                fee: totalFee,
                totalfee: Math.max(totalFee - (prev.discount || 0), 0)
            }));
    };
    const handleDiscountChange = (value)=>{
        const discount = Number(value) || 0;
        setForm((prev)=>({
                ...prev,
                discount,
                totalfee: Math.max(prev.fee - discount, 0)
            }));
    };
    const addParameter = ()=>{
        setForm((prev)=>({
                ...prev,
                parameters: [
                    ...prev.parameters,
                    {
                        name: "",
                        min: "",
                        max: "",
                        unit: "",
                        cost: 0,
                        duration: "",
                        result: ""
                    }
                ]
            }));
    };
    const removeParameter = (index)=>{
        const updated = form.parameters.filter((_, i)=>i !== index);
        const totalFee = updated.reduce((sum, p)=>sum + Number(p.cost || 0), 0);
        setForm((prev)=>({
                ...prev,
                parameters: updated,
                fee: totalFee,
                totalfee: Math.max(totalFee - (prev.discount || 0), 0)
            }));
    };
    /* ================= HANDLE SUBMIT ================= */ const handleSubmit = async ()=>{
        if (form.mobile.length !== 11) {
            setErrorModal({
                show: true,
                message: "Mobile number must be 11 digits."
            });
            return;
        }
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/tests/createTest", {
                method: "POST",
                data: {
                    ...form,
                    fee: Number(form.fee),
                    discount: Number(form.discount),
                    totalfee: Number(form.totalfee)
                }
            });
            if (res?.success) {
                setSuccessModal(true);
            } else {
                setErrorModal({
                    show: true,
                    message: res.message || "Failed to save test."
                });
            }
        } catch (err) {
            setErrorModal({
                show: true,
                message: err.message || "Failed to save test."
            });
        }
    };
    /* ================= GROUP PARAMETERS BY TEST ================= */ const groupedTests = form.parameters.reduce((acc, param)=>{
        if (!acc[param.testName]) acc[param.testName] = [];
        acc[param.testName].push(param);
        return acc;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-teal-600 text-white p-6 flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold",
                                    children: editData ? "Update Lab Test Report" : "New Lab Test Report"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "p-6 space-y-8",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                handleSubmit();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-4",
                                            children: "Patient Information"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Patient Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "input",
                                                            value: form.patient,
                                                            onChange: (e)=>handleChange("patient", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Patient"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                patients.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: p.name,
                                                                        children: p.name
                                                                    }, p._id, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Age"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 212,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: form.age,
                                                            onChange: (e)=>handleChange("age", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Gender"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "input",
                                                            value: form.gender,
                                                            onChange: (e)=>handleChange("gender", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Male"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Female"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Doctor Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: form.doctor,
                                                            onChange: (e)=>handleChange("doctor", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 228,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            className: "input",
                                                            value: form.date,
                                                            onChange: (e)=>handleChange("date", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "label",
                                                            children: "Mobile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 237,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            placeholder: "03xx-xxxxxxx",
                                                            value: form.mobile,
                                                            onChange: (e)=>handleChange("mobile", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 238,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-4",
                                            children: "Test Information"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-1/3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Test Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "input",
                                                    value: form.name,
                                                    onChange: (e)=>handleTestChange(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Test"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 258,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        tests.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.name,
                                                                children: t.name
                                                            }, t._id, false, {
                                                                fileName: "[project]/app/components/test/TestModel.jsx",
                                                                lineNumber: 260,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "space-y-6",
                                    children: Object.entries(groupedTests).map(([testName, params])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-teal-600 mb-3",
                                                    children: testName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full border text-sm text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            className: "bg-gray-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Parameter"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Min"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Max"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Unit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 277,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Cost"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Result"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border p-2",
                                                                        children: "Action"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/test/TestModel.jsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/test/TestModel.jsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: params.map((p, i)=>{
                                                                // find the index in the original form.parameters
                                                                const paramIndex = form.parameters.findIndex((fp)=>fp.testName === p.testName && fp.name === p.name);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: p.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: p.min
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: p.max
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: p.unit
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 294,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: p.cost
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 295,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: "table-input",
                                                                                value: p.result,
                                                                                onChange: (e)=>handleParamChange(paramIndex, "result", e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/test/TestModel.jsx",
                                                                                lineNumber: 297,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border p-1 text-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 18,
                                                                                className: "text-red-500 cursor-pointer mx-auto",
                                                                                onClick: ()=>removeParameter(paramIndex)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/test/TestModel.jsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, testName, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Fee"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "input",
                                                    value: form.fee,
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Discount"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    className: "input",
                                                    value: form.discount,
                                                    onChange: (e)=>handleDiscountChange(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Total Cost"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input bg-gray-100",
                                                    value: form.totalfee,
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Test Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "input",
                                                    value: form.status,
                                                    onChange: (e)=>handleChange("status", e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pending",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 337,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Completed",
                                                            children: "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 338,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "label",
                                                    children: "Payment Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "input",
                                                    value: form.paymentStatus,
                                                    onChange: (e)=>handleChange("paymentStatus", e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Pending",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 345,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Paid",
                                                            children: "Paid"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-4 border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            className: "border px-4 py-2 rounded",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "bg-teal-600 text-white px-5 py-2 rounded",
                                            children: "Save Report"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestModel.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/test/TestModel.jsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestModel.jsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestModel.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            successModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-green-600 text-xl font-bold mb-2",
                            children: "Success"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: "Test added successfully."
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSuccessModal(false),
                            className: "px-4 py-2 bg-teal-600 text-white rounded",
                            children: "OK"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestModel.jsx",
                    lineNumber: 367,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestModel.jsx",
                lineNumber: 366,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            errorModal.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-red-600 text-xl font-bold mb-2",
                            children: "Unsuccessful"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: errorModal.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setErrorModal({
                                    show: false,
                                    message: ""
                                }),
                            className: "px-4 py-2 bg-red-600 text-white rounded",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestModel.jsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/test/TestModel.jsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestModel.jsx",
                lineNumber: 379,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
        .table-input {
          width: 100%;
          padding: 4px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/test/TestModel.jsx",
                lineNumber: 390,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(TestModal, "YbSziYgt76Mv4liaO+ALrO+YEjM=");
_c = TestModal;
const __TURBOPACK__default__export__ = TestModal;
var _c;
__turbopack_context__.k.register(_c, "TestModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/test/tests.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/test/TestParametersModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$tests$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/tests.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TestParametersModal = ({ tests: propTests, setTests: propSetTests, onClose })=>{
    _s();
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(propTests || []);
    const setTestsSafe = propSetTests || setTests;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableTests, setAvailableTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [successModal, setSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorModal, setErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestParametersModal.useEffect": ()=>{
            setAvailableTests(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$tests$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testData"]);
        }
    }["TestParametersModal.useEffect"], []);
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters/createTestparameter", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[550px] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Add Test with Parameters"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "label",
                                            children: "Select Test"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "input",
                                            value: form.testname,
                                            onChange: (e)=>handleTestSelect(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "-- Select a Test --"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                availableTests.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                form.parameters.map((param, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-6 gap-3 items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Parameter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Min"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Max"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Unit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Duration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "label",
                                                        children: "Cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 border-t px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 border rounded-md text-gray-500",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/test/TestParametersModal.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            successModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-green-600 text-xl font-bold mb-2",
                            children: "Success"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: "Test added successfully."
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            errorModal.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-[350px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-red-600 text-xl font-bold mb-2",
                            children: "Unsuccessful"
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4",
                            children: errorModal.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/test/TestParametersModal.jsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
_s(TestParametersModal, "KcAkv5rtBk8J8+vjeswBkyZ50DQ=");
_c = TestParametersModal;
const __TURBOPACK__default__export__ = TestParametersModal;
var _c;
__turbopack_context__.k.register(_c, "TestParametersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/pages/MedicalTestsPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestStatsCards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestStatsCards.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestTable.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestModel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestModel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestParametersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/test/TestParametersModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const MedicalTestsPage = ()=>{
    _s();
    const [tests, setTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [parameters, setParameters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openTest, setOpenTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openParams, setOpenParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTest, setEditTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ================= FETCH ALL TEST RECORDS ================= */ const fetchTests = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/tests");
            const data = Array.isArray(res) ? res : res?.data || [];
            const mappedTests = data.map((t)=>{
                const totalFee = t.parameters?.reduce((sum, p)=>sum + Number(p.cost || 0), 0) || 0;
                return {
                    ...t,
                    id: t._id || `TEST-${Date.now()}-${Math.random()}`,
                    fee: totalFee
                };
            })// Recent report first
            .sort((a, b)=>{
                const dateA = new Date(a.createdAt || a.date || 0);
                const dateB = new Date(b.createdAt || b.date || 0);
                return dateB - dateA;
            });
            setTests(mappedTests);
        } catch (err) {
            console.error("Failed to fetch tests:", err);
        }
    };
    /* ================= FETCH ALL PARAMETERS ================= */ const fetchParameters = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters");
            const data = Array.isArray(res) ? res : res?.data || [];
            setParameters(data);
        } catch (err) {
            console.error("Failed to fetch parameters:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedicalTestsPage.useEffect": ()=>{
            fetchTests();
            fetchParameters();
        }
    }["MedicalTestsPage.useEffect"], []);
    /* ================= HANDLE SAVE TEST ================= */ const handleSaveTest = (data)=>{
        let totalFee = 0;
        data.parameters?.forEach((p)=>{
            totalFee += Number(p.cost || 0);
        });
        const newTest = {
            ...data,
            fee: totalFee,
            id: editTest?.id || `TEST-${Date.now()}`
        };
        if (editTest) {
            setTests((prev)=>prev.map((t)=>t.id === editTest.id ? newTest : t));
        } else {
            setTests((prev)=>[
                    newTest,
                    ...prev
                ]);
        }
        setOpenTest(false);
        setEditTest(null);
    };
    /* ================= DELETE TEST ================= */ const handleDeleteTest = (id)=>{
        if (!confirm("Are you sure you want to delete this test?")) return;
        setTests((prev)=>prev.filter((t)=>t.id !== id));
    };
    /* ================= CALCULATE GROSS TOTAL ================= */ const grossTotalFee = tests.reduce((sum, t)=>sum + Number(t.fee || 0), 0);
    /* ================= PRINT TEST REPORT ================= */ const handlePrintReport = (test)=>{
        const printWindow = window.open("", "", "width=800,height=600");
        printWindow.document.write(`<h2 style="text-align:center;">Test Report</h2>`);
        printWindow.document.write(`
      <table style="width:100%; margin-top:10px; font-size:14px;">
        <tr>
          <td><strong>Patient:</strong> ${test.patient || "-"}</td>
          <td><strong>Age:</strong> ${test.age || "-"}</td>
          <td><strong>Gender:</strong> ${test.gender || "-"}</td>
        </tr>
        <tr>
          <td><strong>Doctor:</strong> ${test.doctor || "-"}</td>
          <td><strong>Date:</strong> ${test.date || "-"}</td>
          <td><strong>Mobile:</strong> ${test.mobile || "-"}</td>
        </tr>
      </table>
    `);
        const testGroups = Array.isArray(test.parameters) ? test.parameters.reduce((acc, param)=>{
            const key = param.testName || test.name;
            if (!acc[key]) acc[key] = [];
            acc[key].push(param);
            return acc;
        }, {}) : {
            [test.name]: []
        };
        Object.entries(testGroups).forEach(([testName, params])=>{
            printWindow.document.write(`<h3 style="margin-top:20px;">Test Name: ${testName}</h3>`);
            printWindow.document.write(`
        <table border="1" style="border-collapse: collapse; width: 100%; margin-top:5px; font-size:14px;">
          <thead>
            <tr>
              <th style="padding:5px;">Parameter</th>
              <th style="padding:5px;">Min</th>
              <th style="padding:5px;">Max</th>
              <th style="padding:5px;">Unit</th>
              <th style="padding:5px;">Result</th>
            </tr>
          </thead>
          <tbody>
            ${params.map((p)=>`
              <tr>
                <td style="padding:5px;">${p.name}</td>
                <td style="padding:5px;">${p.min || "-"}</td>
                <td style="padding:5px;">${p.max || "-"}</td>
                <td style="padding:5px;">${p.unit || "-"}</td>
                <td style="padding:5px;">${p.result || "-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `);
        });
        printWindow.document.close();
        printWindow.print();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-slate-900",
                                children: "Medical Tests"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600",
                                children: "Manage diagnostic tests & reports"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenTest(true),
                                className: "flex items-center gap-2 h-9 px-4 rounded-md text-sm bg-gradient-to-r from-teal-500 to-teal-600 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "New Test"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenParams(true),
                                className: "h-9 px-4 rounded-md border border-gray-300 text-teal-700 bg-white hover:bg-slate-100",
                                children: "+ Add Parameters"
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestStatsCards$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tests: tests
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestTable$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tests: tests,
                onEdit: (t)=>{
                    setEditTest(t);
                    setOpenTest(true);
                },
                renderActionColumn: (test)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            title: "Print",
                            className: "p-1 bg-teal-600 text-white rounded",
                            onClick: ()=>handlePrintReport(test),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-right font-bold text-lg",
                children: [
                    "Gross Total Fee:",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-teal-600",
                        children: grossTotalFee
                    }, void 0, false, {
                        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openTest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestModel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                parameters: parameters,
                editData: editTest,
                onSave: handleSaveTest,
                onClose: ()=>{
                    setOpenTest(false);
                    setEditTest(null);
                }
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            openParams && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$test$2f$TestParametersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                parameters: parameters,
                setParameters: setParameters,
                onClose: ()=>setOpenParams(false)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
                lineNumber: 250,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/pages/MedicalTestsPage.jsx",
        lineNumber: 176,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MedicalTestsPage, "XKzE5IkEl8I7v/Z0QNZU4CX3rwU=");
_c = MedicalTestsPage;
const __TURBOPACK__default__export__ = MedicalTestsPage;
var _c;
__turbopack_context__.k.register(_c, "MedicalTestsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/tests/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>Test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$MedicalTestsPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pages/MedicalTestsPage.jsx [app-client] (ecmascript)");
"use client";
;
;
function Test() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$MedicalTestsPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/tests/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Test;
var _c;
__turbopack_context__.k.register(_c, "Test");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_afe2a6a8._.js.map