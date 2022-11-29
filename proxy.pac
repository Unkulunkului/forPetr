function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*targpatrol.local")) {
      return "PROXY localhost:443";
   }
   return "DIRECT";
}
