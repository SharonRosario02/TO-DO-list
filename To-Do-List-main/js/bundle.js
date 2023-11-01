(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("form.add"),
      t = document.querySelector("#taskInput"),
      n = document.querySelector(".itemList");
    let o,
      s = [];
    function a(e) {
      if ("" != e && " " != e) {
        s.push(e);
        const t = document.createElement("div");
        (t.innerHTML = `\n                <div class="item">\n                <h5 class="itemName">${e}</h5>\n                <div class="itemIcons">\n                    <button class = "completeBtn">done</button>\n                    <button class = "deleteBtn">delete</button>\n                </div>\n                </div>\n            `),
          n.append(t),
          l(),
          (o = JSON.stringify(s)),
          localStorage.setItem("tasks", o);
      }
    }
    function c() {
      (n.innerHTML = ""),
        s.forEach((e) => {
          const t = document.createElement("div");
          (t.innerHTML = `\n                <div class="item">\n                <h5 class="itemName">${e}</h5>\n                <div class="itemIcons">\n                    <button class = "completeBtn">done</button>\n                    <button class = "deleteBtn">delete</button>\n                </div>\n                </div>\n            `),
            n.append(t);
        }),
        l(),
        (o = JSON.stringify(s)),
        localStorage.setItem("tasks", o);
    }
    function l() {
      document.querySelectorAll(".completeBtn").forEach((e, t) => {
        e.onclick = (e) => {
          (e.target.parentNode.parentNode.style.color = "green"),
            setTimeout(() => e.target.parentNode.parentNode.remove(), 1e3),
            s.splice(t, 1),
            (o = JSON.stringify(s)),
            localStorage.setItem("tasks", o),
            setTimeout(c, 1e3);
        };
      }),
        document.querySelectorAll(".deleteBtn").forEach((e, t) => {
          e.onclick = (e) => {
            e.target.parentNode.parentNode.remove(),
              s.splice(t, 1),
              (o = JSON.stringify(s)),
              localStorage.setItem("tasks", o),
              c();
          };
        });
    }
    localStorage.getItem("tasks")
      ? (s = JSON.parse(localStorage.getItem("tasks")))
      : a("You will see your tasks here"),
      c(),
      e.addEventListener("submit", (e) => {
        e.preventDefault(), a(t.value), (t.value = "");
      });
  });
})();
//# sourceMappingURL=bundle.js.map
