/* Google Calendar handoff: no account tokens or background sync. */
const ShoppingCalendar = {
  url(date, title, lines) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Choose a shopping date.');
    const start = new Date(date + 'T00:00:00Z');
    if (!Number.isFinite(start.getTime()) || start.toISOString().slice(0,10) !== date) throw new Error('Choose a valid shopping date.');
    const end = new Date(start); end.setUTCDate(end.getUTCDate()+1);
    const compact = value => value.toISOString().slice(0,10).replaceAll('-','');
    const details = 'Shopping list\n\n' + lines.map(line=>'- '+line).join('\n') + '\n\nFrom Fridge & Fork. This is a snapshot; later changes stay in the app.';
    const params = new URLSearchParams({action:'TEMPLATE',text:title.trim()||'Grocery shopping',dates:compact(start)+'/'+compact(end),details});
    const url = 'https://calendar.google.com/calendar/render?' + params;
    if(url.length>7500) throw new Error('This list is too long for a calendar link. Shorten it or check off items already bought, then try again.');
    return url;
  }
};
if(typeof module!=='undefined')module.exports=ShoppingCalendar;
