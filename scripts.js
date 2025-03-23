function changeEye(eyeId) {
    const allEyes = document.querySelectorAll('.eye');
    allEyes.forEach(eye => {
        eye.style.display = 'none';
    });

    const selectedEye = document.getElementById(eyeId);
    selectedEye.style.display = 'block';
}

function changeHair(hairId) {
    const allHair = document.querySelectorAll('.hair');
    allHair.forEach(hair => {
        hair.style.display = 'none';
    });

    const selectedHair = document.getElementById(hairId);
    selectedHair.style.display = 'block';
}

function changeMouth(mouthId) {
    const allMouths = document.querySelectorAll('.mouth');
    allMouths.forEach(mouth => {
        mouth.style.display = 'none';
    });

    const selectedMouth = document.getElementById(mouthId);
    selectedMouth.style.display = 'block';
}

function changedown(downId) {
    const allDowns = document.querySelectorAll('.down');
    allDowns.forEach(down => {
        down.style.display = 'none';
    });

    const selectedDown = document.getElementById(downId);
    selectedDown.style.display = 'block';
}

function changeTop(topId) {
    const allTops = document.querySelectorAll('.top');
    allTops.forEach(top => {
        top.style.display = 'none';
    });

    const selectedTop = document.getElementById(topId);
    selectedTop.style.display = 'block';
}

function changeRx(rxId) {
    const allRxs = document.querySelectorAll('.rx');
    allRxs.forEach(rx => {
        rx.style.display = 'none';
    });

    const selectedRx = document.getElementById(rxId);
    selectedRx.style.display = 'block';
}