'use client';

import {
    Bell,
    BookCopy,
    FileText,
    FolderKanban,
    LayoutDashboard,
    Pencil,
    Plus,
    Search,
    Server,
    Settings,
    UserCircle,
    Users,
    Workflow,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ActionFlow() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const router = useRouter();

    const handleItemClick = (item: string) => {
        setSelectedItems(
            (prev) =>
                prev.includes(item)
                    ? prev.filter((i) => i !== item) // deselect
                    : [...prev, item], // select
        );
    };

    const handleNavigate = () => {
        router.push('/workflow');
    };

    const navigationItems = [
        { label: 'Dashboard', icon: LayoutDashboard },
        { label: 'Services', icon: Server },
        { label: 'Configurations', icon: Settings },
        { label: 'Members', icon: Users },
    ];

    const notificationItems = [
        { label: 'Notification Handler', icon: Bell },
        { label: 'Action flow', icon: Workflow },
        { label: 'Groups', icon: FolderKanban },
        { label: 'Templates', icon: FileText },
        { label: 'Customers', icon: UserCircle },
        { label: 'Logs', icon: BookCopy },
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
                <aside className="w-[220px] bg-slate-50 border-r border-slate-200 min-h-screen flex flex-col">
                    {/* Top Section - Project Name */}
                    <div className="px-1 py-5">
                        <div className="flex items-center gap-3 mb-5 cursor-pointer hover:bg-slate-100 rounded-lg p-2 -m-2 transition-colors">
                            <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm">
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
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </div>

                        {/* Primary Navigation */}
                        <nav className="space-y-1 mb-6" data-oid="ljl:co6">
                            {navigationItems.map(({ label, icon: Icon }) => (
                                <div
                                    key={label}
                                    onClick={() => handleItemClick(label)}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${selectedItems.includes(label)
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-slate-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                    data-oid=".bwr6ea"
                                >
                                    <Icon className="h-5 w-5" data-oid="agw2i_e" />
                                    <span className="text-sm font-bold" data-oid="-_829bl">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </nav>

                        {/* Divider */}
                        <div className="mb-4">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">
                                NOTIFICATION
                            </div>
                        </div>

                        {/* Notification Section */}
                        <nav className="space-y-1" data-oid="xv6h0rk">
                            {notificationItems.map(({ label, icon: Icon }) => (
                                <div
                                    key={label}
                                    onClick={() => handleItemClick(label)}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${selectedItems.includes(label)
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-slate-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                    data-oid="pa526.:"
                                >
                                    <Icon className="h-5 w-5" data-oid="w9.20v-" />
                                    <span className="text-sm font-bold" data-oid="jp1rxvf">
                                        {label}
                                    </span>
                                </div>
                            ))}
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
                                    className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center"
                                    data-oid="p6s82ja"
                                >
                                    <Workflow className="h-5 w-5 text-primary" data-oid="g0g8b8o" />
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
                                    <Bell className="h-5 w-5 text-slate-400" data-oid="l6f4k1o" />
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
                                    className="w-80 h-10 pl-4 pr-10 rounded-3xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/20 text-sm bg-gray-50"
                                    data-oid="0q13j3_"
                                />

                                <Search className="h-5 w-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" data-oid="h6x9k7o" />
                            </div>

                            <button
                                className="h-10 w-10 bg-white border border-primary/20 rounded-lg shadow-sm hover:bg-emerald-50 flex items-center justify-center transition-colors"
                                data-oid="3.g6r3i"
                                onClick={handleNavigate}
                            >
                                <Plus className="h-5 w-5 text-primary" data-oid="h3m8k1o" />
                            </button>
                        </div>

                        {/* Table Section */}
                        <div
                            className="bg-white rounded-lg border border-slate-100 overflow-hidden"
                            data-oid="njjnff7"
                        >
                            {/* Table Header */}
                            <div
                                className="grid grid-cols-12 px-6 py-2 bg-white border-b border-slate-100 bg-gray-50"
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
                                        className="grid grid-cols-12 px-6 py-4 hover:bg-slate-50 transition-colors -mb-3"
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
                                                <Pencil className="h-4 w-4 text-slate-400 mb-2" data-oid="l6f4k1o" />
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
