function FindProxyForURL(url, host) {
   if (shExpMatch(host, "*.targpatrol.local")) {
      return "PROXY targpatrol.local:80";
   }
   return "DIRECT";
}
