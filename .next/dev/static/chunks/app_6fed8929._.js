(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/app/components/pages/SuppliersPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierSearch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierTable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierCreateModel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierUpdateModel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../components/supliers/SupplierDeleteModel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
;
;
;
const SuppliersPage = ()=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSupplier, setSelectedSupplier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* =========================
     FETCH SupplierS
     ========================= */ const fetchSuppliers = async (query = "")=>{
        try {
            const endpoint = query ? `/suppliers?search=${encodeURIComponent(query)}` : "/suppliers";
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(endpoint, "GET");
            if (res?.success && Array.isArray(res.data)) {
                setSuppliers(res.data);
            } else {
                setSuppliers([]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res?.message || "Failed to fetch suppliers");
            }
        } catch (error) {
            console.error("Failed to fetch suppliers", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load suppliers");
            setsuppliers([]);
        }
    };
    /* Initial load */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuppliersPage.useEffect": ()=>{
            fetchSuppliers();
        }
    }["SuppliersPage.useEffect"], []);
    /* Debounced search */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuppliersPage.useEffect": ()=>{
            const delay = setTimeout({
                "SuppliersPage.useEffect.delay": ()=>{
                    fetchSuppliers(searchTerm);
                }
            }["SuppliersPage.useEffect.delay"], 400);
            return ({
                "SuppliersPage.useEffect": ()=>clearTimeout(delay)
            })["SuppliersPage.useEffect"];
        }
    }["SuppliersPage.useEffect"], [
        searchTerm
    ]);
    /* =========================
     HANDLERS
     ========================= */ const handleAddClick = ()=>{
        setIsCreateModalOpen(true);
    };
    const handleEditClick = (patient)=>{
        setSelectedPatient(patient);
        setIsUpdateModalOpen(true);
    };
    const handleDeleteClick = (patient)=>{
        setSelectedPatient(patient);
        setIsDeleteModalOpen(true);
    };
    const handleSearchChange = (e)=>{
        setSearchTerm(e.target.value);
    };
    const closeCreateModal = ()=>setIsCreateModalOpen(false);
    const closeUpdateModal = ()=>{
        setSelectedPatient(null);
        setIsUpdateModalOpen(false);
    };
    const closeDeleteModal = ()=>{
        setSelectedSupplier(null);
        setIsDeleteModalOpen(false);
    };
    const refreshSuppliers = ()=>fetchSuppliers(searchTerm);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                onAdd: handleAddClick
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierCard, {
                title: "Total Suppliers",
                count: suppliers.length,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "w-6 h-6 text-white"
                }, void 0, false, {
                    fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                    lineNumber: 104,
                    columnNumber: 15
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierSearch, {
                value: searchTerm,
                onChange: handleSearchChange
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierTable, {
                    Suppliers: suppliers,
                    onEdit: handleEditClick,
                    onDelete: handleDeleteClick
                }, void 0, false, {
                    fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isCreateModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierCreateModal, {
                onClose: closeCreateModal,
                onCreated: ()=>{
                    closeCreateModal();
                    refreshSuppliers();
                }
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isUpdateModalOpen && selectedSupplier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierUpdateModal, {
                patient: selectedPatient,
                onClose: closeUpdateModal,
                onUpdated: refreshSuppliers
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isDeleteModalOpen && selectedPatient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupplierDeleteModal, {
                patient: selectedPatient,
                onClose: closeDeleteModal,
                onDeleted: refreshSuppliers
            }, void 0, false, {
                fileName: "[project]/app/components/pages/SuppliersPage.jsx",
                lineNumber: 143,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/pages/SuppliersPage.jsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SuppliersPage, "eCEJfS98U03/ByT7B3GLbwJM0h4=");
_c = SuppliersPage;
const __TURBOPACK__default__export__ = SuppliersPage;
var _c;
__turbopack_context__.k.register(_c, "SuppliersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/suppliers/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>Suppliers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$SuppliersPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/pages/SuppliersPage.jsx [app-client] (ecmascript)");
"use client";
;
;
function Suppliers() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pages$2f$SuppliersPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/suppliers/page.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Suppliers;
var _c;
__turbopack_context__.k.register(_c, "Suppliers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_6fed8929._.js.map