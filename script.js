        var btn = document.querySelector ('button');
        function changeColor(e){
            btn.style.backgroundColor = 'rgb(109, 185, 109)';
            btn.style.color = 'white';
            document.querySelector ('p').innerHTML = 'Great! The button changed its color'
            document.querySelector ('p').style.color = 'white';
            document.querySelector ('p').style.fontSize = '20px';
            document.querySelector ('p').style.position = 'absolute';
            document.querySelector ('p').style.top = '50%';
            document.querySelector ('p').style.left = '50%';
            document.querySelector ('p').style.transform = 'translate(-50%, 200%)';
            console.log(e);
        }
        btn.addEventListener('click',changeColor);