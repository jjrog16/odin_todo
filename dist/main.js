(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => c });
        var o = n(537),
          r = n.n(o),
          i = n(645),
          a = n.n(i)()(r());
        a.push([
          e.id,
          "body {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  flex: 1;\n}\n\n/* Projects */\n\n.add-item {\n  color: white;\n  background-color: red;\n  height: 32x;\n  text-align: center;\n  padding: 8px;\n  font-size: 24px;\n  /* Prevents highlighting text when user double-clicks*/\n  user-select: none;\n}\n\n.add-item:hover {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n}\n\n.project-item {\n  color: white;\n  padding: 8px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.delete-project {\n  font-size: 16px;\n  padding: 8px;\n}\n\n.delete-project:hover {\n  background-color: red;\n  color: white;\n  cursor: pointer;\n}\n\n.sidebar {\n  width: 300px;\n  background: black;\n  flex-shrink: 0;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n\n.section-title {\n  font-size: 48px;\n}\n\n.sidebar .section-title {\n  color: white;\n  padding: 0px 8px 32px 8px;\n}\n\n\n/* Tasks */\n.main-container {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 800px;\n}\n\n.task-container {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-bottom {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n}\n\n.task-contents {\n  border: 1px solid #eee;\n  box-shadow: 2px 4px 16px rgba(0,0,0,.06);\n  border-radius: 4px;\n  width: 400px;\n  display: flex;\n  padding: 32px;\n  margin: 32px;\n}\n\n.task-top {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.task-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n}\n\n.task-bottom {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n.task-holder {\n  width: 400px;\n}\n\n.delete-task {\n  height: 32x;\n  text-align: center;\n  padding: 8px;\n}\n.delete-task:hover {\n  background-color: red;\n  color: white;\n  cursor: pointer;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA,aAAa;;AAEb;EACE,YAAY;EACZ,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,sDAAsD;EACtD,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;;AAGA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;;AAGA,UAAU;AACV;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;AAErB;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;EACxC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB",
            sourcesContent: [
              "body {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n.content {\n  display: flex;\n  flex: 1;\n}\n\n/* Projects */\n\n.add-item {\n  color: white;\n  background-color: red;\n  height: 32x;\n  text-align: center;\n  padding: 8px;\n  font-size: 24px;\n  /* Prevents highlighting text when user double-clicks*/\n  user-select: none;\n}\n\n.add-item:hover {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n}\n\n.project-item {\n  color: white;\n  padding: 8px;\n  font-size: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.delete-project {\n  font-size: 16px;\n  padding: 8px;\n}\n\n.delete-project:hover {\n  background-color: red;\n  color: white;\n  cursor: pointer;\n}\n\n.sidebar {\n  width: 300px;\n  background: black;\n  flex-shrink: 0;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n\n.section-title {\n  font-size: 48px;\n}\n\n.sidebar .section-title {\n  color: white;\n  padding: 0px 8px 32px 8px;\n}\n\n\n/* Tasks */\n.main-container {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 800px;\n}\n\n.task-container {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-bottom {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n}\n\n.task-contents {\n  border: 1px solid #eee;\n  box-shadow: 2px 4px 16px rgba(0,0,0,.06);\n  border-radius: 4px;\n  width: 400px;\n  display: flex;\n  padding: 32px;\n  margin: 32px;\n}\n\n.task-top {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.task-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n}\n\n.task-bottom {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n.task-holder {\n  width: 400px;\n}\n\n.delete-task {\n  height: 32x;\n  text-align: center;\n  padding: 8px;\n}\n.delete-task:hover {\n  background-color: red;\n  color: white;\n  cursor: pointer;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const c = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var A = [].concat(e[l]);
                (o && a[A[0]]) ||
                  (void 0 !== i &&
                    (void 0 === A[5] ||
                      (A[1] = "@layer"
                        .concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")
                        .concat(A[1], "}")),
                    (A[5] = i)),
                  n &&
                    (A[2]
                      ? ((A[1] = "@media "
                          .concat(A[2], " {")
                          .concat(A[1], "}")),
                        (A[2] = n))
                      : (A[2] = n)),
                  r &&
                    (A[4]
                      ? ((A[1] = "@supports ("
                          .concat(A[4], ") {")
                          .concat(A[1], "}")),
                        (A[4] = r))
                      : (A[4] = "".concat(r))),
                  t.push(A));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              i = "/*# ".concat(r, " */"),
              a = n.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(n.sourceRoot || "")
                  .concat(e, " */");
              });
            return [t].concat(a).concat([i]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = o.base ? s[0] + o.base : s[0],
              A = i[l] || 0,
              d = "".concat(l, " ").concat(A);
            i[l] = A + 1;
            var u = n(d),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(p);
            else {
              var f = r(p, o);
              (o.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: f, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var i = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              t[c].references--;
            }
            for (var s = o(e, r), l = 0; l < i.length; l++) {
              var A = n(i[l]);
              0 === t[A].references && (t[A].updater(), t.splice(A, 1));
            }
            i = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { id: o, exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(379),
        t = n.n(e),
        o = n(795),
        r = n.n(o),
        i = n(569),
        a = n.n(i),
        c = n(565),
        s = n.n(c),
        l = n(216),
        A = n.n(l),
        d = n(589),
        u = n.n(d),
        p = n(426),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = s()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = r()),
        (f.insertStyleElement = A()),
        t()(p.Z, f),
        p.Z && p.Z.locals && p.Z.locals;
      const g = (() => {
        const e = document.querySelector(".task-container");
        function t(e, t) {
          return t.projectTasks.findIndex((t) => t.id == e);
        }
        return {
          createTaskView: function (n) {
            console.log(`Task created -> ${JSON.stringify(n)}`),
              console.log(`Task id: ${n.id}`),
              document.createElement("div").setAttribute("class", "task-item");
            let o = document.createElement("div");
            o.setAttribute("class", "task-left");
            let r = document.createElement("input");
            r.setAttribute("type", "checkbox"),
              r.setAttribute("class", "radio-button");
            let i = document.createElement("div");
            i.setAttribute("class", "task-contents"),
              i.setAttribute("id", `task${n.id}`);
            let a = document.createElement("div");
            a.setAttribute("class", "task-holder");
            let c = document.createElement("div");
            c.setAttribute("class", "task-top");
            let s = document.createElement("input");
            s.setAttribute("class", "task-name"),
              s.setAttribute("value", n.taskName),
              s.addEventListener("change", (e) => {
                !(function (e, n) {
                  let o = e.target.value,
                    r = m.getCurrentProjectHighlighted();
                  console.log(`myProjectId: ${r}`);
                  let i = C.getProjectIdIndex(r);
                  console.log(`locationOfProject: ${i}`);
                  let a = t(n, C.getProject(r));
                  console.log(`locationOfTask: ${a}`),
                    C.upsert(i, a, o),
                    console.log(`${C.getProject(r)}`);
                })(e, n.id);
              });
            let l = document.createElement("div");
            l.setAttribute("class", "task-bottom");
            let A = document.createElement("div");
            A.setAttribute("class", "delete-task"),
              A.appendChild(document.createTextNode("Delete")),
              A.addEventListener("click", () => {
                var e, t;
                (e = m.getCurrentProjectHighlighted()),
                  (t = n.id),
                  C.deleteTaskInProject(e, t),
                  document.getElementById(`task${t}`).remove();
              }),
              o.appendChild(r),
              c.appendChild(s),
              l.appendChild(A),
              a.appendChild(c),
              a.appendChild(l),
              i.appendChild(o),
              i.appendChild(a);
            let d = document.querySelector(".removable");
            d.appendChild(i), e.appendChild(d);
          },
          clearTaskScreen: function () {
            let e = document.querySelector(".removable");
            e && e.remove();
          },
          initRemovableTaskContainer: function () {
            let t = document.createElement("div");
            t.setAttribute("class", "removable"), e.appendChild(t);
          },
          getTaskIdIndex: t,
          saveTaskView: function (e) {
            let t = m.getCurrentProjectHighlighted(),
              n = C.getProjectIdIndex(t);
            C.upsert(n, null, e);
          },
        };
      })();
      class h {
        static #e = 0;
        taskCounter;
        constructor() {
          (this.taskCounter = ++h.#e),
            (this.id = this.taskCounter),
            (this.taskName = "");
        }
        init() {
          g.createTaskView(this), g.saveTaskView(this);
        }
      }
      const C = (() => {
          let e = [];
          function t(t) {
            return e.findIndex((e) => e.id == t);
          }
          return {
            saveProject: function (t) {
              e.push(t);
            },
            deleteProject: function (t) {
              e.splice(t, 1);
            },
            getProject: function (t) {
              return e.find((e) => e.id == t);
            },
            getProjectArrayLength: function () {
              return e.length;
            },
            getProjectIdIndex: t,
            upsert: function (t, n, o) {
              null == n
                ? e[t].projectTasks.push(o)
                : (e[t].projectTasks[n].taskName = o);
            },
            deleteTaskInProject: function (n, o) {
              let r = t(n),
                i = (function (n) {
                  let o = t(m.getCurrentProjectHighlighted());
                  return e[o].projectTasks.findIndex((e) => e.id == n);
                })(o);
              e[r].projectTasks.splice(i, 1);
            },
            updateProjectName: function (t, n) {
              e[t].projectName = n;
            },
          };
        })(),
        m = (() => {
          const e = document.querySelector(".project-container");
          let t,
            n = 0,
            o = !1;
          function r() {
            return n;
          }
          function i(e) {
            n = e;
          }
          function a() {
            return o;
          }
          function c(e) {
            o = e;
          }
          return {
            createProjectView: function (n) {
              let o = document.createElement("div");
              o.setAttribute("class", "project-item"),
                o.setAttribute("id", `project${n}`);
              let s = document.createElement("input");
              s.setAttribute("value", `Project ${n}`),
                s.addEventListener("change", (e) => {
                  !(function (e) {
                    let t = e.target.value,
                      n = r(),
                      o = C.getProjectIdIndex(n);
                    C.updateProjectName(o, t);
                  })(e);
                }),
                o.addEventListener("click", () => {
                  (function (e, n) {
                    if ((0 == r() && (i(n), c(!1)), r != n)) {
                      let e = document.getElementById(`project${r()}`);
                      null != e &&
                        ((e.style.backgroundColor = "black"),
                        (e.style.color = "white"),
                        (t = e));
                    }
                    i(n),
                      (e.style.backgroundColor = "white"),
                      (e.style.color = "black"),
                      c(!0),
                      (function (e) {
                        g.clearTaskScreen(), g.initRemovableTaskContainer();
                        let t = C.getProject(e);
                        if (
                          (console.log(
                            `Loading Project Tasks. Here is your project -> ${JSON.stringify(
                              t
                            )}`
                          ),
                          null != t.projectTasks)
                        )
                          for (let e = 0; e < t.projectTasks.length; e++)
                            g.createTaskView(t.projectTasks[e]);
                      })(n);
                  })(o, n),
                    console.log(`Project ${n} clicked`),
                    console.log(`${JSON.stringify(C.getProject(n))}`);
                });
              let l = document.createElement("div");
              l.setAttribute("class", "delete-project"),
                l.appendChild(document.createTextNode("x")),
                l.addEventListener("click", () => {
                  var e;
                  (e = n),
                    console.log(`Status before delete -> ${a()}`),
                    C.deleteProject(e),
                    document.getElementById(`project${e}`).remove(),
                    c(!1),
                    console.log(`Status after delete -> ${a()}`);
                }),
                o.appendChild(s),
                o.appendChild(l),
                e.appendChild(o);
            },
            setCurrentProjectHighlighted: i,
            getCurrentProjectHighlighted: r,
            getIsHighlightedStatus: a,
            setIsHighlightedStatus: c,
          };
        })();
      class E {
        static #e = C.getProjectArrayLength();
        projectCounter;
        constructor() {
          (this.projectCounter = ++E.#e),
            (this.id = this.projectCounter),
            (this.projectName = `Project ${this.projectCounter}`),
            (this.projectTasks = []);
        }
        init() {
          m.createProjectView(this.id),
            console.log(`The project has an ID of ${this.id}`);
        }
      }
      !(function () {
        let e = new E();
        e.init(), C.saveProject(e);
      })();
      const x = document.querySelector(".project-container");
      document
        .querySelector(".sidebar .add-item")
        .addEventListener("click", function () {
          console.log("New Project clicked");
          let e = new E();
          e.init(), C.saveProject(e);
        }),
        document
          .querySelector(".main-bottom .add-item")
          .addEventListener("click", function () {
            console.log("New Task clicked"),
              console.log(
                `You created a new task and the project is: ${m.getCurrentProjectHighlighted()}`
              ),
              (x.childNodes.length > 0) & m.getIsHighlightedStatus() &&
                new h().init();
          }),
        g.initRemovableTaskContainer();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoid0ZBR0lBLEUsTUFBMEIsR0FBNEIsS0FFMURBLEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksNm1FQUE4bUUsR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMsNkJBQTZCLE1BQVEsR0FBRyxTQUFXLGdsQ0FBZ2xDLGVBQWlCLENBQUMsOG1FQUE4bUUsV0FBYSxNQUVsOEssVyxRQ0RBRCxFQUFPRSxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQU8sR0E2RlgsT0EzRkFBLEVBQUtDLFNBQVcsV0FDZCxPQUFPQyxLQUFLQyxLQUFJLFNBQVVDLEdBQ3hCLElBQUlDLEVBQVUsR0FDVkMsT0FBK0IsSUFBWkYsRUFBSyxHQTRCNUIsT0ExQklBLEVBQUssS0FDUEMsR0FBVyxjQUFjRSxPQUFPSCxFQUFLLEdBQUksUUFHdkNBLEVBQUssS0FDUEMsR0FBVyxVQUFVRSxPQUFPSCxFQUFLLEdBQUksT0FHbkNFLElBQ0ZELEdBQVcsU0FBU0UsT0FBT0gsRUFBSyxHQUFHSSxPQUFTLEVBQUksSUFBSUQsT0FBT0gsRUFBSyxJQUFNLEdBQUksT0FHNUVDLEdBQVdOLEVBQXVCSyxHQUU5QkUsSUFDRkQsR0FBVyxLQUdURCxFQUFLLEtBQ1BDLEdBQVcsS0FHVEQsRUFBSyxLQUNQQyxHQUFXLEtBR05BLEtBQ05JLEtBQUssS0FJVlQsRUFBS1UsRUFBSSxTQUFXQyxFQUFTQyxFQUFPQyxFQUFRQyxFQUFVQyxHQUM3QixpQkFBWkosSUFDVEEsRUFBVSxDQUFDLENBQUMsS0FBTUEsT0FBU0ssS0FHN0IsSUFBSUMsRUFBeUIsR0FFN0IsR0FBSUosRUFDRixJQUFLLElBQUlLLEVBQUssRUFBR0EsRUFBS2hCLEtBQUtNLE9BQVFVLElBQU0sQ0FDdkMsSUFBSXJCLEVBQUtLLEtBQUtnQixHQUFJLEdBRVIsTUFBTnJCLElBQ0ZvQixFQUF1QnBCLElBQU0sR0FLbkMsSUFBSyxJQUFJc0IsRUFBTSxFQUFHQSxFQUFNUixFQUFRSCxPQUFRVyxJQUFPLENBQzdDLElBQUlmLEVBQU8sR0FBR0csT0FBT0ksRUFBUVEsSUFFekJOLEdBQVVJLEVBQXVCYixFQUFLLFdBSXJCLElBQVZXLFNBQ2MsSUFBWlgsRUFBSyxLQUdkQSxFQUFLLEdBQUssU0FBU0csT0FBT0gsRUFBSyxHQUFHSSxPQUFTLEVBQUksSUFBSUQsT0FBT0gsRUFBSyxJQUFNLEdBQUksTUFBTUcsT0FBT0gsRUFBSyxHQUFJLE1BRi9GQSxFQUFLLEdBQUtXLEdBT1ZILElBQ0dSLEVBQUssSUFHUkEsRUFBSyxHQUFLLFVBQVVHLE9BQU9ILEVBQUssR0FBSSxNQUFNRyxPQUFPSCxFQUFLLEdBQUksS0FDMURBLEVBQUssR0FBS1EsR0FIVlIsRUFBSyxHQUFLUSxHQU9WRSxJQUNHVixFQUFLLElBR1JBLEVBQUssR0FBSyxjQUFjRyxPQUFPSCxFQUFLLEdBQUksT0FBT0csT0FBT0gsRUFBSyxHQUFJLEtBQy9EQSxFQUFLLEdBQUtVLEdBSFZWLEVBQUssR0FBSyxHQUFHRyxPQUFPTyxJQU94QmQsRUFBS0wsS0FBS1MsTUFJUEosSSxRQ2xHVEosRUFBT0UsUUFBVSxTQUFVTSxHQUN6QixJQUFJQyxFQUFVRCxFQUFLLEdBQ2ZnQixFQUFhaEIsRUFBSyxHQUV0QixJQUFLZ0IsRUFDSCxPQUFPZixFQUdULEdBQW9CLG1CQUFUZ0IsS0FBcUIsQ0FDOUIsSUFBSUMsRUFBU0QsS0FBS0UsU0FBU0MsbUJBQW1CQyxLQUFLQyxVQUFVTixNQUN6RE8sRUFBTywrREFBK0RwQixPQUFPZSxHQUM3RU0sRUFBZ0IsT0FBT3JCLE9BQU9vQixFQUFNLE9BQ3BDRSxFQUFhVCxFQUFXVSxRQUFRM0IsS0FBSSxTQUFVNEIsR0FDaEQsTUFBTyxpQkFBaUJ4QixPQUFPYSxFQUFXWSxZQUFjLElBQUl6QixPQUFPd0IsRUFBUSxVQUU3RSxNQUFPLENBQUMxQixHQUFTRSxPQUFPc0IsR0FBWXRCLE9BQU8sQ0FBQ3FCLElBQWdCbkIsS0FBSyxNQUduRSxNQUFPLENBQUNKLEdBQVNJLEtBQUssUSxRQ2xCeEIsSUFBSXdCLEVBQWMsR0FFbEIsU0FBU0MsRUFBcUJDLEdBRzVCLElBRkEsSUFBSUMsR0FBVSxFQUVMMUIsRUFBSSxFQUFHQSxFQUFJdUIsRUFBWXpCLE9BQVFFLElBQ3RDLEdBQUl1QixFQUFZdkIsR0FBR3lCLGFBQWVBLEVBQVksQ0FDNUNDLEVBQVMxQixFQUNULE1BSUosT0FBTzBCLEVBR1QsU0FBU0MsRUFBYXJDLEVBQU1zQyxHQUkxQixJQUhBLElBQUlDLEVBQWEsR0FDYkMsRUFBYyxHQUVUOUIsRUFBSSxFQUFHQSxFQUFJVixFQUFLUSxPQUFRRSxJQUFLLENBQ3BDLElBQUlOLEVBQU9KLEVBQUtVLEdBQ1piLEVBQUt5QyxFQUFRRyxLQUFPckMsRUFBSyxHQUFLa0MsRUFBUUcsS0FBT3JDLEVBQUssR0FDbERzQyxFQUFRSCxFQUFXMUMsSUFBTyxFQUMxQnNDLEVBQWEsR0FBRzVCLE9BQU9WLEVBQUksS0FBS1UsT0FBT21DLEdBQzNDSCxFQUFXMUMsR0FBTTZDLEVBQVEsRUFDekIsSUFBSUMsRUFBb0JULEVBQXFCQyxHQUN6Q1MsRUFBTSxDQUNSQyxJQUFLekMsRUFBSyxHQUNWUSxNQUFPUixFQUFLLEdBQ1owQyxVQUFXMUMsRUFBSyxHQUNoQlUsU0FBVVYsRUFBSyxHQUNmVyxNQUFPWCxFQUFLLElBR2QsSUFBMkIsSUFBdkJ1QyxFQUNGVixFQUFZVSxHQUFtQkksYUFDL0JkLEVBQVlVLEdBQW1CSyxRQUFRSixPQUNsQyxDQUNMLElBQUlJLEVBQVVDLEVBQWdCTCxFQUFLTixHQUNuQ0EsRUFBUVksUUFBVXhDLEVBQ2xCdUIsRUFBWWtCLE9BQU96QyxFQUFHLEVBQUcsQ0FDdkJ5QixXQUFZQSxFQUNaYSxRQUFTQSxFQUNURCxXQUFZLElBSWhCUCxFQUFZN0MsS0FBS3dDLEdBR25CLE9BQU9LLEVBR1QsU0FBU1MsRUFBZ0JMLEVBQUtOLEdBQzVCLElBQUljLEVBQU1kLEVBQVFlLE9BQU9mLEdBZXpCLE9BZEFjLEVBQUlFLE9BQU9WLEdBRUcsU0FBaUJXLEdBQzdCLEdBQUlBLEVBQVEsQ0FDVixHQUFJQSxFQUFPVixNQUFRRCxFQUFJQyxLQUFPVSxFQUFPM0MsUUFBVWdDLEVBQUloQyxPQUFTMkMsRUFBT1QsWUFBY0YsRUFBSUUsV0FBYVMsRUFBT3pDLFdBQWE4QixFQUFJOUIsVUFBWXlDLEVBQU94QyxRQUFVNkIsRUFBSTdCLE1BQ3pKLE9BR0ZxQyxFQUFJRSxPQUFPVixFQUFNVyxRQUVqQkgsRUFBSUksVUFPVjVELEVBQU9FLFFBQVUsU0FBVUUsRUFBTXNDLEdBRy9CLElBQUltQixFQUFrQnBCLEVBRHRCckMsRUFBT0EsR0FBUSxHQURmc0MsRUFBVUEsR0FBVyxJQUdyQixPQUFPLFNBQWdCb0IsR0FDckJBLEVBQVVBLEdBQVcsR0FFckIsSUFBSyxJQUFJaEQsRUFBSSxFQUFHQSxFQUFJK0MsRUFBZ0JqRCxPQUFRRSxJQUFLLENBQy9DLElBQ0lpRCxFQUFRekIsRUFES3VCLEVBQWdCL0MsSUFFakN1QixFQUFZMEIsR0FBT1osYUFLckIsSUFGQSxJQUFJYSxFQUFxQnZCLEVBQWFxQixFQUFTcEIsR0FFdENwQixFQUFLLEVBQUdBLEVBQUt1QyxFQUFnQmpELE9BQVFVLElBQU0sQ0FDbEQsSUFFSTJDLEVBQVMzQixFQUZLdUIsRUFBZ0J2QyxJQUlLLElBQW5DZSxFQUFZNEIsR0FBUWQsYUFDdEJkLEVBQVk0QixHQUFRYixVQUVwQmYsRUFBWWtCLE9BQU9VLEVBQVEsSUFJL0JKLEVBQWtCRyxLLFFDbkd0QixJQUFJRSxFQUFPLEdBb0NYbEUsRUFBT0UsUUFWUCxTQUEwQmlFLEVBQVFDLEdBQ2hDLElBQUlDLEVBeEJOLFNBQW1CQSxHQUNqQixRQUE0QixJQUFqQkgsRUFBS0csR0FBeUIsQ0FDdkMsSUFBSUMsRUFBY0MsU0FBU0MsY0FBY0gsR0FFekMsR0FBSUksT0FBT0MsbUJBQXFCSixhQUF1QkcsT0FBT0Msa0JBQzVELElBR0VKLEVBQWNBLEVBQVlLLGdCQUFnQkMsS0FDMUMsTUFBT0MsR0FFUFAsRUFBYyxLQUlsQkosRUFBS0csR0FBVUMsRUFHakIsT0FBT0osRUFBS0csR0FNQ1MsQ0FBVVgsR0FFdkIsSUFBS0UsRUFDSCxNQUFNLElBQUlVLE1BQU0sMkdBR2xCVixFQUFPVyxZQUFZWixLLFFDekJyQnBFLEVBQU9FLFFBUFAsU0FBNEJ3QyxHQUMxQixJQUFJdUMsRUFBVVYsU0FBU1csY0FBYyxTQUdyQyxPQUZBeEMsRUFBUXlDLGNBQWNGLEVBQVN2QyxFQUFRMEMsWUFDdkMxQyxFQUFReUIsT0FBT2MsRUFBU3ZDLEVBQVFBLFNBQ3pCdUMsSSxjQ0lUakYsRUFBT0UsUUFSUCxTQUF3Q21GLEdBQ3RDLElBQUlDLEVBQW1ELEtBRW5EQSxHQUNGRCxFQUFhRSxhQUFhLFFBQVNELEssUUM4RHZDdEYsRUFBT0UsUUFaUCxTQUFnQndDLEdBQ2QsSUFBSTJDLEVBQWUzQyxFQUFROEMsbUJBQW1COUMsR0FDOUMsTUFBTyxDQUNMZ0IsT0FBUSxTQUFnQlYsSUF6RDVCLFNBQWVxQyxFQUFjM0MsRUFBU00sR0FDcEMsSUFBSUMsRUFBTSxHQUVORCxFQUFJOUIsV0FDTitCLEdBQU8sY0FBY3RDLE9BQU9xQyxFQUFJOUIsU0FBVSxRQUd4QzhCLEVBQUloQyxRQUNOaUMsR0FBTyxVQUFVdEMsT0FBT3FDLEVBQUloQyxNQUFPLE9BR3JDLElBQUlOLE9BQWlDLElBQWRzQyxFQUFJN0IsTUFFdkJULElBQ0Z1QyxHQUFPLFNBQVN0QyxPQUFPcUMsRUFBSTdCLE1BQU1QLE9BQVMsRUFBSSxJQUFJRCxPQUFPcUMsRUFBSTdCLE9BQVMsR0FBSSxPQUc1RThCLEdBQU9ELEVBQUlDLElBRVB2QyxJQUNGdUMsR0FBTyxLQUdMRCxFQUFJaEMsUUFDTmlDLEdBQU8sS0FHTEQsRUFBSTlCLFdBQ04rQixHQUFPLEtBR1QsSUFBSUMsRUFBWUYsRUFBSUUsVUFFaEJBLEdBQTZCLG9CQUFUekIsT0FDdEJ3QixHQUFPLHVEQUF1RHRDLE9BQU9jLEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVW9CLE1BQWUsUUFNdElSLEVBQVErQyxrQkFBa0J4QyxFQUFLb0MsRUFBYzNDLEVBQVFBLFNBa0JqRGdELENBQU1MLEVBQWMzQyxFQUFTTSxJQUUvQlksT0FBUSxZQWpCWixTQUE0QnlCLEdBRTFCLEdBQWdDLE9BQTVCQSxFQUFhTSxXQUNmLE9BQU8sRUFHVE4sRUFBYU0sV0FBV0MsWUFBWVAsR0FZaENRLENBQW1CUixPLFFDakR6QnJGLEVBQU9FLFFBWlAsU0FBMkIrQyxFQUFLb0MsR0FDOUIsR0FBSUEsRUFBYVMsV0FDZlQsRUFBYVMsV0FBV0MsUUFBVTlDLE1BQzdCLENBQ0wsS0FBT29DLEVBQWFXLFlBQ2xCWCxFQUFhTyxZQUFZUCxFQUFhVyxZQUd4Q1gsRUFBYUwsWUFBWVQsU0FBUzBCLGVBQWVoRCxRQ1ZqRGlELEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJoRixJQUFqQmlGLEVBQ0gsT0FBT0EsRUFBYW5HLFFBR3JCLElBQUlGLEVBQVNrRyxFQUF5QkUsR0FBWSxDQUNqRG5HLEdBQUltRyxFQUVKbEcsUUFBUyxJQU9WLE9BSEFvRyxFQUFvQkYsR0FBVXBHLEVBQVFBLEVBQU9FLFFBQVNpRyxHQUcvQ25HLEVBQU9FLFFDcEJmaUcsRUFBb0JJLEVBQUt2RyxJQUN4QixJQUFJd0csRUFBU3hHLEdBQVVBLEVBQU95RyxXQUM3QixJQUFPekcsRUFBaUIsUUFDeEIsSUFBTSxFQUVQLE9BREFtRyxFQUFvQk8sRUFBRUYsRUFBUSxDQUFFRyxFQUFHSCxJQUM1QkEsR0NMUkwsRUFBb0JPLEVBQUksQ0FBQ3hHLEVBQVMwRyxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hULEVBQW9CVyxFQUFFRixFQUFZQyxLQUFTVixFQUFvQlcsRUFBRTVHLEVBQVMyRyxJQUM1RUUsT0FBT0MsZUFBZTlHLEVBQVMyRyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsTUNKM0VWLEVBQW9CVyxFQUFJLENBQUM5RCxFQUFLbUUsSUFBVUosT0FBT0ssVUFBVUMsZUFBZUMsS0FBS3RFLEVBQUttRSxHLCtIQ1c5RXpFLEVBQVUsR0FFZEEsRUFBUStDLGtCQUFvQixJQUM1Qi9DLEVBQVF5QyxjQUFnQixJQUVsQnpDLEVBQVF5QixPQUFTLFNBQWMsS0FBTSxRQUUzQ3pCLEVBQVFlLE9BQVMsSUFDakJmLEVBQVE4QyxtQkFBcUIsSUFFaEIsSUFBSSxJQUFTOUMsR0FLSixLQUFXLFlBQWlCLFdBQTNDLE1DeEJENkUsRUFBb0IsTUFDeEIsTUFBTUMsRUFBZ0JqRCxTQUFTQyxjQUFjLG1CQXdINUMsU0FBU2lELEVBQWV4SCxFQUFJeUgsR0FFM0IsT0FEaUNBLEVBQVFDLGFBQWFDLFdBQVVDLEdBQVFBLEVBQUs1SCxJQUFNQSxJQTZCckYsTUFBTyxDQUNMNkgsZUE1SUYsU0FBd0JELEdBQ3RCRSxRQUFRQyxJQUFJLG1CQUFtQm5HLEtBQUtDLFVBQVUrRixNQUM5Q0UsUUFBUUMsSUFBSSxZQUFZSCxFQUFLNUgsTUFHZHNFLFNBQVNXLGNBQWMsT0FDN0JLLGFBQWEsUUFBUyxhQUcvQixJQUFJMEMsRUFBYzFELFNBQVNXLGNBQWMsT0FDekMrQyxFQUFZMUMsYUFBYSxRQUFTLGFBR2xDLElBQUkyQyxFQUFhM0QsU0FBU1csY0FBYyxTQUN4Q2dELEVBQVczQyxhQUFhLE9BQVEsWUFDaEMyQyxFQUFXM0MsYUFBYSxRQUFTLGdCQUdqQyxJQUFJNEMsRUFBa0I1RCxTQUFTVyxjQUFjLE9BQzdDaUQsRUFBZ0I1QyxhQUFhLFFBQVMsaUJBQ3RDNEMsRUFBZ0I1QyxhQUFhLEtBQU0sT0FBT3NDLEVBQUs1SCxNQUcvQyxJQUFJbUksRUFBZ0I3RCxTQUFTVyxjQUFjLE9BQzNDa0QsRUFBYzdDLGFBQWEsUUFBUyxlQUdwQyxJQUFJOEMsRUFBYTlELFNBQVNXLGNBQWMsT0FDeENtRCxFQUFXOUMsYUFBYSxRQUFTLFlBR2pDLElBQUkrQyxFQUFnQi9ELFNBQVNXLGNBQWMsU0FDM0NvRCxFQUFjL0MsYUFBYSxRQUFTLGFBRXBDK0MsRUFBYy9DLGFBQWEsUUFBU3NDLEVBQUtVLFVBRXpDRCxFQUFjRSxpQkFBaUIsVUFBV0MsS0FrRjVDLFNBQW9CNUQsRUFBRzZELEdBRXJCLElBQUlDLEVBQWtCOUQsRUFBRVIsT0FBT3VFLE1BRzNCQyxFQUFjQyxFQUErQkMsK0JBQ2pEaEIsUUFBUUMsSUFBSSxnQkFBZ0JhLEtBRzVCLElBQUlHLEVBQW9CQyxFQUFrQkMsa0JBQWtCTCxHQUM1RGQsUUFBUUMsSUFBSSxzQkFBc0JnQixLQUdsQyxJQUFJRyxFQUFpQjFCLEVBQWVpQixFQUFRTyxFQUFrQkcsV0FBV1AsSUFDekVkLFFBQVFDLElBQUksbUJBQW1CbUIsS0FFL0JGLEVBQWtCSSxPQUFPTCxFQUFtQkcsRUFBZ0JSLEdBRTVEWixRQUFRQyxJQUFJLEdBQUdpQixFQUFrQkcsV0FBV1AsTUFuRzFDUyxDQUFXYixFQUFPWixFQUFLNUgsT0FJekIsSUFBSXNKLEVBQWdCaEYsU0FBU1csY0FBYyxPQUMzQ3FFLEVBQWNoRSxhQUFhLFFBQVMsZUFHcEMsSUFBSWlFLEVBQWdCakYsU0FBU1csY0FBYyxPQUMzQ3NFLEVBQWNqRSxhQUFhLFFBQVMsZUFDcENpRSxFQUFjeEUsWUFBWVQsU0FBUzBCLGVBQWUsV0FDbER1RCxFQUFjaEIsaUJBQWlCLFNBQVMsS0E2QjFDLElBQTBCaUIsRUFBV2YsRUFBWGUsRUE1QldYLEVBQStCQywrQkE0Qi9CTCxFQTNCWWIsRUFBSzVILEdBNEJwRGdKLEVBQWtCUyxvQkFBb0JELEVBQVdmLEdBQ2pEbkUsU0FBU29GLGVBQWUsT0FBT2pCLEtBQVU5RSxZQXpCekNxRSxFQUFZakQsWUFBWWtELEdBRXhCRyxFQUFXckQsWUFBWXNELEdBRXZCaUIsRUFBY3ZFLFlBQVl3RSxHQUUxQnBCLEVBQWNwRCxZQUFZcUQsR0FDMUJELEVBQWNwRCxZQUFZdUUsR0FFMUJwQixFQUFnQm5ELFlBQVlpRCxHQUM1QkUsRUFBZ0JuRCxZQUFZb0QsR0FHNUIsSUFBSXdCLEVBQXlCckYsU0FBU0MsY0FBYyxjQUNwRG9GLEVBQXVCNUUsWUFBWW1ELEdBQ25DWCxFQUFjeEMsWUFBWTRFLElBd0UxQkMsZ0JBN0NGLFdBQ0UsSUFBSUMsRUFBWXZGLFNBQVNDLGNBQWMsY0FDcENzRixHQUNEQSxFQUFVbEcsVUEyQ1ptRywyQkFwSkYsV0FDRSxJQUFJSCxFQUF5QnJGLFNBQVNXLGNBQWMsT0FDcEQwRSxFQUF1QnJFLGFBQWEsUUFBUyxhQUM3Q2lDLEVBQWN4QyxZQUFZNEUsSUFrSjFCbkMsZUFBQUEsRUFDQXVDLGFBMURGLFNBQXNCbkMsR0FFcEIsSUFBSTRCLEVBQVlYLEVBQStCQywrQkFDM0NrQixFQUFpQmhCLEVBQWtCQyxrQkFBa0JPLEdBQ3pEUixFQUFrQkksT0FBT1ksRUFBZ0IsS0FBTXBDLE1BdEd6QixHQWtLMUIsTUFBTXFDLEVBR0pDLFNBQW9CLEVBSXBCQyxZQUVBQyxjQUNFL0osS0FBSzhKLGNBQWdCRixHQUFLLEVBQzFCNUosS0FBS0wsR0FBS0ssS0FBSzhKLFlBQ2Y5SixLQUFLaUksU0FBVyxHQUdsQitCLE9BRUUvQyxFQUFrQk8sZUFBZXhILE1BQ2pDaUgsRUFBa0J5QyxhQUFhMUosT0NqTG5DLE1BQU0ySSxFQUFvQixNQUV4QixJQUFJc0IsRUFBWSxHQWtCaEIsU0FBU3JCLEVBQWtCakosR0FFekIsT0FEb0NzSyxFQUFVM0MsV0FBVUYsR0FBV0EsRUFBUXpILElBQU1BLElBdUVuRixNQUFPLENBQ0x1SyxZQWpDRixTQUFxQkMsR0FDbkJGLEVBQVV4SyxLQUFLMEssSUFpQ2ZDLGNBMUJGLFNBQXVCekssR0FDckJzSyxFQUFVaEgsT0FBT3RELEVBQUksSUEwQnJCbUosV0F0RkYsU0FBb0JuSixHQUVsQixPQUR1QnNLLEVBQVVJLE1BQUtqRCxHQUFXQSxFQUFRekgsSUFBTUEsS0FzRi9EMkssc0JBUkYsV0FDRSxPQUFPTCxFQUFVM0osUUFRakJzSSxrQkFBQUEsRUFDQUcsT0E3REYsU0FBZ0J3QixFQUFjQyxFQUFXbEMsR0FHdkIsTUFBYmtDLEVBQ0RQLEVBQVVNLEdBQWNsRCxhQUFhNUgsS0FBSzZJLEdBRTFDMkIsRUFBVU0sR0FBY2xELGFBQWFtRCxHQUFXdkMsU0FBV0ssR0F3RDdEYyxvQkF0QkYsU0FBNkJELEVBQVdmLEdBQ3RDLElBQUl1QixFQUFpQmYsRUFBa0JPLEdBQ25Dc0IsRUF0RE4sU0FBbUNyQyxHQUNqQyxJQUFJdUIsRUFBaUJmLEVBQWtCSixFQUErQkMsZ0NBRXRFLE9BRGlDd0IsRUFBVU4sR0FBZ0J0QyxhQUFhQyxXQUFVQyxHQUFRQSxFQUFLNUgsSUFBTXlJLElBb0RuRnNDLENBQTBCdEMsR0FDNUM2QixFQUFVTixHQUFnQnRDLGFBQWFwRSxPQUFPd0gsRUFBWSxJQW9CMURFLGtCQWhERixTQUEyQmxILEVBQU82RSxHQUNoQzJCLEVBQVV4RyxHQUFPbUgsWUFBY3RDLEtBckRULEdBeUdwQkUsRUFBaUMsTUFFckMsTUFBTXFDLEVBQW1CNUcsU0FBU0MsY0FBYyxzQkFFaEQsSUFBSTRHLEVBSUFDLEVBQTZCLEVBQzdCQyxHQUFpQixFQWlGckIsU0FBU3ZDLElBQ1AsT0FBT3NDLEVBT1QsU0FBU0UsRUFBNkJ0TCxHQUNwQ29MLEVBQTZCcEwsRUFPL0IsU0FBU3VMLElBQ1AsT0FBT0YsRUFPVCxTQUFTRyxFQUF1QkMsR0FDOUJKLEVBQWlCSSxFQTZEbkIsTUFBTyxDQUNMQyxrQkF4REYsU0FBMkJsQyxHQUV6QixJQUFJbUMsRUFBYXJILFNBQVNXLGNBQWMsT0FDeEMwRyxFQUFXckcsYUFBYSxRQUFTLGdCQUNqQ3FHLEVBQVdyRyxhQUFhLEtBQU0sVUFBVWtFLEtBRXhDLElBQUl5QixFQUFjM0csU0FBU1csY0FBYyxTQUd6Q2dHLEVBQVkzRixhQUFhLFFBQVMsV0FBV2tFLEtBRzdDeUIsRUFBWTFDLGlCQUFpQixVQUFVQyxLQWtDekMsU0FBbUM1RCxHQUNqQyxJQUFJZ0gsRUFBcUJoSCxFQUFFUixPQUFPdUUsTUFFOUJDLEVBQWNFLElBQ2RDLEVBQW9CQyxFQUFrQkMsa0JBQWtCTCxHQUM1REksRUFBa0JnQyxrQkFBa0JqQyxFQUFtQjZDLEdBdENyREMsQ0FBMEJyRCxNQUc1Qm1ELEVBQVdwRCxpQkFBaUIsU0FBUyxNQTFIdEMsU0FBd0JkLEVBQVMrQixHQVNoQyxHQU5xQyxHQUFsQ1YsTUFDRHdDLEVBQTZCOUIsR0FDN0JnQyxHQUF1QixJQUl0QjFDLEdBQWdDVSxFQUFXLENBRTVDLElBQUlzQyxFQUFxQnhILFNBQVNvRixlQUFlLFVBQVVaLE9BR2xDLE1BQXRCZ0QsSUFDREEsRUFBbUIzSCxNQUFNNEgsZ0JBQWtCLFFBQzNDRCxFQUFtQjNILE1BQU02SCxNQUFRLFFBQ2pDYixFQUF1QlcsR0FLM0JSLEVBQTZCOUIsR0FDN0IvQixFQUFRdEQsTUFBTTRILGdCQUFrQixRQUNoQ3RFLEVBQVF0RCxNQUFNNkgsTUFBUSxRQUN0QlIsR0FBdUIsR0E4QnpCLFNBQTBCeEwsR0FFeEJzSCxFQUFrQnNDLGtCQUNsQnRDLEVBQWtCd0MsNkJBRWxCLElBQUltQyxFQUFtQmpELEVBQWtCRyxXQUFXbkosR0FFcEQsR0FEQThILFFBQVFDLElBQUksa0RBQWtEbkcsS0FBS0MsVUFBVW9LLE1BQ3pDLE1BQWpDQSxFQUFpQnZFLGFBR2xCLElBQUksSUFBSTdHLEVBQUksRUFBR0EsRUFBSW9MLEVBQWlCdkUsYUFBYS9HLE9BQVFFLElBQ3ZEeUcsRUFBa0JPLGVBQWVvRSxFQUFpQnZFLGFBQWE3RyxJQXRDbkVxTCxDQUFpQjFDLElBZ0dmMkMsQ0FBZVIsRUFBWW5DLEdBQzNCMUIsUUFBUUMsSUFBSSxXQUFXeUIsYUFDdkIxQixRQUFRQyxJQUFJLEdBQUduRyxLQUFLQyxVQUFVbUgsRUFBa0JHLFdBQVdLLFVBTTdELElBQUk0QyxFQUFtQjlILFNBQVNXLGNBQWMsT0FDOUNtSCxFQUFpQjlHLGFBQWEsUUFBUyxrQkFDdkM4RyxFQUFpQnJILFlBQVlULFNBQVMwQixlQUFlLE1BRXJEb0csRUFBaUI3RCxpQkFBaUIsU0FBUyxLQXJHNUMsSUFBOEJ2SSxFQUFBQSxFQXNHSndKLEVBcEd6QjFCLFFBQVFDLElBQUksMkJBQTJCd0QsT0FHdkN2QyxFQUFrQnlCLGNBQWN6SyxHQUdoQ3NFLFNBQVNvRixlQUFlLFVBQVUxSixLQUFNMkQsU0FFeEM2SCxHQUF1QixHQUV2QjFELFFBQVFDLElBQUksMEJBQTBCd0QsVUE2RnRDSSxFQUFXNUcsWUFBWWtHLEdBQ3ZCVSxFQUFXNUcsWUFBWXFILEdBR3ZCbEIsRUFBaUJuRyxZQUFZNEcsSUFtQjdCTCw2QkFBQUEsRUFDQXhDLDZCQUFBQSxFQUNBeUMsdUJBQUFBLEVBQ0FDLHVCQUFBQSxJQXJMbUMsR0EwTHZDLE1BQU1hLEVBR0puQyxTQUFvQmxCLEVBQWtCMkIsd0JBSXRDMkIsZUFFQWxDLGNBRUUvSixLQUFLaU0saUJBQW1CRCxHQUFRLEVBRWhDaE0sS0FBS0wsR0FBS0ssS0FBS2lNLGVBQ2ZqTSxLQUFLNEssWUFBYyxXQUFXNUssS0FBS2lNLGlCQUNuQ2pNLEtBQUtxSCxhQUFlLEdBR3RCMkMsT0FDRXhCLEVBQStCNkMsa0JBQWtCckwsS0FBS0wsSUFDdEQ4SCxRQUFRQyxJQUFJLDRCQUE0QjFILEtBQUtMLFFBT2pELFdBRUUsSUFBSXVNLEVBQU8sSUFBSUYsRUFDZkUsRUFBS2xDLE9BQ0xyQixFQUFrQnVCLFlBQVlnQyxHQUtoQ0MsR0N4VUEsTUFBTXRCLEVBQW1CNUcsU0FBU0MsY0FBYyxzQkFNeEJELFNBQVNDLGNBQWMsc0JBQy9CZ0UsaUJBQWlCLFNBUy9CLFdBQ0VULFFBQVFDLElBQUksdUJBQ1osSUFBSU4sRUFBVSxJQUFJNEUsRUFDbEI1RSxFQUFRNEMsT0FDUnJCLEVBQWtCdUIsWUFBWTlDLE1BVmJuRCxTQUFTQyxjQUFjLDBCQUMvQmdFLGlCQUFpQixTQWM1QixXQUNFVCxRQUFRQyxJQUFJLG9CQUVaRCxRQUFRQyxJQUFJLDhDQUE4Q2MsRUFBK0JDLGtDQUd0Rm9DLEVBQWlCdUIsV0FBVzlMLE9BQVMsRUFBSWtJLEVBQStCMEMsMkJBQ3ZELElBQUl0QixHQUNWSSxVQVZoQi9DLEVBQWtCd0MsOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogUHJvamVjdHMgKi9cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgaGVpZ2h0OiAzMng7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICAvKiBQcmV2ZW50cyBoaWdobGlnaHRpbmcgdGV4dCB3aGVuIHVzZXIgZG91YmxlLWNsaWNrcyovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5zaWRlYmFyIC5zZWN0aW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDBweCA4cHggMzJweCA4cHg7XFxufVxcblxcblxcbi8qIFRhc2tzICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MDBweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ib3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnRhc2stY29udGVudHMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggMTZweCByZ2JhKDAsMCwwLC4wNik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIG1hcmdpbjogMzJweDtcXG59XFxuXFxuLnRhc2stdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4udGFzay1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi50YXNrLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4udGFzay1ob2xkZXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgaGVpZ2h0OiAzMng7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5kZWxldGUtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7OztBQUdBLFVBQVU7QUFDVjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyAqL1xcblxcbi5hZGQtaXRlbSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBoZWlnaHQ6IDMyeDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIC8qIFByZXZlbnRzIGhpZ2hsaWdodGluZyB0ZXh0IHdoZW4gdXNlciBkb3VibGUtY2xpY2tzKi9cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYWRkLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnNpZGViYXIgLnNlY3Rpb24tdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMHB4IDhweCAzMnB4IDhweDtcXG59XFxuXFxuXFxuLyogVGFza3MgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4udGFzay1jb250ZW50cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgYm94LXNoYWRvdzogMnB4IDRweCAxNnB4IHJnYmEoMCwwLDAsLjA2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgbWFyZ2luOiAzMnB4O1xcbn1cXG5cXG4udGFzay10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2stYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrLWhvbGRlciB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5kZWxldGUtdGFzayB7XFxuICBoZWlnaHQ6IDMyeDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0c01vZHVsZSwgcHJvamVjdERpc3BsYXlDb250cm9sbGVyTW9kdWxlIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgdGFza0Rpc3BsYXlNb2R1bGUgPSAoKCkgPT57IFxuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaG9sZGVyIHZpZXcgZm9yIGFsbCB0YXNrc1xuICAgKi9cbiAgZnVuY3Rpb24gaW5pdFJlbW92YWJsZVRhc2tDb250YWluZXIoKSB7XG4gICAgbGV0IHJlbW92YWJsZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlbW92YWJsZVRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyZW1vdmFibGVcIik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmFibGVUYXNrQ29udGFpbmVyKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlVGFza1ZpZXcodGFzaykge1xuICAgIGNvbnNvbGUubG9nKGBUYXNrIGNyZWF0ZWQgLT4gJHtKU09OLnN0cmluZ2lmeSh0YXNrKX1gKVxuICAgIGNvbnNvbGUubG9nKGBUYXNrIGlkOiAke3Rhc2suaWR9YCk7XG5cbiAgICAvLyBDcmVhdGUgaW5kaXZpZHVhbCBpdGVtXG4gICAgbGV0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2staXRlbVwiKTtcblxuICAgIC8vIExlZnQgc2lkZSBidXR0b24gZGl2IGhvbGRlclxuICAgIGxldCBkaXZUYXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza0xlZnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWxlZnRcIik7XG5cbiAgICAvLyBjaGVja2JveCBidXR0b25cbiAgICBsZXQgYnRuQ2xlYXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBidG5DbGVhcmVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBidG5DbGVhcmVkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmFkaW8tYnV0dG9uXCIpO1xuXG4gICAgLy8gVGFzayBjb250ZW50c1xuICAgIGxldCBkaXZUYXNrQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tDb250ZW50cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stY29udGVudHNcIik7XG4gICAgZGl2VGFza0NvbnRlbnRzLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrJHt0YXNrLmlkfWApO1xuXG4gICAgLy8gVGFzayBIb2xkZXJcbiAgICBsZXQgZGl2VGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza0hvbGRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2staG9sZGVyXCIpO1xuXG4gICAgLy8gVGFzayB0b3BcbiAgICBsZXQgZGl2VGFza1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2VGFza1RvcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stdG9wXCIpO1xuXG4gICAgLy8gVGFzayBuYW1lXG4gICAgbGV0IGlucHV0VGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stbmFtZVwiKTtcbiAgICAvL2lucHV0VGFza05hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2ske3Rhc2suaWR9YCk7XG4gICAgaW5wdXRUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0YXNrLnRhc2tOYW1lKTtcbiAgICAvLyBTYXZlIHRoZSBuZXcgZWRpdGVkIG5hbWUgdG8gaXRzIHByb2plY3RcbiAgICBpbnB1dFRhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVUYXNrKGV2ZW50LCB0YXNrLmlkKTtcbiAgICB9KTtcblxuICAgIC8vIFRhc2sgYm90dG9tXG4gICAgbGV0IGRpdlRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdlRhc2tCb3R0b20uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWJvdHRvbVwiKTtcblxuICAgIC8vIFRhc2sgZGVsZXRlXG4gICAgbGV0IGJ0bkRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUtdGFza1wiKTtcbiAgICBidG5EZWxldGVUYXNrLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRGVsZXRlXCIpKTtcbiAgICBidG5EZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUuZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCgpO1xuICAgICAgZGVsZXRlVGFza0Zyb21VSShjdXJyZW50bHlTZWxlY3RlZFByb2plY3RJZCwgdGFzay5pZCk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdG8gcGFyZW50c1xuICAgIGRpdlRhc2tMZWZ0LmFwcGVuZENoaWxkKGJ0bkNsZWFyZWQpO1xuXG4gICAgZGl2VGFza1RvcC5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcblxuICAgIGRpdlRhc2tCb3R0b20uYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVGFzayk7XG5cbiAgICBkaXZUYXNrSG9sZGVyLmFwcGVuZENoaWxkKGRpdlRhc2tUb3ApO1xuICAgIGRpdlRhc2tIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2VGFza0JvdHRvbSk7XG5cbiAgICBkaXZUYXNrQ29udGVudHMuYXBwZW5kQ2hpbGQoZGl2VGFza0xlZnQpO1xuICAgIGRpdlRhc2tDb250ZW50cy5hcHBlbmRDaGlsZChkaXZUYXNrSG9sZGVyKTtcblxuICAgIC8vIFJlZGVmaW5pbmcgaW4gdGhpcyBzY29wZSBhcyBhIHZpZXcgYWxyZWFkeSBleGlzdGluZy4gXG4gICAgbGV0IHJlbW92YWJsZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92YWJsZVwiKTtcbiAgICByZW1vdmFibGVUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlRhc2tDb250ZW50cyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmFibGVUYXNrQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRhc2sgZnJvbSBwcm9qZWN0IGFycmF5IGFuZCBkZWxldGVzIHRoZSB2aWV3XG4gICAqIEBwYXJhbSB7Kn0gcHJvamVjdElkIFByb2plY3QgSUQgdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICogQHBhcmFtIHsqfSB0YXNrSWQgQ3VycmVudCBUYXNrIElEXG4gICAqL1xuICBmdW5jdGlvbiBkZWxldGVUYXNrRnJvbVVJKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgYWxsUHJvamVjdHNNb2R1bGUuZGVsZXRlVGFza0luUHJvamVjdChwcm9qZWN0SWQsIHRhc2tJZCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2ske3Rhc2tJZH1gKS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgdGFzayB0byB0aGUgcHJvamVjdCBhcnJheVxuICAgKiBAcGFyYW0ge1Rhc2t9IFRhc2sgdGhlIFRhc2sgYmVpbmcgc2F2ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNhdmVUYXNrVmlldyh0YXNrKSB7XG4gICAgLy8gU2F2ZSB0aGUgdGFzayB0byB0aGUgcHJvamVjdFxuICAgIGxldCBwcm9qZWN0SWQgPSBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUuZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCgpO1xuICAgIGxldCBwcm9qZWN0SWRJbmRleCA9IGFsbFByb2plY3RzTW9kdWxlLmdldFByb2plY3RJZEluZGV4KHByb2plY3RJZCk7XG4gICAgYWxsUHJvamVjdHNNb2R1bGUudXBzZXJ0KHByb2plY3RJZEluZGV4LCBudWxsLCB0YXNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXNrIHNjcmVlblxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYXJUYXNrU2NyZWVuKCkge1xuICAgIGxldCByZW1vdmFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92YWJsZVwiKTtcbiAgICBpZihyZW1vdmFibGUpIHtcbiAgICAgIHJlbW92YWJsZS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIHRoZSBwcm9qZWN0IGluIHRoZSBhcnJheSBmb3IgdXBzZXJ0XG4gICAqIEBwYXJhbSB7Kn0gaWQgSUQgb2YgdGhlIHByb2plY3QgdG8gZmluZCB0aGUgaW5kZXggb2YgXG4gICAqIEBwYXJhbSB7Kn0gcHJvamVjdCBQcm9qZWN0IGN1cnJlbnRseSBpbiB2aWV3IG9mIHdoaWNoIHlvdSBhcmUgcmV0cmlldmluZyB0aGUgdGFza3NcbiAgICogQHJldHVybnMgYXJyYXkgaW5kZXggbG9jYXRpb24gb2YgdGhlIHByb2plY3RcbiAgICovXG4gICBmdW5jdGlvbiBnZXRUYXNrSWRJbmRleChpZCwgcHJvamVjdCkge1xuICAgIGxldCB0YXNrUmV0cmlldmVkSW5kZXhMb2NhdGlvbiA9IHByb2plY3QucHJvamVjdFRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT0gaWQpO1xuICAgIHJldHVybiB0YXNrUmV0cmlldmVkSW5kZXhMb2NhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHRhc2sgbmFtZSBhc3NvY2lhdGVkIHRvIGEgcHJvamVjdFxuICAgKiBAcGFyYW0geyp9IGUgaW5wdXQgZmllbGQgZXZlbnQgY2hhbmdlXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVUYXNrKGUsIHRhc2tJZCkge1xuICAgIC8vIFRha2UgdGhlIGNoYW5nZSBldmVudCAoYWRkaW5nIGEgbmV3IG5hbWUgdmFsdWUpIGFuZCB1cGRhdGUgdGhlIG5hbWUgb2YgdGhlIHRhc2tcbiAgICBsZXQgdXBkYXRlZFRhc2tOYW1lID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBwcm9qZWN0IGhpZ2hsaWdodGVkIGluIHZpZXdcbiAgICBsZXQgbXlQcm9qZWN0SWQgPSBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUuZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCgpO1xuICAgIGNvbnNvbGUubG9nKGBteVByb2plY3RJZDogJHtteVByb2plY3RJZH1gKTtcblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIHByb2plY3RcbiAgICBsZXQgbG9jYXRpb25PZlByb2plY3QgPSBhbGxQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0SWRJbmRleChteVByb2plY3RJZCk7XG4gICAgY29uc29sZS5sb2coYGxvY2F0aW9uT2ZQcm9qZWN0OiAke2xvY2F0aW9uT2ZQcm9qZWN0fWApO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgcGFydGljdWxhciB0YXNrIGluIGl0cyBpbmRleFxuICAgIGxldCBsb2NhdGlvbk9mVGFzayA9IGdldFRhc2tJZEluZGV4KHRhc2tJZCwgYWxsUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChteVByb2plY3RJZCkpO1xuICAgIGNvbnNvbGUubG9nKGBsb2NhdGlvbk9mVGFzazogJHtsb2NhdGlvbk9mVGFza31gKTtcblxuICAgIGFsbFByb2plY3RzTW9kdWxlLnVwc2VydChsb2NhdGlvbk9mUHJvamVjdCwgbG9jYXRpb25PZlRhc2ssIHVwZGF0ZWRUYXNrTmFtZSk7XG4gICAgXG4gICAgY29uc29sZS5sb2coYCR7YWxsUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChteVByb2plY3RJZCl9YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRhc2tWaWV3LFxuICAgIGNsZWFyVGFza1NjcmVlbixcbiAgICBpbml0UmVtb3ZhYmxlVGFza0NvbnRhaW5lcixcbiAgICBnZXRUYXNrSWRJbmRleCxcbiAgICBzYXZlVGFza1ZpZXdcbiAgfVxuXG5cbn0pKCk7XG5cbmNsYXNzIFRhc2sge1xuXG4gIC8vIFRoZSBzdGF0aWMgcHJvcGVydHlcbiAgc3RhdGljICNsYXN0Q291bnQgPSAwO1xuXG4gIC8vIFRoZSBpbnN0YW5jZSBwcm9wZXJ0eSB1c2luZyB0aGUgY2xhc3MgZmllbGRzIHByb3Bvc2FsIHN5bnRheFxuICAvLyBOb3RlIEkgZGlkbid0IGluaXRpYWxpemUgaXQgd2l0aCAxLCB0aGF0J3MgYSBiaXQgbWlzbGVhZGluZy5cbiAgdGFza0NvdW50ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrQ291bnRlciA9ICsrVGFzay4jbGFzdENvdW50O1xuICAgIHRoaXMuaWQgPSB0aGlzLnRhc2tDb3VudGVyO1xuICAgIHRoaXMudGFza05hbWUgPSBcIlwiO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBQYXNzIHRoZSBpbnN0YW5jZSBvZiB0aGUgVGFza1xuICAgIHRhc2tEaXNwbGF5TW9kdWxlLmNyZWF0ZVRhc2tWaWV3KHRoaXMpO1xuICAgIHRhc2tEaXNwbGF5TW9kdWxlLnNhdmVUYXNrVmlldyh0aGlzKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7XG4gIFRhc2ssXG4gIHRhc2tEaXNwbGF5TW9kdWxlXG59IiwiaW1wb3J0IHsgdGFza0Rpc3BsYXlNb2R1bGUgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG4vKipcbiAqIE1vZHVsZSBwZXJ0YWluaW5nIHRvIG1hbmFnaW5nIGFsbCBQcm9qZWN0c1xuICovXG5jb25zdCBhbGxQcm9qZWN0c01vZHVsZSA9ICgoKSA9PiB7XG4gIC8vIEhvbGRzIGFsbCBQcm9qZWN0IG9iamVjdHNcbiAgbGV0IF9wcm9qZWN0cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHByb2plY3QgZnJvbSB0aGUgX3Byb2plY3RzIGFycmF5XG4gICAqIEBwYXJhbSB7Kn0gaWQgSUQgb2YgdGhlIHByb2plY3QgdG8gYmUgcmV0cmlldmVkXG4gICAqIEByZXR1cm5zIHtQcm9qZWN0fSBQcm9qZWN0IG9iamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChpZCkge1xuICAgIGxldCBwcm9qZWN0UmV0cmlldmVkID0gX3Byb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IGlkKTtcbiAgICByZXR1cm4gcHJvamVjdFJldHJpZXZlZDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiB0aGUgcHJvamVjdCBpbiB0aGUgYXJyYXkgZm9yIHVwc2VydFxuICAgKiBAcGFyYW0geyp9IGlkIElEIG9mIHRoZSBwcm9qZWN0IHRvIGZpbmQgdGhlIGluZGV4IG9mIFxuICAgKiBAcmV0dXJucyBhcnJheSBpbmRleCBsb2NhdGlvbiBvZiB0aGUgcHJvamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdElkSW5kZXgoaWQpIHtcbiAgICBsZXQgcHJvamVjdFJldHJpZXZlZEluZGV4TG9jYXRpb24gPSBfcHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBpZCk7XG4gICAgcmV0dXJuIHByb2plY3RSZXRyaWV2ZWRJbmRleExvY2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGFza0lkSW5kZXhGcm9tUHJvamVjdCh0YXNrSWQpIHtcbiAgICBsZXQgcHJvamVjdElkSW5kZXggPSBnZXRQcm9qZWN0SWRJbmRleChwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUuZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCgpKTtcbiAgICBsZXQgdGFza1JldHJpZXZlZEluZGV4TG9jYXRpb24gPSBfcHJvamVjdHNbcHJvamVjdElkSW5kZXhdLnByb2plY3RUYXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZCk7XG4gICAgcmV0dXJuIHRhc2tSZXRyaWV2ZWRJbmRleExvY2F0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBvciBpbnNlcnQgVGFza3MgaW5zaWRlIFByb2plY3RzXG4gICAqIEBwYXJhbSB7Kn0gcHJvamVjdEluZGV4IEluZGV4IGluc2lkZSBfcHJvamVjdHMgYXJyYXkgb2Ygd2hlcmUgdGhlIHByb2plY3QgcmVzaWRlc1xuICAgKiBAcGFyYW0geyp9IHRhc2tJbmRleCBJbmRleCBpbnNpZGUgcHJvamVjdFRhc2tzIGFycmF5IG9mIHdoZXJlIHRoZSB0YXNrIHJlc2lkZXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSBiZWluZyB1cGRhdGVkXG4gICAqL1xuICBmdW5jdGlvbiB1cHNlcnQocHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIHZhbHVlKSB7XG5cbiAgICAvLyBJZiB0YXNrIElEIGFuZCB2YWx1ZSBhcmUgbnVsbCwgaXQncyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgYSBuZXcgdGFzayB0byB0aGUgcHJvamVjdCwgYW5kIHRoZSB2YWx1ZSBpcyB0aGUgVGFza1xuICAgIGlmKHRhc2tJbmRleCA9PSBudWxsKSB7XG4gICAgICBfcHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3MucHVzaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLnRhc2tOYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG5hbWUgb2YgYSBwcm9qZWN0XG4gICAqIEBwYXJhbSB7Kn0gaW5kZXggTG9jYXRpb24gb2YgdGhlIHByb2plY3QgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBuYW1lIHRvIHVwZGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdE5hbWUoaW5kZXgsIHZhbHVlKSB7XG4gICAgX3Byb2plY3RzW2luZGV4XS5wcm9qZWN0TmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgcHJvamVjdCBvYmplY3QgdG8gcHJvamVjdCBhcnJheVxuICAgKiBAcGFyYW0geyp9IHByb2plY3RUb1NhdmUgUHJvamVjdCBiZWluZyBzYXZlZCB0byBhbGxQcm9qZWN0c01vZHVsZVxuICAgKi9cbiAgZnVuY3Rpb24gc2F2ZVByb2plY3QocHJvamVjdFRvU2F2ZSkge1xuICAgIF9wcm9qZWN0cy5wdXNoKHByb2plY3RUb1NhdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgcHJvamVjdCBmcm9tIGFycmF5XG4gICAqIEBwYXJhbSB7Kn0gaWQgUHJvamVjdCBpZCB0byBiZSByZW1vdmVkXG4gICAqL1xuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgX3Byb2plY3RzLnNwbGljZShpZCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7Kn0gcHJvamVjdElkIElEIG9mIHRoZSBwcm9qZWN0IHNlbGVjdGVkXG4gICAqIEBwYXJhbSB7Kn0gdGFza0lkIElEIG9mIHRoZSB0YXNrIHRvIGJlIGRlbGV0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2tJblByb2plY3QocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBsZXQgcHJvamVjdElkSW5kZXggPSBnZXRQcm9qZWN0SWRJbmRleChwcm9qZWN0SWQpO1xuICAgIGxldCB0YXNrSWRJbmRleCA9IGdldFRhc2tJZEluZGV4RnJvbVByb2plY3QodGFza0lkKTtcbiAgICBfcHJvamVjdHNbcHJvamVjdElkSW5kZXhdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0lkSW5kZXgsMSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2YgaG93IG1hbnkgcHJvamVjdHMgZXhpc3RzIHNvIHRoYXQgeW91IGtub3dcbiAgICogdGhlIG5ldyBwcm9qZWN0J3Mgc3RhcnRpbmcgSURcbiAgICogQHJldHVybnMgbGVuZ3RoIG9mIHRoZSBfcHJvamVjdHMgYXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIGdldFByb2plY3RBcnJheUxlbmd0aCgpIHtcbiAgICByZXR1cm4gX3Byb2plY3RzLmxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzYXZlUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGdldFByb2plY3QsXG4gICAgZ2V0UHJvamVjdEFycmF5TGVuZ3RoLFxuICAgIGdldFByb2plY3RJZEluZGV4LFxuICAgIHVwc2VydCxcbiAgICBkZWxldGVUYXNrSW5Qcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3ROYW1lXG4gIH1cblxufSkoKTtcblxuY29uc3QgcHJvamVjdERpc3BsYXlDb250cm9sbGVyTW9kdWxlID0gKCgpID0+IHtcbiAgLy8gSG9sZHMgYSBsaXN0IG9mIHByb2plY3RzXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpOyAgXG5cbiAgbGV0IHJlbWVtYmVyTGFzdFNlbGVjdGVkO1xuXG4gIC8vIFByb2plY3QgaGlnaGxpZ2h0ZWQgaW4gdGhlIG1haW4gY29uc29sZSBhbmQgdGhlXG4gIC8vIG9uZSB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIHZpZXdcbiAgbGV0IF9jdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkID0gMDtcbiAgbGV0IF9pc0hpZ2hsaWdodGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodHMgdGhlIHByb2plY3QgaW4gdGhlIHByb2plY3Qgc2lkZWJhciBhbmQgZGVzZWxlY3RzIG90aGVyIHByb2plY3RzLlxuICAgKiBAcGFyYW0geyp9IHByb2plY3QgVGhlIHByb2plY3QgYmVpbmcgc2VsZWN0ZWRcbiAgICovXG4gICBmdW5jdGlvbiBfc2VsZWN0UHJvamVjdChwcm9qZWN0LCBwcm9qZWN0SWQpIHtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgdmFsdWUgaGFzIGJlZW4gYXNzaWduZWQgeWV0LiBpZiBub3QsIHRoZW4gaW1tZWRpYXRlbHkgYXNzaWduLlxuICAgIGlmKGdldEN1cnJlbnRQcm9qZWN0SGlnaGxpZ2h0ZWQoKSA9PSAwKSB7XG4gICAgICBzZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkKHByb2plY3RJZCk7XG4gICAgICBzZXRJc0hpZ2hsaWdodGVkU3RhdHVzKGZhbHNlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gSSBhbSBzZWxlY3RpbmcgYSBkaWZmZXJlbnQgaXRlbSB0aGFuIHdoYXQgaXMgY3VycmVudGx5IGhpZ2hsaWdodGVkXG4gICAgaWYoZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCAhPSBwcm9qZWN0SWQpIHtcblxuICAgICAgbGV0IHByZXZpb3VzbHlTZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0JHtnZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkKCl9YCk7XG5cbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB5b3UgaGF2ZSBhIHByb3BlcnR5LiBJZiB5b3UgZG8gdGhlbiBjaGFuZ2UgaXRcbiAgICAgIGlmKHByZXZpb3VzbHlTZWxlY3RlZCAhPSBudWxsKSB7XG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgcmVtZW1iZXJMYXN0U2VsZWN0ZWQgPSBwcmV2aW91c2x5U2VsZWN0ZWQgO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZChwcm9qZWN0SWQpO1xuICAgIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHByb2plY3Quc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgc2V0SXNIaWdobGlnaHRlZFN0YXR1cyh0cnVlKTtcblxuICAgIC8vIFNpbmNlIHRoaXMgcHJvamVjdCBpcyBoaWdobGlnaHRlZCwgYmVnaW4gbG9hZGluZyB0aGUgdGFza3MgdmlldyBmb3IgdGhhdCBwcm9qZWN0XG4gICAgbG9hZFByb2plY3RUYXNrcyhwcm9qZWN0SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgcHJvamVjdCBmcm9tIGFsbFByb2plY3RNb2R1bGUgYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgVUlcbiAgICogQHBhcmFtIHsqfSBpZCBcbiAgICovXG4gICBmdW5jdGlvbiBfZGVsZXRlUHJvamVjdEZyb21VSShpZCkge1xuXG4gICAgY29uc29sZS5sb2coYFN0YXR1cyBiZWZvcmUgZGVsZXRlIC0+ICR7Z2V0SXNIaWdobGlnaHRlZFN0YXR1cygpfWApXG5cbiAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBhbGwgcHJvamVjdHNcbiAgICBhbGxQcm9qZWN0c01vZHVsZS5kZWxldGVQcm9qZWN0KGlkKTtcblxuICAgIC8vIFJlbW92ZSBwcm9qZWN0IGZyb20gdGhlIHZpZXdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdCR7aWR9YCkucmVtb3ZlKCk7XG5cbiAgICBzZXRJc0hpZ2hsaWdodGVkU3RhdHVzKGZhbHNlKTtcblxuICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgYWZ0ZXIgZGVsZXRlIC0+ICR7Z2V0SXNIaWdobGlnaHRlZFN0YXR1cygpfWApO1xuXG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGFza3Mgb2YgYSBoaWdobGlnaHRlZCBwcm9qZWN0XG4gICAqIEBwYXJhbSB7Kn0gaWQgVGhlIElEIG9mIHRoZSBwcm9qZWN0IG9mIHdoaWNoIGl0cyB0YXNrcyB3aWxsIGJlIGxvYWRlZCB0byB0aGUgVGFzayBWaWV3XG4gICAqL1xuICBmdW5jdGlvbiBsb2FkUHJvamVjdFRhc2tzKGlkKSB7XG4gICAgLy8gU2V0IHRoZSB0YXNrIHZpZXcgc28gdGhhdCBpdCBpcyBjbGVhcmVkIGFuZCByZWFkeSB0byBzaG93Y2FzZSB0YXNrc1xuICAgIHRhc2tEaXNwbGF5TW9kdWxlLmNsZWFyVGFza1NjcmVlbigpO1xuICAgIHRhc2tEaXNwbGF5TW9kdWxlLmluaXRSZW1vdmFibGVUYXNrQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgcmV0cmlldmVkUHJvamVjdCA9IGFsbFByb2plY3RzTW9kdWxlLmdldFByb2plY3QoaWQpO1xuICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nIFByb2plY3QgVGFza3MuIEhlcmUgaXMgeW91ciBwcm9qZWN0IC0+ICR7SlNPTi5zdHJpbmdpZnkocmV0cmlldmVkUHJvamVjdCl9YClcbiAgICBpZihyZXRyaWV2ZWRQcm9qZWN0LnByb2plY3RUYXNrcyAhPSBudWxsKSB7XG5cbiAgICAgIC8vIEdldCBldmVyeSB0YXNrIGFzc29jaWF0ZWQgd2l0aCBhIHByb2plY3RcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXRyaWV2ZWRQcm9qZWN0LnByb2plY3RUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXNrRGlzcGxheU1vZHVsZS5jcmVhdGVUYXNrVmlldyhyZXRyaWV2ZWRQcm9qZWN0LnByb2plY3RUYXNrc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcmV0dXJucyBUaGUgcHJvamVjdCBJRCBvZiB0aGUgaGlnaGxpZ2h0ZWQgcHJvamVjdFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3RIaWdobGlnaHRlZCgpIHtcbiAgICByZXR1cm4gX2N1cnJlbnRQcm9qZWN0SGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCBwcm9qZWN0IGluIHZpZXcgb2YgdGhlIHVzZXJcbiAgICogQHBhcmFtIHsqfSBpZCBUaGUgaWQgb2YgdGhlIHByb2plY3Qgc2VsZWN0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0SGlnaGxpZ2h0ZWQoaWQpIHtcbiAgICBfY3VycmVudFByb2plY3RIaWdobGlnaHRlZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcmV0dXJucyBTdGF0dXMgcmVnYXJkaW5nIGlmIGEgdmlldyBpcyBoaWdobGlnaHRlZFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXNIaWdobGlnaHRlZFN0YXR1cygpIHtcbiAgICByZXR1cm4gX2lzSGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7Kn0gc3RhdHVzIEJvb2xlYW4gdmFsdWUgdG8ga25vdyBpZiB0aGUgc3RhdHVzIHNob3VsZCBiZSBoaWdobGlnaHRlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0SXNIaWdobGlnaHRlZFN0YXR1cyhzdGF0dXMpIHtcbiAgICBfaXNIaWdobGlnaHRlZCA9IHN0YXR1cztcbiAgfSBcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbmRpdmlkdWFsIGVudHJ5IGZvciBhIFByb2plY3RcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RWaWV3KHByb2plY3RJZCkge1xuICAgIC8vIENyZWF0ZSBpbmRpdmlkdWFsIHByb2plY3RzXG4gICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdCR7cHJvamVjdElkfWApO1xuXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgLy8gTmFtZSBvZiBlYWNoIHByb2plY3QgYmVpbmcgYWRkZWQgdG8gdGhlIGxpc3RcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgUHJvamVjdCAke3Byb2plY3RJZH1gKTtcbiAgICBcbiAgICAvLyBDaGFuZ2UgbmFtZSBvZiB0aGUgcHJvamVjdCBvbmNlIHRoZSB1c2VyIGlzIGRvbmUgZW50ZXJpbmcgdGV4dFxuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoZXZlbnQpID0+IHtcbiAgICAgIHVwZGF0ZVByb2plY3ROYW1lRnJvbVZpZXcoZXZlbnQpO1xuICAgIH0pXG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKCkgPT4ge1xuICAgICAgLy8gU2VsZWN0IHRoZSBwcm9qZWN0IHlvdSBqdXN0IGNsaWNrZWRcbiAgICAgIF9zZWxlY3RQcm9qZWN0KG5ld1Byb2plY3QsIHByb2plY3RJZCk7XG4gICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCAke3Byb2plY3RJZH0gY2xpY2tlZGApO1xuICAgICAgY29uc29sZS5sb2coYCR7SlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdChwcm9qZWN0SWQpKX1gKTtcbiAgICB9KSlcbiAgICBcbiAgICAvL25ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIFxuICAgIC8vIEJ1dHRvbiB0byBkZWxldGUgcHJvamVjdFxuICAgIGxldCBidG5EZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5EZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XG4gICAgYnRuRGVsZXRlUHJvamVjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcInhcIikpO1xuXG4gICAgYnRuRGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCgpID0+IHtcbiAgICAgICAgX2RlbGV0ZVByb2plY3RGcm9tVUkocHJvamVjdElkKTtcbiAgICB9KSk7XG5cbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVByb2plY3QpO1xuXG4gICAgLy8gU2V0IHRoZSBjb250ZW50XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRha2VzIGFuIGV2ZW50IGNoYW5nZSBmcm9tIHRoZSBVSSBhbmQgc2F2ZXMgdGhlIG5hbWVcbiAgICogQHBhcmFtIHsqfSBlIFVzZXIgRXZlbnQgY2hhbmdlIChmcm9tIHVuY2xpY2tpbmcgb3IgY2xpY2tpbmcgc29tZXRoaW5nIGVsc2UpXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TmFtZUZyb21WaWV3KGUpIHtcbiAgICBsZXQgdXBkYXRlZFByb2plY3ROYW1lID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBsZXQgbXlQcm9qZWN0SWQgPSBnZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkKCk7XG4gICAgbGV0IGxvY2F0aW9uT2ZQcm9qZWN0ID0gYWxsUHJvamVjdHNNb2R1bGUuZ2V0UHJvamVjdElkSW5kZXgobXlQcm9qZWN0SWQpO1xuICAgIGFsbFByb2plY3RzTW9kdWxlLnVwZGF0ZVByb2plY3ROYW1lKGxvY2F0aW9uT2ZQcm9qZWN0LCB1cGRhdGVkUHJvamVjdE5hbWUpO1xuICB9XG4gIFxuICBcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQcm9qZWN0VmlldyxcbiAgICBzZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0SGlnaGxpZ2h0ZWQsXG4gICAgZ2V0SXNIaWdobGlnaHRlZFN0YXR1cyxcbiAgICBzZXRJc0hpZ2hsaWdodGVkU3RhdHVzLFxuICB9XG5cbn0pKCk7XG5cbmNsYXNzIFByb2plY3Qge1xuXG4gIC8vIFRoZSBzdGF0aWMgcHJvcGVydHlcbiAgc3RhdGljICNsYXN0Q291bnQgPSBhbGxQcm9qZWN0c01vZHVsZS5nZXRQcm9qZWN0QXJyYXlMZW5ndGgoKTtcblxuICAvLyBUaGUgaW5zdGFuY2UgcHJvcGVydHkgdXNpbmcgdGhlIGNsYXNzIGZpZWxkcyBwcm9wb3NhbCBzeW50YXhcbiAgLy8gTm90ZSBJIGRpZG4ndCBpbml0aWFsaXplIGl0IHdpdGggMSwgdGhhdCdzIGEgYml0IG1pc2xlYWRpbmcuXG4gIHByb2plY3RDb3VudGVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluY3JlbWVudCBhbmQgYXNzaWduXG4gICAgdGhpcy5wcm9qZWN0Q291bnRlciA9ICsrUHJvamVjdC4jbGFzdENvdW50O1xuXG4gICAgdGhpcy5pZCA9IHRoaXMucHJvamVjdENvdW50ZXI7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IGBQcm9qZWN0ICR7dGhpcy5wcm9qZWN0Q291bnRlcn1gO1xuICAgIHRoaXMucHJvamVjdFRhc2tzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHByb2plY3REaXNwbGF5Q29udHJvbGxlck1vZHVsZS5jcmVhdGVQcm9qZWN0Vmlldyh0aGlzLmlkKTtcbiAgICBjb25zb2xlLmxvZyhgVGhlIHByb2plY3QgaGFzIGFuIElEIG9mICR7dGhpcy5pZH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIE9ubHkgZm9yIGRlYnVnZ2luZ1xuICovXG5mdW5jdGlvbiB0ZXN0UHJvamVjdCgpIHtcblxuICBsZXQgdGVzdCA9IG5ldyBQcm9qZWN0O1xuICB0ZXN0LmluaXQoKTtcbiAgYWxsUHJvamVjdHNNb2R1bGUuc2F2ZVByb2plY3QodGVzdCk7XG5cblxufVxuXG50ZXN0UHJvamVjdCgpXG5cbmV4cG9ydCB7XG4gIGFsbFByb2plY3RzTW9kdWxlLFxuICBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUsXG4gIFByb2plY3Rcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgYWxsUHJvamVjdHNNb2R1bGUsIHByb2plY3REaXNwbGF5Q29udHJvbGxlck1vZHVsZSB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBUYXNrLCB0YXNrRGlzcGxheU1vZHVsZSB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG5cbi8vIENyZWF0ZXMgbGlzdGVuZXJzIGZvciB0aGUgYnV0dG9ucyBvbiB0aGUgbWFpbiBwYWdlXG5jb25zdCBidG5MaXN0ZW5lcnNNb2R1bGUgPSAoKCkgPT4ge1xuICAvLyBOZXcgUHJvamVjdCBidXR0b25cbiAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhciAuYWRkLWl0ZW1cIik7XG4gIGJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuXG4gIC8vIEFkZCB0YXNrIGJ1dHRvblxuICBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJvdHRvbSAuYWRkLWl0ZW1cIik7XG4gIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Rhc2spO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgaGF2ZSBpdCBsb2FkZWQgaW4gdGhlIHNpZGViYXJcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJOZXcgUHJvamVjdCBjbGlja2VkXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Q7XG4gICAgcHJvamVjdC5pbml0KCk7XG4gICAgYWxsUHJvamVjdHNNb2R1bGUuc2F2ZVByb2plY3QocHJvamVjdCk7XG4gIH1cblxuICB0YXNrRGlzcGxheU1vZHVsZS5pbml0UmVtb3ZhYmxlVGFza0NvbnRhaW5lcigpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgY29uc29sZS5sb2coXCJOZXcgVGFzayBjbGlja2VkXCIpO1xuXG4gICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgbmV3IHRhc2sgYW5kIHRoZSBwcm9qZWN0IGlzOiAke3Byb2plY3REaXNwbGF5Q29udHJvbGxlck1vZHVsZS5nZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkKCl9YCk7XG5cbiAgICAvLyBPbmx5IGFkZCBhIHRhc2sgaWYgdGhlcmUgaXMgYSBwcm9qZWN0XG4gICAgaWYocHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgJiBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXJNb2R1bGUuZ2V0SXNIaWdobGlnaHRlZFN0YXR1cygpKSB7XG4gICAgICBsZXQgY3JlYXRlZFRhc2sgPSBuZXcgVGFzaztcbiAgICAgIGNyZWF0ZWRUYXNrLmluaXQoKTtcblxuICAgICAgLy8gU2F2ZSB0aGUgdGFzayB0byB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgfVxuICB9XG59KSgpO1xuXG5idG5MaXN0ZW5lcnNNb2R1bGVcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsIl9pIiwiX2kyIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidGFza0Rpc3BsYXlNb2R1bGUiLCJ0YXNrQ29udGFpbmVyIiwiZ2V0VGFza0lkSW5kZXgiLCJwcm9qZWN0IiwicHJvamVjdFRhc2tzIiwiZmluZEluZGV4IiwidGFzayIsImNyZWF0ZVRhc2tWaWV3IiwiY29uc29sZSIsImxvZyIsImRpdlRhc2tMZWZ0IiwiYnRuQ2xlYXJlZCIsImRpdlRhc2tDb250ZW50cyIsImRpdlRhc2tIb2xkZXIiLCJkaXZUYXNrVG9wIiwiaW5wdXRUYXNrTmFtZSIsInRhc2tOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFza0lkIiwidXBkYXRlZFRhc2tOYW1lIiwidmFsdWUiLCJteVByb2plY3RJZCIsInByb2plY3REaXNwbGF5Q29udHJvbGxlck1vZHVsZSIsImdldEN1cnJlbnRQcm9qZWN0SGlnaGxpZ2h0ZWQiLCJsb2NhdGlvbk9mUHJvamVjdCIsImFsbFByb2plY3RzTW9kdWxlIiwiZ2V0UHJvamVjdElkSW5kZXgiLCJsb2NhdGlvbk9mVGFzayIsImdldFByb2plY3QiLCJ1cHNlcnQiLCJ1cGRhdGVUYXNrIiwiZGl2VGFza0JvdHRvbSIsImJ0bkRlbGV0ZVRhc2siLCJwcm9qZWN0SWQiLCJkZWxldGVUYXNrSW5Qcm9qZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmFibGVUYXNrQ29udGFpbmVyIiwiY2xlYXJUYXNrU2NyZWVuIiwicmVtb3ZhYmxlIiwiaW5pdFJlbW92YWJsZVRhc2tDb250YWluZXIiLCJzYXZlVGFza1ZpZXciLCJwcm9qZWN0SWRJbmRleCIsIlRhc2siLCJzdGF0aWMiLCJ0YXNrQ291bnRlciIsImNvbnN0cnVjdG9yIiwiaW5pdCIsIl9wcm9qZWN0cyIsInNhdmVQcm9qZWN0IiwicHJvamVjdFRvU2F2ZSIsImRlbGV0ZVByb2plY3QiLCJmaW5kIiwiZ2V0UHJvamVjdEFycmF5TGVuZ3RoIiwicHJvamVjdEluZGV4IiwidGFza0luZGV4IiwidGFza0lkSW5kZXgiLCJnZXRUYXNrSWRJbmRleEZyb21Qcm9qZWN0IiwidXBkYXRlUHJvamVjdE5hbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb250YWluZXIiLCJyZW1lbWJlckxhc3RTZWxlY3RlZCIsIl9jdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkIiwiX2lzSGlnaGxpZ2h0ZWQiLCJzZXRDdXJyZW50UHJvamVjdEhpZ2hsaWdodGVkIiwiZ2V0SXNIaWdobGlnaHRlZFN0YXR1cyIsInNldElzSGlnaGxpZ2h0ZWRTdGF0dXMiLCJzdGF0dXMiLCJjcmVhdGVQcm9qZWN0VmlldyIsIm5ld1Byb2plY3QiLCJ1cGRhdGVkUHJvamVjdE5hbWUiLCJ1cGRhdGVQcm9qZWN0TmFtZUZyb21WaWV3IiwicHJldmlvdXNseVNlbGVjdGVkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJyZXRyaWV2ZWRQcm9qZWN0IiwibG9hZFByb2plY3RUYXNrcyIsIl9zZWxlY3RQcm9qZWN0IiwiYnRuRGVsZXRlUHJvamVjdCIsIlByb2plY3QiLCJwcm9qZWN0Q291bnRlciIsInRlc3QiLCJ0ZXN0UHJvamVjdCIsImNoaWxkTm9kZXMiXSwic291cmNlUm9vdCI6IiJ9
