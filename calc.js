
window.onload= function() {
    var button = document.getElementById('button');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');

    button.addEventListener('click', function(u) {
        if (u.target.nodeName === 'LI') {//targeting list.
            var v = u.target.innerHTML;//putting content to v from u.
            if (v === '=') {
                try {
                    //evaluate
                answer.innerHTML = eval(answer.innerHTML);
                //eval function and puts back again answer.
                }
                catch (e) {
                    answer.innerHTML = e.message;
                //if error catch it and shows.otherwise proceede.    
                }
            }
            else {
                answer.innerHTML += v;//putting content to answer from v.
            }
            
        }

    })

    clear.addEventListener('click', function() {
        answer.innerHTML = '';
    })
}