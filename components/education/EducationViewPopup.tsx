"use client";

export default function EducationViewPopup({ onClose }: { onClose: () => void }) {
  return (
    <section 
      className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <section 
        className="w-full max-w-[700px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 
          rounded-2xl border-2 border-slate-600/40 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <section className="sticky top-0 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-slate-600/40 p-6 backdrop-blur-sm z-10">
          <section className="flex flex-row justify-between items-start gap-4">
            <section className="flex-1">
              <h2 className="font-bold text-white text-xl md:text-2xl leading-tight">
                GCE Ordinary Level (O/L) Examination
              </h2>
              <p className="text-slate-400 text-sm mt-1">Sri Lanka</p>
            </section>
            <button 
              onClick={onClose} 
              className="w-10 h-10 bg-slate-700/50 text-slate-300 rounded-full 
                hover:bg-red-600/80 hover:text-white hover:rotate-90 
                transition-all duration-300 cursor-pointer flex items-center justify-center
                border border-slate-600/50 hover:border-red-500/50 shadow-lg group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </section>
        </section>

        {/* Content */}
        <section className="p-6 space-y-6">
          {/* Info Card */}
          <section className="bg-slate-800/50 border border-slate-600/40 rounded-xl p-5 space-y-3 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InfoRow label="Year" value="2007 - 2017" />
              <InfoRow label="Status" value="Passed" badge="success" />
              <InfoRow label="Institution" value="G/Gintota Central College" fullWidth />
              <InfoRow label="Location" value="Gintota, Sri Lanka" fullWidth />
              <InfoRow label="Index Number" value="123456789" />
            </div>
            
            <section className="flex justify-end pt-3 border-t border-slate-600/30 mt-4">
              <button className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 
                text-white font-semibold text-sm rounded-lg
                hover:from-emerald-500 hover:to-emerald-600
                transition-all duration-300 cursor-pointer
                shadow-lg shadow-emerald-900/50 hover:shadow-emerald-600/50
                border border-emerald-500/50 hover:scale-105 group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Certificate
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </section>
          </section>

          {/* Results Section */}
          <section className="mt-6">
            <div className="mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-3 shadow-lg shadow-blue-500/50"></div>
              <h1 className="text-white text-xl md:text-2xl font-bold">Examination Results</h1>
              <p className="text-slate-400 text-sm mt-1">Subject-wise performance</p>
            </div>

            {/* Results Table */}
            <section className="bg-slate-800/30 border border-slate-600/40 rounded-xl overflow-hidden backdrop-blur-sm">
              {/* Table Header */}
              <section className="flex flex-row justify-between py-4 px-6 bg-slate-700/30 border-b border-slate-600/40">
                <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Subject</h2>
                <span className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Grade</span>
              </section>

              {/* Table Rows */}
              <section className="divide-y divide-slate-600/20">
                <ResultRow subject="English" grade="A" />
                <ResultRow subject="Mathematics" grade="A" />
                <ResultRow subject="Science" grade="B" />
                <ResultRow subject="Sinhala Language" grade="A" />
                <ResultRow subject="History" grade="C" />
                <ResultRow subject="Buddhism" grade="A" />
                <ResultRow subject="ICT" grade="A" />
                <ResultRow subject="Commerce" grade="B" />
              </section>
            </section>

            {/* Summary Stats */}
            <section className="mt-4 grid grid-cols-3 gap-3">
              <StatCard label="Total Subjects" value="8" />
              <StatCard label="A Grades" value="5" color="emerald" />
              <StatCard label="Pass Rate" value="100%" color="blue" />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

// Helper Components
function InfoRow({ 
  label, 
  value, 
  badge, 
  fullWidth = false 
}: { 
  label: string; 
  value: string; 
  badge?: "success" | "pending" | "failed";
  fullWidth?: boolean;
}) {
  const getBadgeStyle = () => {
    switch(badge) {
      case "success": return "bg-emerald-600/30 text-emerald-300 border-emerald-500/40";
      case "pending": return "bg-amber-600/30 text-amber-300 border-amber-500/40";
      case "failed": return "bg-red-600/30 text-red-300 border-red-500/40";
      default: return "";
    }
  };

  return (
    <section className={`flex flex-col gap-1 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</span>
      {badge ? (
        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getBadgeStyle()} w-fit`}>
          {value}
        </span>
      ) : (
        <span className="text-white font-medium">{value}</span>
      )}
    </section>
  );
}

function ResultRow({ subject, grade }: { subject: string; grade: string }) {
  const getGradeColor = (grade: string) => {
    if (grade === "A") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
    if (grade === "B") return "text-blue-400 bg-blue-500/10 border-blue-500/30";
    if (grade === "C") return "text-amber-400 bg-amber-500/10 border-amber-500/30";
    return "text-slate-400 bg-slate-500/10 border-slate-500/30";
  };

  return (
    <section className="flex flex-row justify-between items-center py-4 px-6 hover:bg-slate-700/20 transition-colors duration-200 group">
      <h2 className="text-white font-medium group-hover:text-white/90">{subject}</h2>
      <span className={`px-3 py-1 rounded-lg font-bold text-sm border ${getGradeColor(grade)} min-w-[50px] text-center`}>
        {grade}
      </span>
    </section>
  );
}

function StatCard({ 
  label, 
  value, 
  color = "slate" 
}: { 
  label: string; 
  value: string; 
  color?: "slate" | "emerald" | "blue";
}) {
  const getColorStyle = () => {
    switch(color) {
      case "emerald": return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      case "blue": return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      default: return "bg-slate-700/30 border-slate-600/40 text-slate-300";
    }
  };

  return (
    <section className={`${getColorStyle()} border rounded-lg p-4 text-center backdrop-blur-sm`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </section>
  );
}