import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6">
            <Terminal className="w-8 h-8" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Error 404 &bull; Page Not Found
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-white tracking-tight">
            Endpoint Does Not Exist
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            The route or project you requested could not be found. Check the URL or return to the main portfolio.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="primary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
