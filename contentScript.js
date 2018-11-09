const CHECK_INTERVAL_MS = 500;

const ROOM_MAPPING = {
  fiji: 'https://hangouts.google.com/hangouts/_/nylas.com/downstairs',
  mavericks: 'https://hangouts.google.com/hangouts/_/nylas.com/mavericks',
  fishbowl: 'https://hangouts.google.com/hangouts/_/nylas.com/fishbowl',
  small: 'https://hangouts.google.com/hangouts/_/nylas.com/small-conf',
  large: 'https://hangouts.google.com/hangouts/_/nylas.com/large-conf',
  uluwatu: 'https://hangouts.google.com/hangouts/_/nylas.com/uluwatu',
  couches: 'https://hangouts.google.com/hangouts/_/nylas.com/couches',
  teton: 'https://hangouts.google.com/hangouts/_/nylas.com/grand-teton',
  tables: 'https://hangouts.google.com/hangouts/_/nylas.com/downstairs',
  olympic: 'https://hangouts.google.com/hangouts/_/nylas.com/olympic',
}

function checkLoop() {
  LOCATION_FORM_PATH = '.FrSOzf .whsOnd.zHQkBf'
  Array.from(document.querySelectorAll(LOCATION_FORM_PATH)).forEach((el) => {
    if (el.value.length === 0) return
    if (/http/i.test(el.value)) return  // Don't override links!
    for (const key of Object.keys(ROOM_MAPPING)) {
      if (RegExp(key, 'i').test(el.value)) {
        el.value = ROOM_MAPPING[key]
        break;
      }
    }
  })
}

setInterval(checkLoop, CHECK_INTERVAL_MS)
