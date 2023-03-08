const browser = () => {
    return -1 !=
      (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR"))
      ? "Opera"
      : -1 != navigator.userAgent.indexOf("Chrome")
      ? "Google Chrome"
      : -1 != navigator.userAgent.indexOf("Safari")
      ? "Safari"
      : -1 != navigator.userAgent.indexOf("Firefox")
      ? "Firefox"
      : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode
      ? "IE"
      : "Unknown";
  };
  
  const platform = () => {
    return -1 != window.navigator.userAgent.indexOf("Windows NT 10.0")
      ? "Windows 10"
      : -1 != window.navigator.userAgent.indexOf("Windows NT 6.2")
      ? "Windows 8"
      : -1 != window.navigator.userAgent.indexOf("Windows NT 6.1")
      ? "Windows 7"
      : -1 != window.navigator.userAgent.indexOf("Windows NT 6.0")
      ? "Windows Vista"
      : -1 != window.navigator.userAgent.indexOf("Windows NT 5.1")
      ? "Windows XP"
      : -1 != window.navigator.userAgent.indexOf("Windows NT 5.0")
      ? "Windows 2000"
      : -1 != window.navigator.userAgent.indexOf("iPhone")
      ? "iPhone"
      : -1 != window.navigator.userAgent.indexOf("iPad")
      ? "iPad"
      : -1 != window.navigator.userAgent.indexOf("Android")
      ? "Android"
      : -1 != window.navigator.userAgent.indexOf("Mac")
      ? "Macintosh"
      : -1 != window.navi;
  }
  
  const body = document.querySelector('body');
  