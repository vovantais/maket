
function SelectedCard() {
   const firstCard = document.getElementById('first');
   const firstEllipse = document.getElementById('FirstEllipse');
   const firstLinkText = document.getElementById('FerstLinkText');
   const secondCard = document.getElementById('second');
   const secondEllipse = document.getElementById('SecondEllipse');
   const secondLinkText = document.getElementById('SecondLinkText');
   const BgCard1 = document.getElementById('cardBg1');
   const BgCard2 = document.getElementById('cardBg2');
   const text1 = `Чего сидишь? Порадуй котэ,<a style=' border-bottom: 1px dashed #198ec9; color:#198ec9;'> купи. </a> `;
   const text2 = `<span style='color:#d91667';> Головы щучьи с чесноком да свежайшая семгушка. </span>`;
   firstCard.addEventListener('mousemove', () => {
      firstEllipse.classList.add('changeColor');
   });
   firstCard.addEventListener('mouseout', () => {
      firstEllipse.classList.remove('changeColor');
   });
   firstCard.addEventListener('click', () => {
      firstCard.addEventListener('mouseout', () => {
         firstEllipse.classList.remove('changeColor');
      });
      firstCard.addEventListener('mouseout', () => {
         firstEllipse.classList.remove('changeHover');
      });
      firstCard.classList.toggle('active');
      firstEllipse.classList.toggle('_active');
      if (firstCard.classList.contains('active')) {
         firstLinkText.innerHTML = text2;
         BgCard1.classList.add('addBg');
      }
      if (firstEllipse.classList.contains('_active')) {
         firstEllipse.classList.remove('changeColor');
         firstEllipse.classList.remove('changeHover');
         firstCard.addEventListener('mousemove', () => {
            firstEllipse.classList.remove('changeColor');
         });
         firstCard.addEventListener('mouseout', () => {
            firstEllipse.classList.add('changeHover');
         });
         firstCard.addEventListener('mousemove', () => {
            firstEllipse.classList.remove('changeHover');
         });
      } else {
         firstLinkText.innerHTML = text1;
         BgCard1.classList.remove('addBg');
         firstEllipse.classList.add('changeColor');
         firstCard.addEventListener('mousemove', () => {
            firstEllipse.classList.add('changeColor');
         });
         firstCard.addEventListener('mouseout', () => {
            firstEllipse.classList.remove('changeColor');
         });
      }
   });
   firstLinkText.addEventListener('click', () => {
      firstCard.classList.toggle('active');
      firstEllipse.classList.toggle('_active');
      if (firstCard.classList.contains('active')) {
         firstLinkText.innerHTML = text2;
      } else {
         firstLinkText.innerHTML = text1;
      }
   });
   if (!secondCard.classList.contains('active')) {
      secondCard.addEventListener('mousemove', () => {
         secondEllipse.classList.add('changeColor2');
      });
      secondCard.addEventListener('mouseout', () => {
         secondEllipse.classList.remove('changeColor2');
      });
   }
   if (secondCard.classList.contains('active')) {
      secondCard.addEventListener('mousemove', () => {
         secondEllipse.classList.add('changeHover2');
      });
      secondCard.addEventListener('mouseout', () => {
         secondEllipse.classList.remove('changeHover2');
      });
   }
   secondCard.addEventListener('click', () => {
      secondCard.addEventListener('mouseout', () => {
         secondEllipse.classList.remove('changeColor2');
      });
      secondCard.addEventListener('mouseout', () => {
         secondEllipse.classList.remove('changeHover2');
      });
      secondCard.classList.toggle('active');
      secondEllipse.classList.toggle('_active');
      if (secondCard.classList.contains('active')) {
         secondLinkText.innerHTML = text2;
         BgCard2.classList.add('addBg');
      }
      if (secondEllipse.classList.contains('_active')) {
         secondEllipse.classList.remove('changeColor2');
         secondEllipse.classList.remove('changeHover2');
         secondCard.addEventListener('mousemove', () => {
            secondEllipse.classList.remove('changeColor2');
         });
         secondCard.addEventListener('mouseout', () => {
            secondEllipse.classList.add('changeHover2');
         });
         secondCard.addEventListener('mousemove', () => {
            secondEllipse.classList.remove('changeHover2');
         });
      } else {
         secondLinkText.innerHTML = text1;
         BgCard2.classList.remove('addBg');
         secondEllipse.classList.remove('changeHover2');
         secondEllipse.classList.add('changeColor2');
         secondCard.addEventListener('mousemove', () => {
            secondEllipse.classList.add('changeColor2');
         });
         secondCard.addEventListener('mouseout', () => {
            secondEllipse.classList.remove('changeColor2');
         });
         secondCard.addEventListener('mousemove', () => {
            secondEllipse.classList.remove('changeHover2');
         });
      }
   });
   secondLinkText.addEventListener('click', () => {
      secondCard.classList.toggle('active');
      secondEllipse.classList.toggle('_active');
      if (secondCard.classList.contains('active')) {
         secondLinkText.innerHTML = text2;
      } else {
         secondLinkText.innerHTML = text1;
      }
   });
}
SelectedCard();