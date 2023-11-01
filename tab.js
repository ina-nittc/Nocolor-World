document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.getElementsByClassName('tab');
        for(let i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('click', tabSwitch, false);
        }
        function tabSwitch(){
          document.getElementsByClassName('muho')[0].classList.remove('muho');
          this.classList.add('muho');
          document.getElementsByClassName('naranaiyo')[0].classList.remove('naranaiyo');
          document.getElementsByClassName('biyon')[0].classList.remove('biyon');
          document.getElementsByClassName('itt')[0].classList.remove('itt');
          const arrayTabs = Array.prototype.slice.call(tabs);
          const index = arrayTabs.indexOf(this);
          document.getElementsByClassName('panel')[index].classList.add('naranaiyo');
          document.getElementsByClassName('panelFA')[index].classList.add('biyon');
          document.getElementsByClassName('panel_content')[index].classList.add('itt');
        };
      }, false);