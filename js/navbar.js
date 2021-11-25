
document.addEventListener("DOMContentLoaded", function() {

    options = {
        cursorOuter: "circle-basic",
        hoverEffect: "transparent",
        hoverItemMove: true,
        defaultCursor: false,
        outerWidth: 60,
        outerHeight: 60,
      };
      magicMouse(options);
    let container = document.getElementById("nav_list");
    container.onmouseover = handler;
    
    function handler(event) {
        function str(el) {
            if (!el) return "null";
            return el.className || el.tagName;
          }

            if (str(event.target) == "cut__wrapper") {
                const cut1 = event.target.children[0];
                const cut2 = event.target.children[1];
                const cut3 = event.target.children[2];
                const cut4 = event.target.children[3];
                const timeline = gsap.timeline()
                timeline
                .fromTo(cut3,0.6,{top:"50%", y:"-50%"},{y:"150%"},)
                .fromTo(cut4,0.6,{top:"50%", y:"-50%"},{y:"150%"},"<+0.1")
                .fromTo(cut1,0.6,{y:"-150%"},{y:"0"},"<")
                .fromTo(cut2,0.6,{y:"-150%"},{y:"0"},"<-0.1")
                

            }
    }

      
  });

