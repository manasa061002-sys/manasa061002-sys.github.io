import { useState } from 'react';
import { X, GraduationCap, HeartHandshake } from 'lucide-react';
import {
  copyBankEntries,
  copyBankGroupMeta,
  type CopyBankGroup,
} from '@/data/copyBank';

type Tab = CopyBankGroup;

export default function CopyBankModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('Academic');

  const entries = copyBankEntries.filter((e) => e.group === tab);
  const meta = copyBankGroupMeta[tab];

  const tabs: { key: Tab; label: string; icon: typeof GraduationCap }[] = [
    { key: 'Academic', label: 'Academic', icon: GraduationCap },
    { key: 'Volunteering', label: 'Volunteering', icon: HeartHandshake },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] rounded-[28px] bg-white overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800 bg-white/80 rounded-full p-2 backdrop-blur-md transition-colors duration-300"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-8 pt-8 pb-5 border-b border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 leading-tight pr-8">
            Digital Content Creation
          </h3>
        </div>

        <div className="flex gap-1 px-8 pt-4">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-[13px] font-medium transition-all duration-300 ${
                tab === key
                  ? 'bg-gray-50 text-gray-900 border-b-2 border-cyan-500'
                  : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto px-8 pb-8 bg-gray-50 min-h-0 flex-1">
          <div className="pt-5 pb-3">
            <h4 className="text-[15px] font-medium text-gray-800">{meta.title}</h4>
            <p className="text-[11px] text-gray-400 mt-0.5">{meta.subtitle}</p>
          </div>

          <div className="space-y-4">
            {entries.map((entry, i) => (
              <article
                key={entry.id}
                className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wide text-cyan-600">
                      {entry.id}
                    </span>
                    <h5 className="text-[15px] font-medium text-gray-900 mt-0.5 leading-snug">
                      {entry.label}
                    </h5>
                  </div>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap text-right shrink-0">
                    {entry.context}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mb-3 -mt-2">{entry.date}</p>
                <div className="space-y-1.5">
                  {entry.body.map((line, idx) => {
                    const isWriter = line.startsWith('Writer:');
                    const isHashtag = line.startsWith('#');
                    const isQuote = line.startsWith('"') || line.startsWith('As said by');
                    if (isWriter)
                      return (
                        <p key={idx} className="text-[12px] text-gray-500 italic pt-2 border-t border-gray-50 mt-2">
                          {line}
                        </p>
                      );
                    if (isHashtag)
                      return (
                        <p key={idx} className="text-[11px] text-cyan-700/80 font-medium tracking-wide break-words">
                          {line}
                        </p>
                      );
                    if (isQuote)
                      return (
                        <p key={idx} className="text-[14px] text-gray-700 italic leading-relaxed">
                          {line}
                        </p>
                      );
                    return (
                      <p key={idx} className="text-[13.5px] text-gray-700 leading-[1.7]">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
