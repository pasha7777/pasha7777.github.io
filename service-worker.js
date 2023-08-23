

import { offlineFallback } from "workbox-recipes";
import { setDefaultHandler } from "workbox-routing";
import { NetworkOnly } from "workbox-strategies";

//Активы хэше, чтобы увидеть, изменился ли содержание.
const assetHashes = self.__WB_MANIFEST;
console.log(assetHashes);

// Устанавливает только обработчик сети по умолчанию, но подумайте о том, чтобы написать свои собственные обработчики!
setDefaultHandler(new NetworkOnly());

// HTML, чтобы служить, когда сайт в автономном режиме
offlineFallback({
  pageFallback: "/offline.html",
});
