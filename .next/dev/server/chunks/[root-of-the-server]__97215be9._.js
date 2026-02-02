module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/mock-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_MANIFESTS",
    ()=>MOCK_MANIFESTS,
    "MOCK_REGISTRY",
    ()=>MOCK_REGISTRY
]);
const MOCK_REGISTRY = [
    {
        id: "lumina",
        name: "Lumina Mode",
        tags: [
            "luxury",
            "fashion",
            "dresses",
            "evening_wear"
        ],
        manifest_url: "/api/merchants/lumina/manifest"
    },
    {
        id: "urban",
        name: "Urban Sole",
        tags: [
            "shoes",
            "streetwear",
            "casual",
            "sneakers"
        ],
        manifest_url: "/api/merchants/urban/manifest"
    },
    {
        id: "velvet",
        name: "Velvet & Silk",
        tags: [
            "accessories",
            "bags",
            "jewelry",
            "luxury"
        ],
        manifest_url: "/api/merchants/velvet/manifest"
    }
];
const MOCK_MANIFESTS = {
    lumina: {
        ucp_version: "1.0",
        merchant: {
            id: "lumina",
            name: "Lumina Mode",
            description: "High-end evening wear and avant-garde fashion.",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=LM&backgroundColor=0a5c36",
            tags: [
                "luxury",
                "fashion"
            ],
            rating: 4.9,
            location: "Paris, FR",
            manifest_url: "/api/merchants/lumina/manifest"
        },
        serviceability: {
            regions: [
                "global"
            ],
            delivery_time_hours: 48
        },
        catalog: [
            {
                id: "gown-emerald",
                name: "Emerald Silk Evening Gown",
                description: "Floor-length silk satin gown with draped neckline.",
                merchant_id: "lumina",
                category: "Clothing",
                price: {
                    amount: 1250,
                    currency: "USD"
                },
                images: [
                    "/icons/gown.png"
                ],
                attributes: {
                    material: "Silk",
                    color: "Emerald",
                    size: "S,M,L"
                }
            },
            {
                id: "suit-velvet",
                name: "Midnight Velvet Tuxedo",
                description: "Tailored velvet tuxedo jacket with satin lapels.",
                merchant_id: "lumina",
                category: "Clothing",
                price: {
                    amount: 895,
                    currency: "USD"
                },
                images: [
                    "/icons/tuxedo.png"
                ],
                attributes: {
                    material: "Velvet",
                    color: "Black",
                    fit: "Slim"
                }
            }
        ]
    },
    urban: {
        ucp_version: "1.0",
        merchant: {
            id: "urban",
            name: "Urban Sole",
            description: "Premium streetwear and limited edition kicks.",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=US&backgroundColor=ff5722",
            tags: [
                "shoes",
                "streetwear"
            ],
            rating: 4.7,
            location: "New York, USA",
            manifest_url: "/api/merchants/urban/manifest"
        },
        serviceability: {
            regions: [
                "US",
                "EU"
            ],
            delivery_time_hours: 24
        },
        catalog: [
            {
                id: "sneaker-orange",
                name: "Velocity X-700",
                description: "High-top performance sneakers with reactive sole.",
                merchant_id: "urban",
                category: "Footwear",
                price: {
                    amount: 240,
                    currency: "USD"
                },
                images: [
                    "/icons/sneaker.png"
                ],
                attributes: {
                    gender: "Unisex",
                    color: "Orange/White"
                }
            },
            {
                id: "boots-combat",
                name: "Tactical Street Boots",
                description: "Leather combat boots with chunky sole.",
                merchant_id: "urban",
                category: "Footwear",
                price: {
                    amount: 180,
                    currency: "USD"
                },
                original_price: {
                    amount: 220,
                    currency: "USD"
                },
                images: [
                    "/icons/boots.png"
                ],
                attributes: {
                    material: "Leather",
                    color: "Black"
                }
            }
        ]
    },
    velvet: {
        ucp_version: "1.0",
        merchant: {
            id: "velvet",
            name: "Velvet & Silk",
            description: "Curated luxury accessories and jewelry.",
            logo: "https://api.dicebear.com/7.x/initials/svg?seed=VS&backgroundColor=673ab7",
            tags: [
                "accessories",
                "luxury"
            ],
            rating: 4.8,
            location: "Milan, IT",
            manifest_url: "/api/merchants/velvet/manifest"
        },
        serviceability: {
            regions: [
                "global"
            ],
            delivery_time_hours: 72
        },
        catalog: [
            {
                id: "bag-burgundy",
                name: "Burgundy Clutch",
                description: "Velvet clutch with gold chain hardware.",
                merchant_id: "velvet",
                category: "Accessories",
                price: {
                    amount: 450,
                    currency: "USD"
                },
                images: [
                    "/icons/bag.png"
                ],
                attributes: {
                    material: "Velvet",
                    color: "Burgundy"
                }
            },
            {
                id: "necklace-gold",
                name: "Aura Gold Chain",
                description: "18k Gold plated chain with minimalist pendant.",
                merchant_id: "velvet",
                category: "Jewelry",
                price: {
                    amount: 120,
                    currency: "USD"
                },
                images: [
                    "/icons/necklace.svg"
                ],
                attributes: {
                    material: "Gold Plated"
                }
            }
        ]
    }
};
}),
"[project]/src/app/api/ucp/registry/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-route] (ecmascript)");
;
;
async function GET() {
    // Simulate network latency
    await new Promise((resolve)=>setTimeout(resolve, 800));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        registry_version: "1.0",
        merchants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_REGISTRY"]
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__97215be9._.js.map