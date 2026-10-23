const I18n = (() => {
  const filipino = {
  "Language": "Wika",
  "Appearance": "Itsura",
  "System": "Ayon sa device",
  "Light": "Maliwanag",
  "Dark": "Madilim",
  "Skip to content": "Pumunta sa nilalaman",
  "Your everyday kitchen": "Kasama sa araw-araw na pagluluto",
  "Find a meal": "Maghanap ng lutuin",
  "My recipes": "Mga recipe ko",
  "Shopping list": "Listahan ng bibilhin",
  "Anong luto natin?": "Anong luto natin?",
  "Filipino favourites, from everyday meals to a weekend cooking challenge.": "Mga paboritong pagkaing Pinoy, mula sa simpleng ulam hanggang sa mas mahirap na lutuin.",
  "Your fridge": "Laman ng ref",
  "Add a few ingredients. Quantities are optional.": "Maglagay ng mga sangkap. Puwedeng idagdag ang dami mamaya.",
  "Ingredient": "Sangkap",
  "Add ingredient": "Magdagdag ng sangkap",
  "Add": "Idagdag",
  "Try eggs, tomatoes & cooked rice": "Subukan: itlog, kamatis at kanin",
  "Quick add & pantry staples": "Mga karaniwang sangkap",
  "Common ingredients": "Madalas gamitin",
  "I have oil, salt and pepper": "Mayroon akong mantika, asin at paminta",
  "Opt in only if you have all three. Quantities still need checking.": "Piliin lang kung mayroon ka ng tatlo. Kailangan pa ring tingnan ang dami.",
  "Find meals": "Maghanap ng lutuin",
  "Clear ingredients": "Alisin ang mga sangkap",
  "Ready to cook only": "Handa nang lutuin lang",
  "Cuisine": "Uri ng pagkain",
  "All cuisines": "Lahat ng uri",
  "International": "Iba pang bansa",
  "Cooking for": "Ilang kakain",
  "Servings": "Bilang ng kakain",
  "1 person": "1 tao",
  "2 people": "2 tao",
  "3 people": "3 tao",
  "4 people": "4 tao",
  "6 people": "6 tao",
  "More options": "Iba pang pagpipilian",
  "Your region": "Iyong rehiyon",
  "Outside the US": "Sa labas ng US",
  "United States": "Estados Unidos",
  "Measurements": "Mga sukat",
  "Automatic (metric)": "Awtomatiko (metric)",
  "Cooking level": "Antas ng pagluluto",
  "All levels": "Lahat ng antas",
  "Easy": "Madali",
  "Intermediate": "Katamtaman",
  "Chef level": "Pang-chef",
  "Diet": "Diyeta",
  "Any diet": "Lahat ng diyeta",
  "Vegetarian": "Walang karne o isda",
  "Vegan": "Walang produktong hayop",
  "Time": "Oras",
  "Any time": "Kahit gaano katagal",
  "Up to 15 minutes": "Hanggang 15 minuto",
  "Up to 30 minutes": "Hanggang 30 minuto",
  "Up to 1 hour": "Hanggang 1 oras",
  "About these recipes · Draft collection": "Tungkol sa mga recipe · Paunang koleksiyon",
  "Recipe sourcing & review": "Pinagmulan at pagsusuri ng recipe",
  "Show more recipes": "Ipakita pa ang mga recipe",
  "Missing a recipe for your ingredients?": "Wala pang recipe para sa iyong mga sangkap?",
  "Help shape the collection. Share an ingredient combination voluntarily; nothing from your fridge is uploaded automatically.": "Tumulong sa pagdagdag ng mga recipe. Kusang magbahagi ng kombinasyon ng sangkap; walang awtomatikong ipinapadalang laman ng ref.",
  "Suggest a combination on GitHub": "Magmungkahi ng kombinasyon sa GitHub",
  "Keep the meals you love. Saved on this browser only.": "Itabi ang mga paborito mong lutuin. Naka-save lang sa browser na ito.",
  "Your recipes": "Iyong mga recipe",
  "Show": "Ipakita",
  "All saved recipes": "Lahat ng naka-save",
  "Liked": "Nagustuhan",
  "Cooked": "Naluto na",
  "Add your own items or missing ingredients from recipes. Saved on this browser.": "Idagdag ang bibilhin mo o ang kulang sa recipe. Naka-save sa browser na ito.",
  "Items to buy": "Mga bibilhin",
  "Your planned meals share fridge stock once. Unknown quantities need checking.": "Pinagsasama ang sangkap para sa mga planong lutuin. Tingnan ang mga daming hindi pa alam.",
  "Planned meals": "Mga planong lutuin",
  "Update from fridge": "I-update mula sa ref",
  "Use Update after changing your fridge. This recalculates items to buy, including items you removed or checked off.": "Gamitin ang I-update kapag binago ang laman ng ref. Kakalkulahin muli ang bibilhin, kasama ang mga inalis o namarkahan na.",
  "Grocery item": "Bibilhin",
  "Clear checked items": "Alisin ang mga namarkahan",
  "Plan a shopping trip": "Magplano ng pamimili",
  "Add your unchecked items to a Google Calendar event.": "Idagdag sa Google Calendar ang mga hindi pa namarkahang bibilhin.",
  "Shopping date": "Petsa ng pamimili",
  "Event name": "Pangalan ng event",
  "Add to Google Calendar ↗": "Idagdag sa Google Calendar ↗",
  "Opens Google Calendar for you to review and save an all-day event. You may need to sign in. Only the unchecked list is shared when you press the button. Later list changes do not update the event.": "Bubuksan ang Google Calendar para masuri at ma-save mo ang buong-araw na event. Maaaring kailangan mong mag-sign in. Mga hindi pa namarkahang item lang ang ibabahagi kapag pinindot mo ito. Hindi susunod sa event ang mga pagbabago sa listahan.",
  "Install app ↗": "I-install ang app ↗",
  "Close recipe": "Isara ang recipe",
  "Close install instructions": "Isara ang gabay sa pag-install",
  "Take your kitchen with you": "Dalhin ang iyong kusina",
  "Keep Fridge & Fork on your home screen.": "Ilagay ang Fridge & Fork sa iyong home screen.",
  "Open this page in Safari. Tap Share, then Add to Home Screen, then Add.": "Buksan ito sa Safari. Pindutin ang Share, Add to Home Screen, at Add.",
  "Open this page in Chrome. Open the menu and choose Install app or Add to Home screen.": "Buksan ito sa Chrome. Sa menu, piliin ang Install app o Add to Home screen.",
  "Computer": "Kompyuter",
  "In Chrome or Edge, look for the install icon in the address bar. If installation isn’t available, bookmark this page instead.": "Sa Chrome o Edge, hanapin ang install icon sa address bar. Kung wala, i-bookmark ang pahina.",
  "Open the app online once to prepare recipes for offline use. Photos and custom fonts may need a connection.": "Buksan muna online ang app para magamit ang mga recipe nang offline. Maaaring kailangan ng internet para sa mga larawan at font.",
  "Recipes are ready to use offline on this device.": "Handa na ang mga recipe para magamit offline sa device na ito.",
  "Offline setup is unavailable. You can still use the app online.": "Hindi maihanda ang offline na paggamit. Magagamit pa rin ang app online.",
  "This browser supports online use only.": "Online lang magagamit sa browser na ito.",
  "Saved on this device": "Naka-save sa device na ito",
  "Fridge changes could not be saved on this device.": "Hindi ma-save sa device ang pagbabago sa ref.",
  "Filipino recipes use metric by default.": "Metric ang karaniwang sukat para sa mga pagkaing Pinoy.",
  "International includes many countries; metric is the default.": "Maraming bansa ang saklaw nito; metric ang karaniwang sukat.",
  "Metric measurements by default.": "Metric ang karaniwang sukat.",
  " Change them in More options.": " Baguhin sa Iba pang pagpipilian.",
  "Limit: 100 ingredients, 80 characters per name.": "Hanggang 100 sangkap at 80 karakter bawat pangalan.",
  "Add quantities below to check portions. Blank means quantity unknown.": "Ilagay ang dami para masuri kung sapat. Kung blangko, hindi pa alam ang dami.",
  "Choose type…": "Pumili ng uri…",
  "Amount?": "Dami?",
  "No exact match in this collection yet.": "Wala pang eksaktong tugma sa koleksiyong ito.",
  "Ready to cook": "Handa nang lutuin",
  "Check quantities": "Tingnan ang dami",
  "Needs ingredients": "May kulang na sangkap",
  "All required quantities are covered.": "Sapat ang dami ng lahat ng kailangang sangkap.",
  "Meals from what you have": "Lutuin mula sa mayroon ka",
  "Explore Filipino favourites": "Mga paboritong pagkaing Pinoy",
  "Explore everyday recipes": "Mga pang-araw-araw na recipe",
  "No matches with these filters. Try another ingredient, confirm rice or meat types, or turn off “Ready to cook only”.": "Walang tugma sa napili. Subukan ang ibang sangkap, tukuyin ang uri ng bigas o karne, o alisin ang “Handa nang lutuin lang”.",
  "View recipe ↗": "Tingnan ang recipe ↗",
  "View recipe": "Tingnan ang recipe",
  "Make these together": "Puwedeng lutuin nang magkasama",
  "Each dish serves your selected portions. Shared ingredients are added together.": "Bawat lutuin ay para sa napiling bilang ng kakain. Pinagsasama ang dami ng magkakaparehong sangkap.",
  "Add meal to shopping list": "Idagdag sa bibilhin",
  "Required ingredients": "Mga kailangang sangkap",
  "Optional extras": "Mga puwedeng idagdag",
  "Method": "Paraan ng pagluluto",
  "Cooking and storage": "Pagluluto at pag-iimbak",
  "Possible substitution": "Puwedeng ipalit",
  "Recipe origin & testing": "Pinagmulan at pagsubok",
  "Kitchen test: pending. No recipe photos are used.": "Hindi pa nasusubukan sa kusina. Walang ginagamit na larawan ng recipe.",
  "Sourcing policy": "Patakaran sa pinagmulan",
  "Source recipe": "Orihinal na recipe",
  "Source revision": "Bersiyon ng pinagmulan",
  "Contributors and history": "Mga nag-ambag at kasaysayan",
  "Help improve this recipe": "Tumulong na mapahusay ang recipe",
  "Share cooking results or an unmatched ingredient combination voluntarily. Nothing is sent automatically.": "Kusang ibahagi ang resulta ng pagluluto o kombinasyong walang tugma. Walang awtomatikong ipinapadala.",
  "Report a recipe issue on GitHub": "Iulat ang problema sa recipe sa GitHub",
  "Clear all fridge ingredients saved on this device?": "Alisin ang lahat ng sangkap na naka-save sa device na ito?",
  "Saved": "Naka-save",
  "Save recipe": "I-save ang recipe",
  "Like": "Gusto ko ito",
  "Mark cooked": "Markahang naluto na",
  "You liked this recipe": "Nagustuhan mo ang recipe na ito",
  "You’ve cooked this before": "Naluto mo na ito dati",
  "Add missing ingredients to groceries": "Idagdag sa bibilhin ang kulang",
  "Your notebook is empty. Open a recipe and save it, like it, or mark it cooked.": "Wala ka pang naitabi. Buksan ang recipe at i-save, gustuhin, o markahang naluto na.",
  "No recipes in this view yet.": "Wala pang recipe sa listahang ito.",
  "Saved for later": "Naka-save para sa susunod",
  "Add missing groceries": "Idagdag ang kulang sa bibilhin",
  "Remove from notebook": "Alisin sa mga recipe ko",
  "Your list is empty. Add ingredients from a saved recipe or type an item above.": "Wala pang bibilhin. Magdagdag mula sa recipe o mag-type sa itaas.",
  "Also on your manual list; check whether you need extra.": "Nasa sarili mo ring listahan; tingnan kung kailangan ng dagdag.",
  "Remove": "Alisin",
  "Plan updated. Some fridge quantities still need checking.": "Na-update ang plano. May mga dami pa sa ref na kailangang tingnan.",
  "Plan updated from your fridge.": "Na-update ang plano mula sa ref.",
  "Item added.": "Naidagdag na.",
  "Add an item to buy before planning your trip.": "Magdagdag muna ng bibilhin bago magplano ng pamimili.",
  "Review the event in Google Calendar and press Save. Your list stays here.": "Suriin ang event sa Google Calendar at pindutin ang Save. Mananatili rito ang listahan.",
  "Allow pop-ups for this app, then try again.": "Payagan ang pop-up para sa app, saka subukan muli.",
  "Saved data could not be read. Changes may last only for this visit.": "Hindi mabasa ang naka-save. Maaaring mawala ang pagbabago kapag isinara ito.",
  "Your browser could not save these changes. They will last only for this visit.": "Hindi ma-save ng browser ang mga pagbabago. Mananatili lang ang mga ito habang bukas ito.",
  "Recipe instructions and ingredient names are currently in English.": "Nasa English pa ang paraan ng pagluluto at mga pangalan ng sangkap.",
  "e.g. eggs, broccoli, rice": "hal. itlog, broccoli, kanin",
  "e.g. milk or 6 bananas": "hal. gatas o 6 na saging",
  "55 recipes, including 29 Filipino dishes. Original drafts and credited open-license adaptations; not yet kitchen-tested. Easy means straightforward techniques, Intermediate needs more coordination, and Chef level involves several stages or careful heat control. These are app estimates, not chef certification. Food preferences use required ingredients; check product labels for allergens.": "55 recipe, kabilang ang 29 pagkaing Pinoy. Mga paunang recipe at adaptasyong may bukas na lisensiya at pagkilala sa pinagmulan; hindi pa nasusubukan sa kusina. Madali: simpleng paraan. Katamtaman: mas maraming kailangang sabayan. Pang-chef: maraming yugto o maingat na pagkontrol ng init. Tantiya lang ito ng app, hindi sertipikasyon. Batay sa kailangang sangkap ang diyeta; tingnan ang label para sa allergen."
};
  const key = 'fridge-fork-language';
  let language = 'en';
  try { if (localStorage.getItem(key) === 'fil') language = 'fil'; } catch {}
  function t(text) {
    if (language === 'en' || typeof text !== 'string') return text;
    if (Object.hasOwn(filipino, text)) return filipino[text];
    const patterns = [
      [/^(\d+) recipes · (\d+) servings$/, (_, n, s) => `${n} recipe · Para sa ${s} tao`],
      [/^Show more recipes \((\d+) remaining\)$/, (_, n) => `Ipakita pa (${n} natitira)`],
      [/^(\d+) to buy$/, (_, n) => `${n} bibilhin`],
      [/^(.+) · (\d+) servings$/, (_, name, n) => `${name} · Para sa ${n} tao`],
      [/^(\d+) min estimate$/, (_, n) => `Tinatayang ${n} minuto`],
      [/^(\d+) servings$/, (_, n) => `Para sa ${n} tao`],
      [/^Remove (.+)$/, (_, name) => `Alisin: ${name}`],
      [/^Quantity of (.+)$/, (_, name) => `Dami ng ${name}`],
      [/^Unit for (.+)$/, (_, name) => `Sukat para sa ${name}`],
      [/^Specify (.+)$/, (_, name) => `Tukuyin: ${name}`],
      [/^Missing (.+)$/, (_, name) => `Kulang: ${name}`],
      [/^More (.+)$/, (_, name) => `Dagdag na ${name}`],
      [/^Check quantities or units: (.+)$/, (_, names) => `Tingnan ang dami o sukat: ${names}`],
      [/^(.+) to buy for your planned meals$/, (_, amount) => `${amount} na bibilhin para sa mga plano`],
      [/^Using (metric|US) measurements\. Choosing a cuisine resets to its default\.$/, (_, unit) => `${unit} ang sukat. Babalik sa karaniwang sukat kapag nagpalit ng uri ng pagkain.`],
      [/^Shopping plan updated\. Shared ingredients counted once\.(.*)$/, (_, rest) => 'Na-update ang plano. Isang beses lang binilang ang magkakaparehong sangkap.' + rest.replace(' Check quantities for ', ' Tingnan ang dami ng ')]
    ];
    for (const [pattern, render] of patterns) if (pattern.test(text)) return text.replace(pattern, render);
    if (text.includes(' · ')) return text.split(' · ').map(t).join(' · ');
    for (const [source, target] of Object.entries(filipino)) {
      if (source.endsWith('.') && text.startsWith(source)) return target + t(text.slice(source.length));
    }
    return text;
  }
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    for (const attr of ['aria-label', 'placeholder']) {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`))));
    }
    const select = document.querySelector('#language-select');
    if (select) select.value = language;
  }
  function setLanguage(value) {
    language = value === 'fil' ? 'fil' : 'en';
    let saved = true;
    try { localStorage.setItem(key, language); } catch { saved = false; }
    apply();
    // Dismiss transient feedback from the previous language; saved lists are untouched.
    document.querySelectorAll('#notice, #grocery-status, #plan-feedback, #calendar-status, #recipe-grocery-feedback').forEach(el => { el.textContent = ''; });
    document.dispatchEvent(new Event('languagechange'));
    return saved;
  }
  if (typeof document !== 'undefined') {
    apply();
    document.querySelector('#language-select').addEventListener('change', event => {
      const saved = setLanguage(event.target.value);
      const note = document.querySelector('#language-note');
      note.textContent = t('Recipe instructions and ingredient names are currently in English.') + (saved ? '' : language === 'fil' ? ' Hindi ma-save ang wika; para sa pagbisitang ito lang.' : ' Language could not be saved; this choice lasts for this visit.');
    });
  }
  return { t, setLanguage, get language() { return language; } };
})();
if (typeof module !== 'undefined') module.exports = I18n;
