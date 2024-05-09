"use client";

if (typeof window !== "undefined") {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });

  function randomNotification() {
    const options = {
      body: "Hello There! Body",
      icon: "/icon512_rounded.png",
    };

    new Notification("Hey there!", options);
    setTimeout(randomNotification, 30000);
  }
}
