const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 


let tiktok=document.getElementById("tiktok");
tiktok.onclick = function(){
 window.open("https://www.tiktok.com/@crown_js");
}

let fac=document.getElementById("fac");
fac.onclick = function(){
 window.open("https://www.facebook.com/profile.php?id=100088353393274&locale=ar_AR");
    }


    let des=document.getElementById("des");
    des.onclick = function(){
     window.open("https://discord.com/invite/hPbm5QUH");
        }

        let inst=document.getElementById("inst");
        inst.onclick = function(){
         window.open("https://www.instagram.com/_4u39/");
            }

            let btn=document.getElementById("btn");
            btn.onclick = function(){
                window.open("https://taplink.cc/c__n1");
                }

                let don=document.getElementById("don");
                don.onclick = function(){
                    window.open("https://www.mediafire.com/file/8y5n3byu9kvf22w/crown_js_%25281%2529.pdf/file");
                    }
    

      
      