(function() {
    // 1. Locate the script tag that called this file
    var currentScript = document.currentScript;
    
    // Fallback for older browsers
    if (!currentScript) {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf('distilled-partner-hub.vercel.app/embed.js') !== -1) {
                currentScript = scripts[i];
                break;
            }
        }
    }

    if (!currentScript) {
        console.error('Distilled Hub: Could not locate embed script.');
        return;
    }

    // 2. Extract Partner Data
    var agentId = currentScript.getAttribute('data-agent-id') || 'YOUR_ID';
    var toolName = currentScript.getAttribute('data-tool') || 'reality-check';

    // 3. Create the iframe
    var iframe = document.createElement('iframe');
    
    // Notice the &embedded=true parameter. We will use this to hide the code generator on partner sites.
    iframe.src = 'https://distilled-partner-hub.vercel.app/' + toolName + '.html?agentID=' + agentId + '&embedded=true';
    
    // 4. Clean Styling to prevent double-scrollbars
    iframe.style.width = '100%';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    
    // Dynamic height based on the tool being loaded
    if (toolName === 'quiz') {
        iframe.style.minHeight = '750px';
    } else if (toolName === 'reality-check') {
        iframe.style.minHeight = '950px';
    } else {
        iframe.style.minHeight = '800px';
    }

    // 5. Inject the tool exactly where the partner pasted the script
    currentScript.parentNode.insertBefore(iframe, currentScript);
})();
