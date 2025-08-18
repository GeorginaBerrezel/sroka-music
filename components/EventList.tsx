import { format, parseISO, isFuture, compareAsc } from 'date-fns';
import fr from 'date-fns/locale/fr';
import events from '../content/events.json';

type EventItem = { title: string; city: string; country?: string; date?: string; link?: string };

function splitEvents(list: EventItem[]) {
  const dated = list.filter(e => e.date);
  const undated = list.filter(e => !e.date);
  const upcoming = dated.filter(e => isFuture(parseISO(e.date as string))).sort((a,b)=>compareAsc(parseISO(a.date as string), parseISO(b.date as string)));
  const past = dated.filter(e => !isFuture(parseISO(e.date as string))).sort((a,b)=>compareAsc(parseISO(b.date as string), parseISO(a.date as string)));
  return { upcoming, past, undated };
}

export default function EventList() {
  const { upcoming, past, undated } = splitEvents(events as EventItem[]);

  const renderEvent = (e: EventItem, key: string | number) => (
    <div className="card" key={key}>
      <div className="flex">
        <strong>{e.title}</strong>
        <span className="muted">• {e.city}{e.country ? `, ${e.country}` : ''}</span>
      </div>
      {e.date && <small className="muted">Le {format(parseISO(e.date), "d MMMM yyyy", { locale: fr })}</small>}
      {e.link && <div style={{marginTop: 8}}><a className="button" href={e.link} target="_blank">Infos & billets</a></div>}
    </div>
  );

  return (
    <div className="grid cols-2">
      <div>
        <h3 className="h3">À venir</h3>
        <div className="grid">{upcoming.length ? upcoming.map((e, i)=>renderEvent(e, i)) : <p className="muted">Aucune date annoncée.</p>}</div>
      </div>
      <div>
        <h3 className="h3">Passés</h3>
        <div className="grid">{past.length ? past.map((e, i)=>renderEvent(e, `p-${i}`)) : <p className="muted">Pas d'historique pour l'instant.</p>}</div>
        {undated.length > 0 && (
          <>
            <div className="hr" />
            <h3 className="h3">Autres lieux</h3>
            <div className="grid">{undated.map((e, i)=>renderEvent(e, `u-${i}`))}</div>
          </>
        )}
      </div>
    </div>
  );
}
