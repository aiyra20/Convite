// Função confete simples
function soltarConfete() {
    const duration = 1 * 1000; // 1s
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

document.addEventListener("DOMContentLoaded", () => {
    const abrir = document.getElementById("abrir");
    const fechar = document.getElementById("fechar");
    const modal = document.getElementById("modal");
    const confirmar = document.getElementById("confirmar");
    const msg = document.getElementById("msg");

    abrir.addEventListener("click", () => {
        modal.style.display = "flex";
        soltarConfete();
    });

    fechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    confirmar.addEventListener("click", () => {
        if (!confirmar.classList.contains("confirmed")) {
            confirmar.textContent = "Cancelar Confirmação";
            confirmar.classList.add("confirmed", "pulse");
            msg.textContent = "Presença confirmada! 🎉";
            soltarConfete();
            setTimeout(() => confirmar.classList.remove("pulse"), 900);
        } else {
            confirmar.textContent = "Confirmar Presença";
            confirmar.classList.remove("confirmed");
            msg.textContent = "";
        }
    });
});