(function() {
    // --- 1. The Security Handshake Modal ---
    const modalOverlay = document.createElement('div');
    modalOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #0d1117; color: #c9d1d9; z-index: 99999;
        display: flex; align-items: center; justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    `;

    modalOverlay.innerHTML = `
        <div style="background: #161b22; border: 1px solid #30363d; padding: 2rem; border-radius: 8px; max-width: 400px; text-align: center;">
            <h2 style="color: #58a6ff; margin-top: 0; font-size: 1.1rem;">RSPA NODE_SYNC REQUIRED</h2>
            <p style="font-size: 0.85rem; color: #8b949e; line-height: 1.5;">
                To maintain <b>Lattice-Integrity</b>, choose a deployment method:
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                <button id="btn-ghost" style="padding: 12px; background: #238636; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    Cloaked Launch (about:blank)
                </button>
                <button id="btn-exit" style="padding: 10px; background: transparent; color: #8b949e; border: 1px solid #30363d; border-radius: 6px; cursor: pointer;">
                    Exit to Syllabus
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    // --- 2. The about:blank Injection Logic ---
    const launchGhostMode = () => {
        // Open the ghost tab
        const win = window.open('about:blank', '_blank');
        
        if (!win || win.closed) {
            alert("RSPA_ERROR: Pop-up blocked. Please allow 'Handshake' in browser settings.");
            return;
        }

        // Set the Ghost Tab's metadata to your Homework title
        win.document.title = "Unit 4: Electrodynamics Practice";
        
        // Wipe the Ghost Tab and inject Anura
        const ghostDoc = win.document;
        ghostDoc.body.style.margin = '0';
        ghostDoc.body.style.padding = '0';
        ghostDoc.body.style.overflow = 'hidden';

        const frame = ghostDoc.createElement('iframe');
        frame.src = "https://anura.pro";
        frame.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            border: none; outline: none;
        `;

        ghostDoc.body.appendChild(frame);
        
        // Optional: Close the original "Syllabus" tab to leave no trace
        // window.close(); 
    };

    // Attach Listeners
    document.getElementById('btn-ghost').onclick = launchGhostMode;
    document.getElementById('btn-exit').onclick = () => document.body.removeChild(modalOverlay);

})();
