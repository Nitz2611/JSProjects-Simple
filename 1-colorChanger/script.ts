const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');
const body: HTMLBodyElement | null = document.querySelector('body');

buttons.forEach(function (button: HTMLButtonElement) {
    button.addEventListener('click', function (e: MouseEvent) {
        
        if (!body|| !((e.target as HTMLButtonElement).id)) return; // Check if body is null
        
        console.log(e);
        const targetId = (e.target as HTMLButtonElement).id;
            
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
