'use client';
export default function LocaleSwitcher() {
  const setLang = async (lang: 'fr-FR'|'en-US') => {
    await fetch('/api/set-lang', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang }),
    });
    location.reload();
  };
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 rounded border" onClick={() => setLang('fr-FR')}>FR</button>
      <button className="px-3 py-1 rounded border" onClick={() => setLang('en-US')}>EN</button>
    </div>
  );
}
