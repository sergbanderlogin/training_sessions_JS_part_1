'use strict';
console.log('--- Events in JavaScript. Part-2. Task-2. ---');
console.log('              ---------');

const generateNumbersRange = (start, end) => {
    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
};

const getSectorLine = lineNumber => {
    const seats = generateNumbersRange(1, 10)
        .map(number => `
            <div
                class="sector__seat"
                data-seat-number="${number}"
            ></div>
        `).join('');

    return `
        <div
            class="sector__line"
            data-line-number="${lineNumber}"
        >${seats}</div>
    `;
}

const getSector = sectorNumber => {
    const sectorLinesString = generateNumbersRange(1, 10)
        .map(getSectorLine)
        .join('');

    return `
        <div
            class="sector"
            data-sector-number="${sectorNumber}"
        >
            ${sectorLinesString}
        </div>
    `;
};

const renderArena = () => {
    const arenaElem = document.querySelector('.arena');
    const sectorsString = generateNumbersRange(1, 3)
        .map(getSector)
        .join('');

    arenaElem.innerHTML = sectorsString;
};

const handleSeatSelect = e => {
    e.stopPropagation();

    if (e.target.hasAttribute('data-seat-number')) {
        const seatNumber = e.target.getAttribute('data-seat-number');
        const lineNumber = e.target.closest('.sector__line').getAttribute('data-line-number');
        const sectorNumber = e.target.closest('.sector').getAttribute('data-sector-number');

        const selectedSeatElem = document.querySelector('.board__selected-seat');

        selectedSeatElem.innerHTML = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
    }
};

const initHandlers = () => {
    const arenaElem = document.querySelector('.arena');

    arenaElem.addEventListener('click', handleSeatSelect);
};

document.addEventListener('DOMContentLoaded', () => {
    renderArena();
    initHandlers();
});