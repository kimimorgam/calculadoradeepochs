function calcularTempoTotal() {
    const numEpochsInicio = parseFloat(document.getElementById("epochsInicio").value);
    const numEpochsFim = parseFloat(document.getElementById("epochsFim").value);
    const tempoMedio = parseFloat(document.getElementById("tempoMedio").value);

    if (isNaN(numEpochsInicio) || isNaN(numEpochsFim) || isNaN(tempoMedio)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
    } else {
        const totalEpochs = numEpochsFim - numEpochsInicio;
        const tempoTotalSegundos = totalEpochs * tempoMedio;
        const tempoTotalMinutos = Math.floor(tempoTotalSegundos / 60);
        const horas = Math.floor(tempoTotalMinutos / 60);
        const minutos = tempoTotalMinutos % 60;

        document.getElementById("resultado").innerText = `Tempo total para ${totalEpochs} epochs: ${horas} horas e ${minutos} minutos.`;
    }
}

function toggleVideoAudio() {
    var video = document.querySelector("iframe");
    if (video.muted) {
        video.muted = false; // Ativar o áudio
    } else {
        video.muted = true; // Desativar o áudio
    }
}