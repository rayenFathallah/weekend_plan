module.exports = [
"[project]/weekend-proposal-story/components/proposal-stage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProposalStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ProposalStage({ stage, onNext }) {
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsAnimating(true);
    }, [
        stage
    ]);
    const stages = {
        passing: {
            title: "Wait... I just passed by you...",
            subtitle: "Going about my day like any other day",
            description: "Just minding my business, thinking about the week that was... 🚶",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ruohhoruohhoruoh-TuGqUwOts88l2iyzRVA19QcyYEvwod.png",
            emoji: "🚶"
        },
        realization: {
            title: "OH WAIT... 💡",
            subtitle: "Something just clicked!",
            description: "Hold on... this weekend is coming up! And I just remembered... we had a good time last time! And I said that I wanna know the new you more 😄",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_h26h24h26h24h26h-EYzTxTzlyi3Q7PlZ0D0jwpMDABisQX.png",
            emoji: "💡"
        },
        proposal: {
            title: "So here's my idea... 😊",
            subtitle: "No pressure, just thinking out loud!",
            description: "What if we went out this weekend? If you want to, of course! No big deal if you don't! 😄✨",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_t47yvht47yvht47y-48RbkAE1UPK53i50naTEhVMfmv6Pyk.png",
            emoji: "🎉"
        }
    };
    const current = stages[stage];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-6 text-center transition-all duration-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`,
        onAnimationEnd: ()=>setIsAnimating(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: current.image || "/placeholder.svg",
                    alt: current.title,
                    className: "w-full h-full object-cover",
                    style: {
                        objectPosition: '50% 40%'
                    }
                }, void 0, false, {
                    fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl font-bold text-primary",
                        children: current.title
                    }, void 0, false, {
                        fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl font-semibold text-accent",
                        children: current.subtitle
                    }, void 0, false, {
                        fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg text-muted-foreground leading-relaxed",
                        children: current.description
                    }, void 0, false, {
                        fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                className: "w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg",
                children: stage === 'proposal' ? 'What do you think? 🤔' : 'Next →'
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 pt-4",
                children: [
                    'passing',
                    'realization',
                    'proposal'
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-2 rounded-full transition-all duration-300 ${s === stage ? 'bg-primary w-6' : stage === 'proposal' ? 'bg-accent w-2' : stage === 'realization' && s === 'proposal' ? 'bg-accent-light w-2' : 'bg-gray-300 w-2'}`
                    }, s, false, {
                        fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/weekend-proposal-story/components/proposal-stage.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/weekend-proposal-story/components/response-stage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ResponseStage({ response, onResponse }) {
    const [hoverAccept, setHoverAccept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoverDeny, setHoverDeny] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (response === 'accept') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-center animate-in fade-in zoom-in duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-7xl sm:text-8xl",
                    children: "🎉"
                }, void 0, false, {
                    fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-primary",
                            children: "Good choice! 🙌"
                        }, void 0, false, {
                            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-muted-foreground leading-relaxed",
                            children: "WWIiiwouu"
                        }, void 0, false, {
                            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    if (response === 'deny') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-center animate-in fade-in zoom-in duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-7xl sm:text-8xl",
                    children: "😅"
                }, void 0, false, {
                    fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-primary",
                            children: "That's okay, No worries! 💙"
                        }, void 0, false, {
                            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-accent font-semibold"
                        }, void 0, false, {
                            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.location.reload(),
                    className: "mt-6 py-2 px-6 bg-secondary text-secondary-foreground rounded-lg hover:bg-opacity-90 transition-all",
                    children: "Try again"
                }, void 0, false, {
                    fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl sm:text-2xl font-bold text-primary",
                        children: "So... what do you say? 👀"
                    }, void 0, false, {
                        fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg text-muted-foreground",
                        children: "Saturday? Just us? Fun times guaranteed? 🌟"
                    }, void 0, false, {
                        fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseEnter: ()=>setHoverAccept(true),
                        onMouseLeave: ()=>setHoverAccept(false),
                        onClick: ()=>onResponse('accept'),
                        className: `py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${hoverAccept ? 'scale-105 shadow-lg' : 'scale-100'} bg-primary text-primary-foreground hover:bg-opacity-90`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl block mb-1",
                                children: "😊"
                            }, void 0, false, {
                                fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            "Yes!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onMouseEnter: ()=>setHoverDeny(true),
                        onMouseLeave: ()=>setHoverDeny(false),
                        onClick: ()=>onResponse('deny'),
                        className: `py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${hoverDeny ? 'scale-105 shadow-lg' : 'scale-100'} bg-secondary text-secondary-foreground hover:bg-opacity-90`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl block mb-1",
                                children: "🤔"
                            }, void 0, false, {
                                fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            "Maybe..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-sm text-muted-foreground italic pt-4",
                children: "(The answer can only be yes, but I respect the thinking 😄)"
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/weekend-proposal-story/components/response-stage.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/weekend-proposal-story/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$components$2f$proposal$2d$stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/components/proposal-stage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$components$2f$response$2d$stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weekend-proposal-story/components/response-stage.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Page() {
    const [currentStage, setCurrentStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('passing');
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNext = ()=>{
        if (currentStage === 'passing') setCurrentStage('realization');
        else if (currentStage === 'realization') setCurrentStage('proposal');
        else if (currentStage === 'proposal') setCurrentStage('response');
    };
    const handleResponse = (answer)=>{
        setResponse(answer);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-warm-50 via-white to-accent-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: currentStage !== 'response' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$components$2f$proposal$2d$stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                stage: currentStage,
                onNext: handleNext
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/app/page.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$weekend$2d$proposal$2d$story$2f$components$2f$response$2d$stage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                response: response,
                onResponse: handleResponse
            }, void 0, false, {
                fileName: "[project]/weekend-proposal-story/app/page.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/weekend-proposal-story/app/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/weekend-proposal-story/app/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/weekend-proposal-story/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=weekend-proposal-story_aa610d8f._.js.map