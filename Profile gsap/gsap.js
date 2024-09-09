
let menuLists=document.querySelectorAll('.sideBar .menu li')
let header = document.getElementById('header')
let search=document.getElementById('search')
let icons=document.getElementById('icons')
let welcome=document.getElementById('welcome')
let draft=document.getElementById('draft')
let titleDashBoard=document.getElementById('DashboardTitle')
let welcomeImage=document.getElementById('welcomeImage')
let tl = gsap.timeline()
let gridBoxes=document.querySelectorAll('.box-of-grid')
let statBoxes=document.querySelectorAll('.icon-of-the-stat')
let infoStat=document.querySelectorAll('.infos-of-stat')
let socialMedias=document.querySelectorAll('.socialMedias')
let servers=document.querySelectorAll('.server')
let options=document.querySelectorAll('.option')
let projects=document.querySelectorAll('.projectsContainer')
let courses=document.querySelectorAll('.box-cnt')
let friends=document.querySelectorAll('.pack')
let files=document.querySelectorAll('.grid-case')
gsap.registerPlugin(ScrollTrigger);
  document.addEventListener("DOMContentLoaded", () => {
    
    gsap.from('#logo', 
      { 
        y:-100,
        duration:1,
        ease:'bounce',
      }
    );
    gsap.fromTo('#logo', 
      { 
        
        "--before-y": "100px", 
        "--before-opacity":'0',
        '--after-x':'100px',
        "--after-opacity":"0",

      }, 
      { 
         "--before-y": "0px", 
        '--after-x':'-50%',
        "--after-opacity":"1",
        "--before-opacity":"1",
        duration: 3.5, 
        ease: "power2.inOut" 
      }

    );
    gsap.from(menuLists,{
      'opacity':0,
     'x':"-100px",
      duration:1,
      
      stagger:0.3,
    })
    gsap.from('#header',{
      duration:2,
      y:-100,
      opacity:0
    })
    gsap.from([search,welcome,titleDashBoard,],{
      duration:2,
      delay:1,
      opacity:0,
      x:'-120%',
    })
    gsap.from([icons,draft],{
      duration:2,
      delay:1,
      opacity:0,
      x:'130%',
    })
    gsap.from(welcomeImage,{
      duration:2,
      delay:2,
      y:-150
    })
    gsap.from('.avatar',{
      scale:0,
      duration:1,
      delay:2.5
    })
    gsap.from('#news', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom #main',
        trigger: welcome, 
      },
      x: -200,           
      opacity: 0,       
      duration: 2,      
    });
    gsap.from('#tasks', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom #main',
        trigger: welcome, 
      },
      x: 200,           
      opacity: 0,        
      duration: 2,        
    });

    gsap.from('#searchItem', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom #main',
        trigger: '#one', 
      },
      x: -200,             
      opacity: 0,         
      duration: 2,       
    });
    gsap.from('#uploads', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom #main',
        trigger: '#one', 
      },
      x: 200,             
      opacity: 0,         
      duration: 2,        
    });

    
    gsap.from('#projects', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom ',
        trigger: '#two', 
      },
      x: -200,           
      opacity: 0,         
      duration: 2,       
    });
    gsap.from('#reminders', {
      scrollTrigger: {
       start:'center',
        
        end:'bottom ',
        trigger:'#two',
      },
      x: 200,            
      opacity: 0,         
      duration: 2,        
    });

    gsap.from('#posts', {
      scrollTrigger: {
       start:'start',
        
        end:'bottom ',
        trigger: '#three', 
      },
      x: -200,            
      opacity: 0,         
      duration: 2,        
    });
    gsap.from('#SocialMedia', {
      scrollTrigger: {
       start:'start',

        end:'bottom ',
        trigger:'#three', 
        
        
      },
      x: 200,             
      opacity: 0,         
      duration: 2,        
    });

    gsap.from('#statestics', {
      scrollTrigger: {
       start:'start',
        
        end:'center ',
        trigger: '#four', 
      },
      x: -200,     
      opacity: 0,         
      duration: 2,        
    });
    gsap.from('#yearly', {
      scrollTrigger: {
       start:'start',

        end:'center ',
        trigger:'#four', 
      },
      x: 200,            
      opacity: 0,         
      duration: 2,        
    });
    gsap.from(gridBoxes,{
      scrollTrigger: {
        start:'start',
 
         end:'center ',
         trigger:'#four', 
       },
       scale:0,
       duration:2,
       stagger:0.5,
       opacity:0
    })
    gsap.from(statBoxes,{
      scrollTrigger: {
        start:'start',
 
         end:'center ',
         trigger:'#four', 
           
       },
       x:-120,
       duration:2,
       stagger:0.5,
       opacity:0
    })
    gsap.from(infoStat,{
      scrollTrigger: {
        start:'start',
 
         end:'center ',
         trigger:'#four', 
       },
       y:-120,
       duration:2,
       stagger:0.5,
       opacity:0
    })
    gsap.from('.General',{
      scrollTrigger: {
        start:'start',
    
         end:'bottom ',
         trigger:'#main', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('.security',{
      scrollTrigger: {
        start:'start',
     
         end:'bottom ',
         trigger:'#Settingone', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('.socialInfo',{
      scrollTrigger: {
        start:'start',
     
         end:'bottom ',
         trigger:'#Settingtwo', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('.Widget',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#Settingthree', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('.manager',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#Settingthree', 
           
       },
       x:-220,
       duration:1,
       delay:0.5,
       opacity:0
    })
    gsap.from('#projectsone',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#main', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('#projectstwo',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectsone', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('#projectsthree',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectstwo', 
           
       },
       x:-220,
       duration:1,
    
       opacity:0
    })
    gsap.from('#projectsfour',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectsthree', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('#projectsfive',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectsfour', 
           
       },
       x:-220,
       duration:1,
   
       opacity:0
    })
    gsap.from('#projectssix',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectsfive', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('#projectsseven',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectssix', 
           
       },
       x:-220,
       duration:1,
     
       opacity:0
    })
    gsap.from('#projectseight',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectsseven', 
           
       },
       x:-220,
       duration:1,
       
       opacity:0
    })
    gsap.from('#projectsnine',{
      scrollTrigger: {
        start:'start',
       
         end:'bottom ',
         trigger:'#projectseight', 
           
       },
       x:-220,
       duration:1,
       delay:0.5,
       opacity:0
    })
    gsap.from(socialMedias, {
      scale:0,
      y:-200,             
      opacity: 0,         
      duration: 2,
      delay:0.5,
      stagger:0.3        
    });
    gsap.from(servers, {
      scale:0,
                   
      opacity: 0,         
      duration: 1,
      delay:1,
      stagger:0.3        
    });
    gsap.from('#profileImage',{
      duration:1.5,
      scale:0,
      rotate:360,
      opacity:0
    })
    gsap.from('#info',{
      duration:1.5,
      y:300,
      opacity:0
    })
    gsap.from('.profileUnder',{
      
       x:-220,
       duration:2,
       delay:0.5,
       opacity:0
    })
    gsap.from('.ProfileData',{
      scrollTrigger: {
        start:'start',
      
         end:'bottom ',
         trigger:'#main', 
           
       },
       x:-100,
       duration:2,
       
       opacity:0
    })
    gsap.from(options,{
      
       scale:0,
       duration:2,
       stagger:0.5,

       opacity:0
    })
    gsap.from(projects,{
      
      scale:0,
      duration:2,
      stagger:0.5,
       scrub:true,
      opacity:0
   })
   gsap.from(courses, {
    duration:1.5,
    scale: 0,
    opacity:1,
   
    stagger: {
      
      from: "start",
     
     amount:2.5
    }
  }); 
  gsap.from(friends, {
    duration:1.5,
    scale: 0,
    opacity:1,
   
    stagger:0.5
  }); 
  gsap.from(files,{
    duration:1.5,
    scale: 0,
    opacity:1,
   
    stagger:0.5
  })
  gsap.from('.Files-Statistic-cnt',{
    x:200,
    duration:2,
    opacity:0
  })
  });
  
