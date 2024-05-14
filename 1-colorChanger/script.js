var buttons = document.querySelectorAll('.button');
var body = document.querySelector('body');
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (!body || !(e.target.id))
            return; // Check if body is null
        console.log(e);
        var targetId = e.target.id;
        switch (targetId) {
            case 'grey':
                body.style.backgroundColor = targetId;
                break;
            case 'white':
                body.style.backgroundColor = targetId;
                break;
            case 'blue':
                body.style.backgroundColor = targetId;
                break;
            case 'yellow':
                body.style.backgroundColor = targetId;
                break;
            case 'purple':
                body.style.backgroundColor = targetId;
                break;
            default:
                break;
        }
    });
});
