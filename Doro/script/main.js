const soundBtns = document.querySelectorAll('.sb_sound_btn');
const tooltipContainer = document.querySelector('#tooltip_container');
const tooltip = document.querySelector('#tooltip');
document.querySelector('#mute_btn').addEventListener('click', toggleMute);
let isMuted = false;



soundBtns.forEach(btn => btn.addEventListener('click', initPlayback));


function initPlayback() {
    positionTooltip(this);
    if(!isMuted) {
        const soundToGet = this.querySelector('img').getAttribute('alt');
        console.log(soundToGet);
        new Audio(`resources/sounds/${soundToGet}.wav`).play();
    }
    tooltipContainer.style.display = 'inline-flex';
    setTimeout(function() {
        tooltipContainer.style.display = 'none';
    }, 3000); // sätta tiden till ljudlängden
}

function positionTooltip(btn) {
    const btnSize = btn.getBoundingClientRect();
    const tooltipLeft = btnSize.left;
    const tooltipTop = btnSize.top + btnSize.height + 10;

    const p = tooltip.querySelector('p');
    p.textContent = `${btn.innerText} hello!`;
    tooltipContainer.style.left = `${tooltipLeft}px`;
    tooltipContainer.style.top = `${tooltipTop}px`;
}

function toggleMute() {
    isMuted = !isMuted;
    const speakerBtnIcon = document.querySelector('#mute_btn_img');
    speakerBtnIcon.src = speakerBtnIcon.src.includes('resources/img/icons/speaker-on.svg')  ? 'resources/img/icons/speaker-off.svg' : 'resources/img/icons/speaker-on.svg';

}