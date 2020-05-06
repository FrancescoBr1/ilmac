     /* animazioni iniziali con gsap */ 

     var tl = new gsap.timeline();

     tl.from ("#top-copy", {duration: 1, ease: "back.out(1.1)", opacity: 0, x: -40})
     .from ("#top-img", {duration: 1, ease: "back.out(1.2)", opacity: 0, x: 40}, "-=0.7" )
     .from ("#alt-top-bg", {duration: 1, ease: "back.out(1.2)", scaleX: 0, transformOrigin: "left"}, "-=0.8")
     .from ("#bg-img", {duration: 1, ease: "back.out(1.2)", scaleX: 0, transformOrigin: "right"}, "-=0.8")
     .from (".corso-center", {duration: 1, ease: "back.out(1.2)", opacity: 0, y: -40}, "-=0.8");