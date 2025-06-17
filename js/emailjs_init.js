(function() {
    const p = ['D@u', 'Yzv', '&zXC', 'cwF&','&am'];
    const o = [2, 0, 4, 1, 3]; 
    let ob = o.map(index => p[index]).join("");
    const fk = ob.replace(/X/g, "1")
                  .replace(/@/g, "8")  
                  .replace(/&/g, "f")  

    emailjs.init({ publicKey: fk });
})();