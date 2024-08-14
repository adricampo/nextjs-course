import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-col w-full">
          <TopMenu />
          <div className="w-full text-slate-900">{children}</div>
        </div>
      </div>
    </div>
  );
}
