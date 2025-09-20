import React from 'react';

export default function ActionFlow() {
    const navigationItems = [
        'Dashboard',
        'Services',
        'Configurations',
        'Members',
        'Notification Handler',
        'Action flow',
        'Groups',
        'Templates',
        'Customers',
        'Logs',
    ];

    const actionFlows = [
        'Notification for influencers',
        'Influencer Engagement System',
        'Influencer Notification System',
        'Influencer Outreach Notification',
        'Influencer Collaboration Reminder',
    ];

    return (
        <div className="min-h-screen bg-white font-sans" data-oid=":-drd7-">
            <div className="flex" data-oid="e4-zbvz">
            {/* Sidebar */}
            <aside className="w-[270px] bg-slate-50 border-r border-slate-200 min-h-screen flex flex-col">
                    {/* Top Section - Project Name */}
                    <div className="px-4 py-6">
                        <div className="flex items-center gap-3 mb-8 cursor-pointer hover:bg-slate-100 rounded-lg p-2 -m-2 transition-colors">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                                AB
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-800">
                                    Project name
                                </div>
                                <div className="text-xs text-slate-400">
                                    Workspace
                                </div>
                            </div>
                            <div className="text-slate-400">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6"/>
                                </svg>
                            </div>
                        </div>

                        {/* Primary Navigation */}
                        <nav className="space-y-1 mb-6">
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9,22 9,12 15,12 15,22"/>
                                </svg>
                                <span className="text-sm font-bold">Dashboard</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="7" height="7"/>
                                    <rect x="14" y="3" width="7" height="7"/>
                                    <rect x="14" y="14" width="7" height="7"/>
                                    <rect x="3" y="14" width="7" height="7"/>
                                </svg>
                                <span className="text-sm font-bold">Services</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="3"/>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                                </svg>
                                <span className="text-sm font-bold">Configurations</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span className="text-sm font-bold">Members</span>
                            </div>
                        </nav>

                        {/* Divider */}
                        <div className="mb-4">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">
                                NOTIFICATION
                            </div>
                        </div>

                        {/* Notification Section */}
                        <nav className="space-y-1">
                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                <span className="text-sm font-bold">Notification Handler</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors bg-emerald-100 text-emerald-700">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="5" cy="6" r="3"/>
                                    <path d="M5 9v6"/>
                                    <circle cx="5" cy="18" r="3"/>
                                    <path d="M12 3v18"/>
                                    <circle cx="19" cy="6" r="3"/>
                                    <path d="M16 15.7A9 9 0 0 0 19 9"/>
                                </svg>
                                <span className="text-sm font-bold">Action Flow</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                                <span className="text-sm font-bold">Groups</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14,2 14,8 20,8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10,9 9,9 8,9"/>
                                </svg>
                                <span className="text-sm font-bold">Templates</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                                <span className="text-sm font-bold">Customers</span>
                            </div>

                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors text-slate-700 hover:bg-slate-100">
                                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12,6 12,12 16,14"/>
                                </svg>
                                <span className="text-sm font-bold">Logs</span>
                            </div>
                        </nav>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-auto px-4 py-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-pink-600 text-white flex items-center justify-center text-sm font-medium">
                                G
                            </div>
                            <div className="text-xs">
                                <div className="text-slate-600 font-medium">Google</div>
                                <div className="text-slate-400 font-mono">2443454454</div>
                            </div>
                        </div>
                    </div>
                </aside>
                
                {/* Main Content */}
                <main className="flex-1 bg-white" data-oid="-yg4l3_">
                    {/* Top Bar */}
                    <header className="px-8 py-6 border-b border-slate-100" data-oid="p.4jq:9">
                        <div className="flex items-center justify-between" data-oid="b16enrn">
                            <div className="flex items-center gap-3" data-oid=":yj.9ds">
                                <div
                                    className="h-8 w-8 rounded-md bg-emerald-100 flex items-center justify-center"
                                    data-oid="p6s82ja"
                                >
                                    <svg
                                        className="h-4 w-4 text-emerald-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        data-oid="-a2nfqp"
                                    >
                                        <path d="M3 12h18M3 6h18M3 18h18" data-oid="d14:vhg" />
                                    </svg>
                                </div>
                                <h1
                                    className="text-base font-semibold text-slate-800"
                                    data-oid="t44saiu"
                                >
                                    Action flow
                                </h1>
                            </div>

                            <div className="flex items-center gap-4" data-oid=".1dz2lj">
                                <button
                                    className="h-8 w-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
                                    data-oid=".lzubyy"
                                >
                                    <svg
                                        className="h-5 w-5 text-slate-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        data-oid="f8auobb"
                                    >
                                        <path
                                            d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                                            data-oid="k.l_5v0"
                                        />

                                        <path d="M13.73 21a2 2 0 0 1-3.46 0" data-oid="x4fz422" />
                                    </svg>
                                </button>
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&w=200&auto=format&fit=crop&crop=faces"
                                    alt="User avatar"
                                    className="h-8 w-8 rounded-full border border-slate-200"
                                    data-oid=":5-bv0_"
                                />
                            </div>
                        </div>
                    </header>

                    {/* Content Area */}
                    <div className="p-8" data-oid="iygt8ep">
                        {/* Search + Add Section */}
                        <div className="flex items-center justify-between mb-6" data-oid="bjux1ow">
                            <div className="relative" data-oid="bfsp_1a">
                                <input
                                    type="text"
                                    placeholder="Search flow"
                                    className="w-96 h-12 pl-4 pr-10 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-200 text-sm"
                                    data-oid="0q13j3_"
                                />

                                <svg
                                    className="h-4 w-4 absolute right-3 top-4 text-slate-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    data-oid="0xa37zf"
                                >
                                    <circle cx="11" cy="11" r="8" data-oid="dsc9s8_" />
                                    <path d="M21 21l-4.35-4.35" data-oid="0:np3mq" />
                                </svg>
                            </div>

                            <button
                                className="h-10 w-10 bg-white border border-emerald-200 rounded-lg shadow-sm hover:bg-emerald-50 flex items-center justify-center transition-colors"
                                data-oid="3.g6r3i"
                            >
                                <svg
                                    className="h-5 w-5 text-emerald-500"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    data-oid="izj272c"
                                >
                                    <path d="M12 5v14M5 12h14" data-oid="booxz8u" />
                                </svg>
                            </button>
                        </div>

                        {/* Table Section */}
                        <div
                            className="bg-white rounded-lg border border-slate-100 overflow-hidden"
                            data-oid="njjnff7"
                        >
                            {/* Table Header */}
                            <div
                                className="grid grid-cols-12 gap-4 px-6 py-4 bg-white border-b border-slate-100"
                                data-oid=".i2i6ew"
                            >
                                <div
                                    className="col-span-6 text-sm font-medium text-slate-600"
                                    data-oid="rocs:po"
                                >
                                    Action flow name
                                </div>
                                <div
                                    className="col-span-5 text-sm font-medium text-slate-600"
                                    data-oid="bbghqzp"
                                >
                                    Description
                                </div>
                                <div
                                    className="col-span-1 text-sm font-medium text-slate-600 text-right"
                                    data-oid="ti0wito"
                                >
                                    Action
                                </div>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-slate-100" data-oid="lz3e3ui">
                                {actionFlows.map((flow, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-slate-50 transition-colors"
                                        data-oid="k64m1cp"
                                    >
                                        <div
                                            className="col-span-6 text-sm font-semibold text-slate-800"
                                            data-oid="tosqml3"
                                        >
                                            {flow}
                                        </div>
                                        <div
                                            className="col-span-5 text-sm text-slate-500"
                                            data-oid="ue07fbf"
                                        >
                                            This flow deals specifically churn users and all their
                                            impacts.
                                        </div>
                                        <div
                                            className="col-span-1 flex justify-end"
                                            data-oid="6zeuxmu"
                                        >
                                            <button
                                                className="p-2 rounded-md hover:bg-slate-100 transition-colors"
                                                data-oid="31-:7u8"
                                            >
                                                <svg
                                                    className="h-5 w-5 text-emerald-500"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    data-oid="-db2og6"
                                                >
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                        data-oid="giskjju"
                                                    />

                                                    <path
                                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                        data-oid="s1fncjo"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
