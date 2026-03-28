(function() {
        // 1. Wipe everything currently on the page
        document.body.innerHTML = '';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflow = 'hidden';

        // 2. Create and configure the Anura.pro iframe
        const frame = document.createElement('iframe');
        frame.src = "https://anura.pro";
        frame.style.position = 'fixed';
        frame.style.top = '0';
        frame.style.left = '0';
        frame.style.width = '100vw';
        frame.style.height = '100vh';
        frame.style.border = 'none';
        
        // 3. Put it on the screen
        document.body.appendChild(frame);
    })();
