document.getElementById('toggler').addEventListener('click', ()=>{
      document.getElementById('menuMobile').style.cssText = `height:100vh; transition: all 1s;`
})

document.getElementById('close').addEventListener('click', ()=>{
      document.getElementById('menuMobile').style.cssText = `height:0vh; transition: all 1s;`
})